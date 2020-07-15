const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



//Handles POST to addbasicvitals to add basic vitals to the 
router.post('/addbasicvitals', (req, res, next) => {
    console.log('these are the incoming basic vitals', req.body);

    //pull out the incoming object data
        const patient_id = Number(req.body.patient_id);
        const date_of_birth = req.body.date_of_birth;
        const admission_id = Number(req.body.admission_id) || 0;
        const date = req.body.date;
        const time = req.body.time;
        const blood_pressure_systolic = Number(req.body.blood_pressure_systolic);
        const blood_pressure_diastolic = Number(req.body.blood_pressure_diastolic);
        const noninvasive_bp = req.body.noninvasive_bp;
        const temperature = Number(req.body.temperature);
        const temp_location = req.body.temp_location;
        const pulse_or_heart_rate = Number(req.body.pulse_or_heart_rate);
        const respiration_rate = Number(req.body.respiration_rate);
        const spo2 = Number(req.body.spo2);
        const patient_weight = Number(req.body.patient_weight);
        const patient_height = Number(req.body.patient_height);
        const blood_sugar = Number(req.body.blood_sugar);

        //this is the query for the information to be put into the database

        const queryText = `INSERT INTO "icu_vitals_chart" 
                (patient_id, date_of_birth, admission_id, date, time, blood_pressure_systolic, blood_pressure_diastolic, noninvasive_bp, temperature, temp_location, pulse_or_heart_rate, respiration_rate, spo2, patient_weight, patient_height, blood_sugar)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING id`;
        pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, blood_pressure_systolic, blood_pressure_diastolic, noninvasive_bp, temperature, temp_location, pulse_or_heart_rate, respiration_rate, spo2, patient_weight, patient_height, blood_sugar])
            .then((result) => {
                console.log('this is the response for basic vitals insertion', result.rows[0].id);
                res.sendStatus(201)
            }).catch(() => res.sendStatus(500));
});





