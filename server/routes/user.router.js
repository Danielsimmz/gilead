const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

//Handles POST to the medical provider table to add a new medical provider
//The password is encrypted before being inserted into the database
router.post('/addprovider', (req, res, next) => {

    console.log('this is the new provider', req.body);
    // pull out the incoming object data
      const organizational_id = req.body.organizational_id;
      const username = req.body.username;
      const password = encryptLib.encryptPassword(req.body.password);
      const first_name = req.body.first_name;
      const middle_name = req.body.middle_name;
      const last_name = req.body.last_name;
      const date_of_birth = req.body.date_of_birth;
      const employee_num = req.body.employee_num;
      const job_title = req.body.job_title;
      const specialty_title = req.body.specialty_title;
      const department_name = req.body.department_name;

      //initialize the id you will get from the provider
      let provider_id = '';

      const queryText = `INSERT INTO "medical_providers" 
                (organizational_id, username, password, first_name, middle_name, last_name, date_of_birth, employee_num,  job_title, specialty_title, department_name)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`;
          pool.query(queryText, [organizational_id, username, password, first_name, middle_name, last_name, date_of_birth, employee_num, job_title, specialty_title, department_name])
            .then((result) => {
              console.log('this is the response', result.rows[0].id);
              provider_id = result.rows[0].id;
              //now lets add provider information to the user table (provider gets clearance of 1)
              const query2Text = 'INSERT INTO "user" (username, password, user_type, clearance_level, organization_id, provider_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
              pool.query(query2Text, [username, password, 'provider', 2, 0, provider_id])
                .then(() => res.sendStatus(201))
                .catch(() => res.sendStatus(500))

            }).catch(() => res.sendStatus(500));
});


// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
console.log('this is', req.body);
  const admin_first_name = req.body.firstName;
  const admin_middle_name = req.body.middleName;
  const admin_last_name = req.body.lastName;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const organization_name = req.body.companyName;
  const admin_email = req.body.email;
  const admin_phone_number = req.body.phoneNumber;
  const organizational_url = req.body.customUrl;

  //initialize the id returned from inserting a new organization in a table
  let organization_id = '';

 const queryText = 'INSERT INTO "organizations" (username, password, organization_name, admin_email, admin_phone_number, admin_first_name, admin_middle_name, admin_last_name, organizational_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
  pool.query(queryText, [username, password, organization_name, admin_email, admin_phone_number, admin_first_name, admin_middle_name, admin_last_name, organizational_url])
    .then((result) => {
      console.log('this is the response', result.rows[0].id);
      organization_id = result.rows[0].id;
      //now lets add admin information to the user table (admin gets clearance of 1)
      const query2Text = 'INSERT INTO "user" (username, password, user_type, clearance_level, organization_id, provider_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
      pool.query(query2Text, [username, password, 'admin', 1, organization_id, 0])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500))
      }).catch(() => res.sendStatus(500));

      
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
