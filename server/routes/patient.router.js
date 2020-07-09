const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//Handles POST to add the patient biographical information to the patient_biography table

router.post('/addpatient', (req, res, next) => {

    console.log('this is the new patient', req.body);
    // pull out the incoming object data
    
        const first_name = req.body.first_name;
        const middle_name = req.body.middle_name;
        const last_name = req.body.last_name;
        const date_of_birth = req.body.date_of_birth;
        const profile_picture= req.body.profile_picture.name || '';
        const phone_number = req.body.phone_number;
        const email =  req.body.email;
        const physical_address = req.body.physical_address;
        const mailing_address = req.body.mailing_address;
        const next_of_kin_first_name = req.body.next_of_kin_first_name;
        const next_of_kin_last_name = req.body.next_of_kin_last_name;
        const next_of_kin_phone_number = req.body.next_of_kin_phone_number;
        const next_of_kin_email= req.body.next_of_kin_email;
        const next_of_kin_relationship = req.body.next_of_kin_relationship;
        const sex = req.body.sex;
        const mass = req.body.mass;
        const height = req.body.height;
        const allergies = req.body.allergies;
        const age = req.body.age;
        const patient_alive = req.body.patient_alive;
        const medical_aid_provider = req.body.medical_aid_provider;
        const medical_aid_number = req.body.medical_aid_number;
        const patient_religion = req.body.patient_religion;
        const marital_status = req.body.marital_status;
        const father_first_name = req.body.father_first_name;
        const father_middle_name = req.body.father_middle_name;
        const father_last_name = req.body.father_last_name;
        const mother_first_name = req.body.mother_first_name;
        const mother_middle_name = req.body.mother_middle_name;
        const mother_last_name = req.body.mother_last_name;
        const occupation = req.body.occupation;
        const employer = req.body.employer;
    

 //this is the query for the information to be put into the database

    const queryText = `INSERT INTO "patient_biography" 
                (first_name, middle_name, last_name, date_of_birth, profile_picture, phone_number, email, physical_address, mailing_address, next_of_kin_first_name, next_of_kin_last_name, next_of_kin_phone_number, next_of_kin_email, next_of_kin_relationship, sex, mass, height, allergies, age, patient_alive, medical_aid_provider, medical_aid_number, patient_religion, marital_status, father_first_name, father_middle_name, father_last_name, mother_first_name, mother_middle_name, mother_last_name, occupation, employer)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32) RETURNING id`;
    pool.query(queryText, [first_name, middle_name, last_name, date_of_birth, profile_picture, phone_number, email, physical_address, mailing_address, next_of_kin_first_name, next_of_kin_last_name, next_of_kin_phone_number, next_of_kin_email, next_of_kin_relationship, sex, mass, height, allergies, age, patient_alive, medical_aid_provider, medical_aid_number, patient_religion, marital_status, father_first_name, father_middle_name, father_last_name, mother_first_name, mother_middle_name, mother_last_name, occupation, employer])
        .then((result) => {
            console.log('this is the response', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});




//This route is for updating the database with the new patient information
router.post('/updatepatient', (req, res, next) => {

    console.log('this is the patient update', req.body);
    // pull out the incoming object data
    
        const first_name = req.body.first_name;
        const middle_name = req.body.middle_name;
        const last_name = req.body.last_name;
        const date_of_birth = req.body.date_of_birth;
        const profile_picture= req.body.profile_picture.name || '';
        const phone_number = req.body.phone_number;
        const email =  req.body.email;
        const physical_address = req.body.physical_address;
        const mailing_address = req.body.mailing_address;
        const next_of_kin_first_name = req.body.next_of_kin_first_name;
        const next_of_kin_last_name = req.body.next_of_kin_last_name;
        const next_of_kin_phone_number = req.body.next_of_kin_phone_number;
        const next_of_kin_email= req.body.next_of_kin_email;
        const next_of_kin_relationship = req.body.next_of_kin_relationship;
        const sex = req.body.sex;
        const mass = req.body.mass;
        const height = req.body.height;
        const allergies = req.body.allergies;
        const age = req.body.age;
        const patient_alive = req.body.patient_alive;
        const medical_aid_provider = req.body.medical_aid_provider;
        const medical_aid_number = req.body.medical_aid_number;
        const patient_religion = req.body.patient_religion;
        const marital_status = req.body.marital_status;
        const father_first_name = req.body.father_first_name;
        const father_middle_name = req.body.father_middle_name;
        const father_last_name = req.body.father_last_name;
        const mother_first_name = req.body.mother_first_name;
        const mother_middle_name = req.body.mother_middle_name;
        const mother_last_name = req.body.mother_last_name;
        const occupation = req.body.occupation;
        const employer = req.body.employer;
        const id = req.body.id;
    

 //this is the query for the information to be put into the database

    const queryText = `UPDATE "patient_biography" SET first_name=$1, middle_name=$2, last_name=$3, date_of_birth=$4, profile_picture=$5, phone_number=$6, email=$7, physical_address=$8, mailing_address=$9, next_of_kin_first_name=$10, next_of_kin_last_name=$11, next_of_kin_phone_number=$12, next_of_kin_email=$13, next_of_kin_relationship=$14, sex=$15, mass=$16, height=$17, allergies=$18, age=$19, patient_alive=$20, medical_aid_provider=$21, medical_aid_number=$22, patient_religion=$23, marital_status=$24, father_first_name=$25, father_middle_name=$26, father_last_name=$27, mother_first_name=$28, mother_middle_name=$29, mother_last_name=$30, occupation=$31, employer=$32
                WHERE id =${id}`;
    pool.query(queryText, [first_name, middle_name, last_name, date_of_birth, profile_picture, phone_number, email, physical_address, mailing_address, next_of_kin_first_name, next_of_kin_last_name, next_of_kin_phone_number, next_of_kin_email, next_of_kin_relationship, sex, mass, height, allergies, age, patient_alive, medical_aid_provider, medical_aid_number, patient_religion, marital_status, father_first_name, father_middle_name, father_last_name, mother_first_name, mother_middle_name, mother_last_name, occupation, employer])
        .then((result) => {
            console.log('this is the update response', result.rows);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});




//this get is for conducting a search query for a patient. The incoming search terms
//look like: 
    // first_name: yadi,
    // middle_name: yadi,
    // last_name: yada,
    // sex: ehh,
    // date_of_birth: 101010

router.get('/searchpatient', (req, res) =>{
    console.log('we are in the patient search get, here are the search terms', req.query.first_name);

       const first_name = req.query.first_name;
       const middle_name = req.query.middle_name;
       const last_name = req.query.last_name;
       const sex = req.query.sex;
       const date_of_birth = req.query.date_of_birth;

    const queryText = `SELECT * FROM patient_biography WHERE first_name ilike $1 AND middle_name ilike $2 AND last_name ilike $3 AND sex ilike $4 AND date_of_birth = $5;`;
    pool.query(queryText, [first_name, middle_name, last_name, sex, date_of_birth]).then((result) => {
    
        console.log('Here are the results', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error on patient search query ${error}`);
        res.sendStatus(500);
    });
});




// DELETE an patient
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM patient_biography WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/patient', error);
        res.sendStatus(500);
    })
});




module.exports = router;