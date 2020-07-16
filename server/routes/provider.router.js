const express = require('express');
const pool = require('../modules/pool');
const encryptLib = require('../modules/encryption');

const router = express.Router();


  


//Handles POST to update the medical provider table to update a provider in the user table
//The password is encrypted before being inserted into the database
router.post('/updateprovider', (req, res, next) => {

  console.log('this is the new provider update', req.body);
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
  const clearance_level = req.body.clearance_level;
  const id = req.body.id;



  const queryText = `UPDATE "medical_providers" SET organizational_id =$1, username=$2, password=$3, first_name=$4, middle_name=$5, last_name=$6, date_of_birth=$7, employee_num=$8,  job_title=$9, specialty_title=$10, department_name=$11
                WHERE id =${id}`;
  pool.query(queryText, [organizational_id, username, password, first_name, middle_name, last_name, date_of_birth, employee_num, job_title, specialty_title, department_name])
    .then((result) => {
      console.log('this is the response', result.rows);
      
      //now lets update provider information in the user table (provider gets clearance of 2)
      const query2Text = `UPDATE "user" SET username=$1, password=$2, user_type=$3, clearance_level=$4, organization_id=$5, provider_id=$6 WHERE provider_id=${id}`;
      pool.query(query2Text, [username, password, 'provider', clearance_level, 0, id])
        .then((result) => {
           console.log('this is the update response in the user table', result.rows);
          res.sendStatus(201)})
        .catch(() => res.sendStatus(500))

    }).catch(() => res.sendStatus(500));
});


//this get is for conducting a search query for a patient. The incoming search terms
//look like: 
    // first_name: yadi,
    // middle_name: yadi,
    // last_name: yada,
    // job_title: ehh,
    // department_name: blah


router.get('/list', (req, res) => {
  console.log('We are about to get the provider list');

  const queryText = `SELECT * FROM medical_providers;`;
    pool.query(queryText)
      .then((result) => {
      console.log('Here is the provider list', result.rows);
      res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on provide search query ${error}`);
    res.sendStatus(500);
  });

});





router.get('/searchprovider', (req, res) =>{
    console.log('we are in the provider search get, here are the search terms', req.query.first_name);

       const first_name = req.query.first_name;
       const middle_name = req.query.middle_name;
       const last_name = req.query.last_name;
       const job_title = req.query.job_title;
       const department_name = req.query.department_name;

    const queryText = `SELECT * FROM medical_providers WHERE first_name ilike $1 AND last_name ilike $2 AND job_title ilike $3 AND department_name ilike $4 AND middle_name ilike $5;`;
    pool.query(queryText, [first_name, last_name, job_title, department_name, middle_name]).then((result) => {
    
        console.log('Here are the provider search results', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error on provide search query ${error}`);
        res.sendStatus(500);
    });
});




// DELETE an patient
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM medical_providers WHERE id=$1', [req.params.id])
      .then((result) => {

        //now lets delete provider information in the user table 
        pool.query(`DELETE FROM "user" WHERE provider_id=$1`, [req.params.id])
          .then((result) => {
            console.log('The provider has been deleted from the user table', result.rows);
            res.sendStatus(201)
          }).catch(() => res.sendStatus(500))
    }).catch((error) => {
        console.log('Error DELETE /api/patient', error);
        res.sendStatus(500);
    })
});





module.exports = router;
