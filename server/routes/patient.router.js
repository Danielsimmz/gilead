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
        const profile_picture= req.body.profile_picture;
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



module.exports = router;