//Handles POST to addblood gases to add blood gases to the blood gases table
router.post('/addbloodgases', (req, res, next) => {
    console.log('these are the incoming blood gases', req.body);

    //pull out the incoming object data
    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const date = req.body.date;
    const time = req.body.time;
    const ph = Number(req.body.ph);
    const pco2 = Number(req.body.pco2);
    const po2 = Number(req.body.po2);
    const hco3 = Number(req.body.hco3);
    const peep = Number(req.body.peep);
    const tv = Number(req.body.tv);
    const be = Number(req.body.be);
    const rr = Number(req.body.rr);
    const fio2 = Number(req.body.fio2);

    //this is the query for the information to be put into the database

    const queryText = `INSERT INTO "blood_gases" 
                (patient_id, date_of_birth, admission_id, date, time, ph, pco2, po2, hco3, peep, tv, be, rr, fio2)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id`;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, ph, pco2, po2, hco3, peep, tv, be, rr, fio2])
        .then((result) => {
            console.log('this is the response for blood gases insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});




//Handles POST to addcardiacresp to add basic vitals to the 
router.post('/addcardiacresp', (req, res, next) => {
    console.log('these are the incoming cardiac resp', req.body);

    //pull out the incoming object data
    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const date = req.body.date;
    const time = req.body.time;
    const cardiac_rhythm = req.body.cardiac_rhythm;
    const cvp = Number(req.body.cvp);
    const minute_volume = Number(req.body.minute_volume);
    const patient_tidal_volume = Number(req.body.patient_tidal_volume);
    const suction = req.body.suction;
    const intake_oxygen_rate = Number(req.body.intake_oxygen_rate);
    const color = req.body.color;
    const map = Number(req.body.map);
    const pap = Number(req.body.pap);
    const pawp = Number(req.body.pawp);
    const lt_auscultation = req.body.lt_auscultation;
    const rt_auscultation = req.body.rt_auscultation;
    const perfusion = req.body.perfusion;
    const ventilation_mode = req.body.ventilation_mode;
    const ventilation_rate = Number(req.body.ventilation_rate);
    const set_tidal_volume = Number(req.body.set_tidal_volume);
    const peak_airway_pressure = Number(req.body.peak_airway_pressure);
    const rt_pedal_pulse = Number(req.body.rt_pedal_pulse);
    const lt_pedal_pulse = Number(req.body.lt_pedal_pulse);
    const lt_pedal_pulse_score = Number(req.body.lt_pedal_pulse_score);
    const rt_pedal_pulse_score = Number(req.body.rt_pedal_pulse_score);
    const cpap_peep = Number(req.body.cpap_peep);
    const gas_temperature = Number(req.body.gas_temperature);
    const humidifier_ho_level = req.body.humidifier_ho_level;
    const emptying_vent_tubes = req.body.emptying_vent_tubes;
    const ett_measure = Number(req.body.ett_measure);
    const feet = req.body.feet;
    const pressure_support = req.body.pressure_support;


    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_vitals_chart" 
                (patient_id, date_of_birth, admission_id, date, time, cardiac_rhythm, cvp, minute_volume, patient_tidal_volume, suction, intake_oxygen_rate, color, map, pap, pawp, lt_auscultation, rt_auscultation, perfusion, ventilation_mode, ventilation_rate, set_tidal_volume, peak_airway_pressure, rt_pedal_pulse, lt_pedal_pulse, lt_pedal_pulse_score, rt_pedal_pulse_score, cpap_peep, gas_temperature, humidifier_ho_level, emptying_vent_tubes, ett_measure, feet, pressure_support)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, cardiac_rhythm, cvp, minute_volume, patient_tidal_volume, suction, intake_oxygen_rate, color, map, pap, pawp, lt_auscultation, rt_auscultation, perfusion, ventilation_mode, ventilation_rate, set_tidal_volume, peak_airway_pressure, rt_pedal_pulse, lt_pedal_pulse, lt_pedal_pulse_score, rt_pedal_pulse_score, cpap_peep, gas_temperature, humidifier_ho_level, emptying_vent_tubes, ett_measure, feet, pressure_support])
        .then((result) => {
            console.log('this is the response for basic vitals insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});




//Handles POST to addfluidbalance to add Fluid Balance to the "icu_fluid_balance" table
router.post('/addfluidbalance', (req, res, next) => {
    console.log('these are the incoming fluid balance input', req.body);

    //pull out the incoming object data
    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id);
    const date = req.body.date;
    const time = req.body.time;
    const intravenous_fluid_intake_type = req.body.intravenous_fluid_intake_type;
    const intravenous_fluid_intake_amount = Number(req.body.intravenous_fluid_intake_amount);
    const oral_intake_type = req.body.oral_intake_type;
    const oral_intake_amount = Number(req.body.oral_intake_amount);
    const oral_intake_hourly_total = Number(req.body.oral_intake_hourly_total);
    const gastric_feed_intake_type = req.body.gastric_feed_intake_type;
    const gastric_feed_intake_amount = Number(req.body.gastric_feed_intake_amount);
    const nasogastric_suction_and_vomitus_output = Number(req.body.nasogastric_suction_and_vomitus_output);
    const portovac_under_h2o_drain_output = Number(req.body.portovac_under_h2o_drain_output);
    const stool_drainage_output = Number(req.body.stool_drainage_output);
    const urine_ouput = Number(req.body.urine_ouput);
    const hourly_urine_output = Number(req.body.hourly_urine_output);
    const nig_aspirate_output = Number(req.body.nig_aspirate_output);
    const sg_output = Number(req.body.sg_output);
    const output_test = req.body.output_test;
    const running_output_total = Number(req.body.running_output_total);
    const hourly_balance = Number(req.body.hourly_balance);


    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_fluid_balance" 
                (patient_id, date_of_birth, admission_id, date, time, intravenous_fluid_intake_type, intravenous_fluid_intake_amount, oral_intake_type, oral_intake_amount, oral_intake_hourly_total, gastric_feed_intake_type, gastric_feed_intake_amount, nasogastric_suction_and_vomitus_output, portovac_under_h2o_drain_output, stool_drainage_output, urine_ouput, hourly_urine_output, nig_aspirate_output, sg_output, output_test, running_output_total, hourly_balance)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, intravenous_fluid_intake_type, intravenous_fluid_intake_amount, oral_intake_type, oral_intake_amount, oral_intake_hourly_total, gastric_feed_intake_type, gastric_feed_intake_amount, nasogastric_suction_and_vomitus_output, portovac_under_h2o_drain_output, stool_drainage_output, urine_ouput, hourly_urine_output, nig_aspirate_output, sg_output, output_test, running_output_total, hourly_balance])
        .then((result) => {
            console.log('this is the response for fluid balance insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});



 



//Handles POST to addgeneralinfo to add General Info to the "icu_fluid_balance" table
router.post('/addgeneralinfo', (req, res, next) => {
    console.log('these are the incoming general information input', req.body);

    //pull out the incoming object data
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        duty_nurse_first_name: '',
        duty_nurse_middle_name: '',
        duty_nurse_last_name: '',
        duty_intensivist_first_name: '',
        duty_intensivist_middle_name: '',
        duty_intensivist_last_name: '',
        physiotherapist_first_name: '',
        physiotherapist_middle_name: '',
        physiotherapist_last_name: '',
        
        days_in_icu: '',
        doc_procedures_observations: '',
        doc_signature_procedures_observations: '',
        provider_first_name_procedures_observations: '',
        provider_middle_name_procedures_observations: '',
        provider_last_name_procedures_observations: '',
        provider_specialty_procedures_observations: '',
        diagnosis: '',
        provider_first_name_iv_doc_instructions: '',
        provider_middle_name_iv_doc_instructions: '',
        provider_last_name_iv_doc_instructions: '',
        provider_specialty_iv_doc_instructions: '',
        iv_doc_instructions: '',
        medication_and_r_doc_instructions: '',
        nursing_care_plan: '',
        invasive_line_type: '',
        date_inserted: '',
        invasive_line_date_due_for_change: '',
        invasive_line_date_changed: '',



    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_general_chart" 
                (patient_id, date_of_birth, admission_id, date, time, intravenous_fluid_intake_type, intravenous_fluid_intake_amount, oral_intake_type, oral_intake_amount, oral_intake_hourly_total, gastric_feed_intake_type, gastric_feed_intake_amount, nasogastric_suction_and_vomitus_output, portovac_under_h2o_drain_output, stool_drainage_output, urine_ouput, hourly_urine_output, nig_aspirate_output, sg_output, output_test, running_output_total, hourly_balance)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, intravenous_fluid_intake_type, intravenous_fluid_intake_amount, oral_intake_type, oral_intake_amount, oral_intake_hourly_total, gastric_feed_intake_type, gastric_feed_intake_amount, nasogastric_suction_and_vomitus_output, portovac_under_h2o_drain_output, stool_drainage_output, urine_ouput, hourly_urine_output, nig_aspirate_output, sg_output, output_test, running_output_total, hourly_balance])
        .then((result) => {
            console.log('this is the response for fluid balance insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});






module.exports = router;