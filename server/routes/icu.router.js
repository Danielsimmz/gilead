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
    console.log('these are the incoming fluid balance inputs', req.body);

    //pull out the incoming object data
    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
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



 



//Handles POST to addgeneralinfo to add General Info to the "icu_general_chart" table
router.post('/addgeneralinfo', (req, res, next) => {
    console.log('these are the incoming general information inputs', req.body);

    //pull out the incoming object data

        const patient_id = Number(req.body.patient_id);
        const date_of_birth = req.body.date_of_birth;
        const admission_id = Number(req.body.admission_id) || 0;
        const date = req.body.date;
        const time = req.body.time;
        const duty_nurse_provider_id = Number(req.body.duty_nurse_provider_id);
        const duty_intensivist_provider_id = Number(req.body.duty_intensivist_provider_id);
        const physiotherapist_id = Number(req.body.physiotherapist_id);
        
        const provider_id_procedures_observations = req.body.provider_id_procedures_observations;
        const doc_procedures_observations = req.body.doc_procedures_observations;
        const doc_signature_procedures_observations = req.body.doc_signature_procedures_observations;

       const provider_id_doc_instructions = Number(req.body.provider_id_doc_instructions);
       const iv_doc_instructions = req.body.iv_doc_instructions;
       const medication_and_r_doc_instructions = req.body.medication_and_r_doc_instructions;
       const doc_instructions_signature = req.body.doc_instructions_signature;
       
        const diagnosis = req.body.diagnosis;
        const days_in_icu = Number(req.body.days_in_icu);
        const nursing_care_plan = req.body.nursing_care_plan;
        const invasive_line_type = req.body.invasive_line_type;
        const date_inserted = req.body.date_inserted;
        const invasive_line_date_due_for_change = req.body.invasive_line_date_due_for_change;
        const invasive_line_date_changed = req.body.invasive_line_date_changed;
        
        

    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_general_chart" 
                (patient_id, date_of_birth, admission_id, date, time, duty_nurse_provider_id, duty_intensivist_provider_id, physiotherapist_id, provider_id_procedures_observations, doc_procedures_observations, doc_signature_procedures_observations, provider_id_doc_instructions, iv_doc_instructions, medication_and_r_doc_instructions, doc_instructions_signature, days_in_icu, diagnosis, nursing_care_plan, invasive_line_type, date_inserted, invasive_line_date_due_for_change, invasive_line_date_changed)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, duty_nurse_provider_id, duty_intensivist_provider_id, physiotherapist_id, provider_id_procedures_observations, doc_procedures_observations, doc_signature_procedures_observations, provider_id_doc_instructions, iv_doc_instructions, medication_and_r_doc_instructions, doc_instructions_signature, days_in_icu, diagnosis, nursing_care_plan, invasive_line_type, date_inserted, invasive_line_date_due_for_change, invasive_line_date_changed])
        .then((result) => {
            console.log('this is the response for general info insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});






//Handles POST to addmedlist to add the Med List to the "icu_vitals_chart" table
router.post('/addmedlist', (req, res, next) => {
    console.log('these is the incoming med list', req.body);

    //pull out the incoming object data

    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const date = req.body.date;
    const time = req.body.time;
    const drugs = req.body.drugs;
    const dose = req.body.dose;
    const frequency = req.body.frequency;
    const drug_infusions = req.body.drug_infusions;
    const drug_infusion_dosage = req.body.drug_infusion_dosage;
    const drug_infusion_frequency = req.body.drug_infusion_frequency;
    const stat_emergency_medication = req.body.stat_emergency_medication;
    const dose_stat_emergency_medication = req.body.dose_stat_emergency_medication;
    const frequency_stat_emergency_medication = req.body.frequency_stat_emergency_medication;
    



    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_vitals_chart" 
                (patient_id, date_of_birth, admission_id, date, time, drugs, dose, frequency, drug_infusions, drug_infusion_dosage, drug_infusion_frequency, stat_emergency_medication, dose_stat_emergency_medication, frequency_stat_emergency_medication)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, drugs, dose, frequency, drug_infusions, drug_infusion_dosage, drug_infusion_frequency, stat_emergency_medication, dose_stat_emergency_medication, frequency_stat_emergency_medication])
        .then((result) => {
            console.log('this is the response for med list insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});








//Handles POST to addicumisc to add the icu miscellaneous inputs to the "icu_vitals_chart" table
router.post('/addicumisc', (req, res, next) => {
    console.log('these is the incoming misc inputs', req.body);

    //pull out the incoming object data

    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const date = req.body.date;
    const time = req.body.time;
    const pressure_points = req.body.pressure_points;
    const iv_checks = req.body.iv_checks;
    const hemocheck = req.body.hemocheck;
    const loc_m = Number(req.body.loc_m);
    const loc_e = Number(req.body.loc_e);
    const loc_v = Number(req.body.loc_v);
    const loc_total = Number(req.body.loc_total);
    const cannula_site = req.body.cannula_site;
    const _2hr_turns = req.body._2hr_turns;
    const pressure_support = req.body.pressure_support;
    const pain_score = req.body.pain_score;
    const sedation_score = req.body.sedation_score;
    const neuro_obs = req.body.neuro_obs;
    const iv_or_cvp_site = req.body.iv_or_cvp_site;
    const feet = req.body.feet;



    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_vitals_chart" 
                (patient_id, date_of_birth, admission_id, date, time, pressure_points, iv_checks, hemocheck, loc_m, loc_e, loc_v, loc_total, cannula_site, _2hr_turns, pressure_support, pain_score, sedation_score, neuro_obs, iv_or_cvp_site, feet)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, pressure_points, iv_checks, hemocheck, loc_m, loc_e, loc_v, loc_total, cannula_site, _2hr_turns, pressure_support, pain_score, sedation_score, neuro_obs, iv_or_cvp_site, feet])
        .then((result) => {
            console.log('this is the response for icu misc insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});



//Handles POST to addspecialinv to add the special investigations inputs to the "icu_general_chart" table
router.post('/addspecialinv', (req, res, next) => {
    console.log('these are the special investigation inputs', req.body);

    //pull out the incoming object data

    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const date = req.body.date;
    const time = req.body.time;
    const urinalysis_protein = req.body.urinalysis_protein;
    const urinalysis_acetone = req.body.urinalysis_acetone;
    const urinalysis_blood = req.body.urinalysis_blood;
    const urinalysis_bile = req.body.urinalysis_bile;
    const urinalysis_sg = req.body.urinalysis_sg;
    const urinalysis_ph = req.body.urinalysis_ph;
    const urine_collection_date = req.body.urine_collection_date;
    const urine_collection_time = req.body.urine_collection_time;
    const urine_result_date = req.body.urine_result_date;
    const urine_result_time = req.body.urine_result_time;
    const sputum_collection_date = req.body.sputum_collection_date;
    const sputum_collection_time = req.body.sputum_collection_time;
    const sputum_result_date = req.body.sputum_result_date;
    const sputum_result_time = req.body.sputum_result_time;
    const special_investigation_sputum_results = req.body.special_investigation_sputum_results;



    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "icu_general_chart" 
                (patient_id, date_of_birth, admission_id, date, time, urinalysis_protein, urinalysis_acetone, urinalysis_blood, urinalysis_bile, urinalysis_sg, urinalysis_ph, urine_collection_date, urine_collection_time, urine_result_date, urine_result_time, sputum_collection_date, sputum_collection_time, sputum_result_date, sputum_result_time, special_investigation_sputum_results)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, date, time, urinalysis_protein, urinalysis_acetone, urinalysis_blood, urinalysis_bile, urinalysis_sg, urinalysis_ph, urine_collection_date, urine_collection_time, urine_result_date, urine_result_time, sputum_collection_date, sputum_collection_time, sputum_result_date, sputum_result_time, special_investigation_sputum_results])
        .then((result) => {
            console.log('this is the response for the special investigation insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});





//Handles POST to addlabentering to add the lab results inputs to the "laboratory_results" table
router.post('/addlabentering', (req, res, next) => {
    console.log('these are the special investigation inputs', req.body);

    //pull out the incoming object data

    const patient_id = Number(req.body.patient_id);
    const date_of_birth = req.body.date_of_birth;
    const admission_id = Number(req.body.admission_id) || 0;
    const ordering_provider_id = Number(req.body.ordering_provider_id);
    const resulting_provider_id = Number(req.body.resulting_provider_id);
    const date_ordered = req.body.date_ordered;
    const time_ordered = req.body.time_ordered;
    const date_resulted = req.body.date_resulted;
    const time_resulted = req.body.time_resulted;
    const pcv = Number(req.body.pcv);
    const hb = Number(req.body.hb);
    const wcc = Number(req.body.wcc);
    const rbc = Number(req.body.rbc);
    const platelets = Number(req.body.platelets);
    const pi = Number(req.body.pi);
    const clotting_time = req.body.clotting_time;
    const sgot = Number(req.body.sgot);
    const spgt = Number(req.body.spgt);
    const ldh = Number(req.body.ldh);
    const cpk = Number(req.body.cpk);
    const urea = Number(req.body.urea);
    const na = Number(req.body.na);
    const k = Number(req.body.k);
    const cl = Number(req.body.cl);
    const creat = Number(req.body.creat);
    const protein_total = Number(req.body.protein_total);
    const albumin = Number(req.body.albumin);
    const globulin = Number(req.body.globulin);
    const eet_osmol = Number(req.body.eet_osmol);
    const urine_osmol = Number(req.body.urine_osmol);
    const ca = Number(req.body.ca);
    const mg = Number(req.body.mg);
    const po4 = Number(req.body.po4);
    const abgs = Number(req.body.abgs);
    const abe = Number(req.body.abe);
    const osat = Number(req.body.osat);



    //this is the query for the information to be put into the database
    const queryText = `INSERT INTO "laboratory_results"
                (patient_id, date_of_birth, admission_id, ordering_provider_id, resulting_provider_id, date_ordered, time_ordered, date_resulted, time_resulted, pcv, hb, wcc, rbc, platelets, pi, clotting_time, sgot, spgt, ldh, cpk, urea, na, k, cl, creat, protein_total, albumin, globulin, eet_osmol, urine_osmol, ca, mg, po4, abgs, abe, osat)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36) RETURNING id `;
    pool.query(queryText, [patient_id, date_of_birth, admission_id, ordering_provider_id, resulting_provider_id, date_ordered, time_ordered, date_resulted, time_resulted, pcv, hb, wcc, rbc, platelets, pi, clotting_time, sgot, spgt, ldh, cpk, urea, na, k, cl, creat, protein_total, albumin, globulin, eet_osmol, urine_osmol, ca, mg, po4, abgs, abe, osat])
        .then((result) => {
            console.log('this is the response for the lab results insertion', result.rows[0].id);
            res.sendStatus(201)
        }).catch(() => res.sendStatus(500));
});



module.exports = router;