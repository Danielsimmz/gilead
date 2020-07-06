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

  

 const queryText = 'INSERT INTO "organizations" (username, password, organization_name, admin_email, admin_phone_number, admin_first_name, admin_middle_name, admin_last_name, organizational_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
  pool.query(queryText, [username, password, organization_name, admin_email, admin_phone_number, admin_first_name, admin_middle_name, admin_last_name, organizational_url])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
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
