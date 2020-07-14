import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';



class Icu extends Component {
    state = {
        patient_id: '',
        date_of_birth: '',
        admission_id: '',
        date: '',
        time: '',
        blood_pressure_systolic: '',
        blood_pressure_diastolic: '',
        noninvasive_bp: '',
        temperature: '',
        temp_location: '',
        pulse_or_heart_rate: '',
        respiration_rate: '',
        spo2: ' ',
        patient_weight: '',
        patient_height: '',
        blood_sugar: '',

      //////////////////////////END OF BASIC VITALS 
        cardiac_rhythm: '',
        cvp: '',
        minute_volume: '',
        patient_tidal_volume: '',
        suction: '',
        intake_oxygen_rate: '',
        color: '',
        map: '',
        pap: '',
        pawp: '',
        lt_auscultation: '',
        rt_auscultation: '',
        perfusion: '',
        ventilation_mode: '',
        ventilation_rate: '',
        set_tidal_volume: '',
        peak_airway_pressure: '',
        rt_pedal_pulse: '',
        lt_pedal_pulse: '',
        lt_pedal_pulse_score: '',
        rt_pedal_pulse_score: '',
        cpap_peep: '',
        gas_temperature: '',
        humidifier_ho_level: '',
        emptying_vent_tubes: '',
        ett_measure: '',

        ///// End of cardiac and respiratory readings///
        pressure_points: '',
        iv_checks: '',
        hemocheck: '',
        loc_m: '',
        loc_e: '',
        loc_v: '',
        loc_total: '',
        cannula_site: '',
        _2hr_turns: '',
        pressure_support: '',
        pain_score: '',
        sedation_score: '',
        neuro_obs: '',
        iv_or_cvp_site: '',
        feet: '',

        ////Drug section
        drugs: '',
        dose: '',
        frequency: '',
        drug_infusions: '',
        drug_infusion_dosage: '',
        drug_infusion_frequency: '',
        stat_emergency_medication: '',
        dose_stat_emergency_medication: '',
        frequency_stat_emergency_medication: '',


           //// Blood Gases ////
            ph: '',
            pco2: '',
            po2: '',
            hco3: '',
            peep: '',
            tv: '',
            be: '',
            rr: '',
            fio2: '',

        ////Lab Section////
        ordering_first_name: '',
        ordering_middle_name: '',
        ordering_last_name: '',
        resulting_first_name: '',
        resulting_middle_name: '',
        resulting_last_name: '',
        date_ordered: '',
        time_ordered: '',
        date_resulted: '',
        time_resulted: '',
        pcv: '',
        hb: '',
        wcc: '',
        rbc: '',
        platelets: '',
        pi: '',
        clotting_time: '',
        sgot: '',
        spgt: '',
        ldh: '',
        cpk: '',
        urea: '',
        na: '',
        k: '',
        cl: '',
        creat: '',
        protein_total: '',
        albumin: '',
        globulin: '',
        eet_osmol: '',
        urine_osmol: '',
        ca: '',
        mg: '',
        po4: '',
        abgs: '',
        abe: '',
        osat: '',

        //// ICU Fluid Balance /////
        	intravenous_fluid_intake_type: '',
        	intravenous_fluid_intake_amount: '',
        	oral_intake_type: '',
        	oral_intake_amount: '',
        	oral_intake_hourly_total: '',
        	gastric_feed_intake_type: '',
            gastric_feed_intake_amount: '',
        	nasogastric_suction_and_vomitus_output: '',
        	portovac_under_h2o_drain_output: '',
        	stool_drainage_output: '',
        	urine_ouput: '',
        	hourly_urine_output: '',
        	nig_aspirate_output: '',
        	sg_output: '',
        	output_test: '',
        	running_output_total: '',
        	hourly_balance: '',
            iv_therapy_fluids_bf: '',
            
            ////ICU general chart
            duty_nurse_first_name: '',
            duty_nurse_middle_name: '',
            duty_nurse_last_name: '',
            duty_intensivist_first_name: '',
            duty_intensivist_middle_name: '',
            duty_intensivist_last_name: '',
            physiotherapist_first_name: '',
            physiotherapist_middle_name: '',
            physiotherapist_last_name: '',

            /////
            days_in_icu: '',
            doc_procedures_observations: '',
            doc_signature_procedures_observations: '',
            provider_first_name_procedures_observations: '',
            provider_middle_name_procedures_observations: '',
            provider_last_name_procedures_observations: '',
            provider_specialty_procedures_observations: '',
            diagnosis: '',
            
            /////
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
            urinalysis_protein: '',
            urinalysis_acetone: '',
            urinalysis_blood: '',
            urinalysis_bile: '',
            urinalysis_sg: '',
            urinalysis_ph: '',
            urine_collection_date:'',
            urine_collection_time: '',
            urine_result_date: '',
            urine_result_time: '',
            sputum_collection_date: '',
            sputum_collection_time: '',
            sputum_result_date: '',
            sputum_result_time: '',
            special_investigation_sputum_results: '',

    }

    //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render () {
        return(

<div>
                <h1 style={{  width: '50%', margin: '2% 40%' }}>ICU Chart</h1>
    <Card border = "success" style={{ width: '85%', margin: '3% auto' }} >
        <h2 className="formsheader" style={{   width: '50%', margin: '2% 40% -4%', }}>Basic Vitals</h2>
        <Form >  
            <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
            <Row>
                <Col>
        <Form.Label>Systolic BP (mmHg)  /</Form.Label>
                <Form.Control placeholder="Systolic BP" type="number" name="blood_pressure_systolic" value={this.state.blood_pressure_systolic} onChange={this.handleInputChangeFor('blood_pressure_systolic')}/>
                </Col>

                 <Col>
                <Form.Label>Diastolic BP (mmHg)</Form.Label>
                <Form.Control placeholder="Diastolic BP" type="number" name="blood_pressure_diastolic" value={this.state.blood_pressure_diastolic} onChange={this.handleInputChangeFor('blood_pressure_diastolic')}/>
                </Col>

                <Col>
                <Form.Label>Bp Measured Invasively?</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({noninvasive_bp: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>Pulse or Heart Rate (BPM)</Form.Label>
                <Form.Control placeholder="Pulse/Heart Rate" type="number" name="pulse_or_heart_rate" value={this.state.pulse_or_heart_rate} onChange={this.handleInputChangeFor('pulse_or_heart_rate')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label> Temperature (°C) </Form.Label>
                <Form.Control placeholder="Temperature" type="number" name="temperature" value={this.state.temperature} onChange={this.handleInputChangeFor('temperature')}/>
                </Col>
                  <Col>
                <Form.Label>Temp measurement area </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({temp_location: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="Core">Core</option>
                    <option value="Rectal">Rectal</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>Respiration Rate (Breaths/min)</Form.Label>
                <Form.Control placeholder="Respiration Rate" type="number" name="respiration_rate" value={this.state.respiration_rate} onChange={this.handleInputChangeFor('respiration_rate')}/>
                </Col>
                 <Col>
                <Form.Label>Oxygen Saturation (%)</Form.Label>
                <Form.Control placeholder="Oxygen Saturation/SpO2" type="number" name="spo2" value={this.state.spo2} onChange={this.handleInputChangeFor('spo2')}/>
                </Col>
            </Row>
            <Row>
                 <Col>
                <Form.Label>Patient Weight (kg)</Form.Label>
                <Form.Control placeholder="Patient Weight" type="number" name="patient_weight" value={this.state.patient_weight} onChange={this.handleInputChangeFor('patient_weight')}/>
                </Col>
                <Col>
                <Form.Label>Patient Height (m)</Form.Label>
                <Form.Control placeholder="Patient Height" type="number" name="patient_height" value={this.state.patient_height} onChange={this.handleInputChangeFor('patient_height')}/>
                </Col>
                <Col>
                <Form.Label>Blood Sugar (mmol/L)</Form.Label>
                <Form.Control placeholder="Blood Sugar" type="number" name="blood_sugar" value={this.state.blood_sugar} onChange={this.handleInputChangeFor('blood_sugar')}/>
                </Col>
            </Row>
             <Button onClick={(event)=>this.icuBasicVitals(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Basic Vitals Inputs</Button>
               
                <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Cardiac & Respiratory</h2>
              <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
            
             <Row>
                 <Col>
                <Form.Label>Cardiac Rhythm </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({cardiac_rhythm: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Sinus Rhythm">Sinus Rhythm</option>
                    <option value="Sinus Tachycardia">Sinus Tachycardia</option>
                    <option value="Sinus Bradycardia">Sinus Bradycardia</option>
                    <option value="Supraventricular Tachycardia">Supraventricular Tachycardia</option>
                    <option value="Atrial Fibrillation">Atrial Fibrillation</option>
                    <option value="Atrial Flutter">Atrial Flutter</option>
                    <option value="Ventricular Ectopic">Ventricular Ectopic</option>
                    <option value="Ventricular Tachycardia">Ventricular Tachycardia</option>
                    <option value="Ventricular Fibrillation">Ventricular Fibrallation</option>
                    <option value="Asystole">Asystole</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label> Cvp (cmH₂O) </Form.Label>
                <Form.Control placeholder="Cvp" type="number" name="cvp" value={this.state.cvp} onChange={this.handleInputChangeFor('cvp')}/>
                 </Col>
                 <Col>
                 <Form.Label> Minute Volume (L/min) </Form.Label>
                <Form.Control placeholder="Minute Volume" type="number" name="minute_volume" value={this.state.minute_volume} onChange={this.handleInputChangeFor('minute_volume')}/>
                 </Col>
                 <Col>
                 <Form.Label> Patient Tidal Volume (mL) </Form.Label>
                <Form.Control placeholder="Pt Tidal Volume" type="number" name="patient_tidal_volume" value={this.state.patient_tidal_volume} onChange={this.handleInputChangeFor('patient_tidal_volume')}/>
                 </Col>
             </Row>
             <Row>
                  <Col>
                <Form.Label>Suction </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({suction: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                 </Form.Control>
                 </Col>
                 <Col>
                 <Form.Label> O₂ Intake (L/min) </Form.Label>
                <Form.Control placeholder="Oxygen Take" type="number" name="intake_oxygen_rate" value={this.state.intake_oxygen_rate} onChange={this.handleInputChangeFor('intake_oxygen_rate')}/>
                 </Col>
                  <Col>
                <Form.Label>Lt-Auscultation </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({lt_auscultation: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="Apical">Apical</option>
                    <option value="Basal">Basal</option>
                    <option value="Crepitations">Crepitations</option>
                    <option value="Stridor">Stridor</option>
                 </Form.Control>
                 </Col>
                  <Col>
                <Form.Label>Rt-Auscultation </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({rt_auscultation: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Apical">Apical</option>
                    <option value="Basal">Basal</option>
                    <option value="Crepitations">Crepitations</option>
                    <option value="Stridor">Stridor</option>
                 </Form.Control>
                 </Col>
             </Row>
             <Row>
                 <Col>
                 <Form.Label> Map (mmHg)</Form.Label>
                <Form.Control placeholder="Map" type="number" name="map" value={this.state.map} onChange={this.handleInputChangeFor('map')}/>
                 </Col>
                 <Col>
                 <Form.Label> Pap (mmHg) </Form.Label>
                <Form.Control placeholder="Pap" type="number" name="pap" value={this.state.pap} onChange={this.handleInputChangeFor('pap')}/>
                 </Col>
                  <Col>
                 <Form.Label> Pawp (mmHg) </Form.Label>
                <Form.Control placeholder="Pawp" type="number" name="pawp" value={this.state.pawp} onChange={this.handleInputChangeFor('pawp')}/>
                 </Col>
                    <Col>
                <Form.Label>Color </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({color: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Good">Good</option>
                    <option value="Jaundiced">Jaundiced</option>
                    <option value="Pale">Pale</option>
                 </Form.Control>
                 </Col>
             </Row>
            <Row>
                  <Col>
                 <Form.Label>Perfusion </Form.Label>
                <Form.Control placeholder="Perfusion" type="text" name="perfusion" value={this.state.perfusion} onChange={this.handleInputChangeFor('perfusion')}/>
                 </Col>
                 <Col>
                <Form.Label>Ventilation Mode </Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({ventilation_mode: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Assist Control">Assist Control</option>
                    <option value="Synchronized intermittent mandatory">Synchronized intermittent mandatory</option>
                    <option value="Pressure Support">Pressure Support</option>
                    <option value="Airway Pressure Release">Airway Pressure Release</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label> Ventilation Rate (L/min) </Form.Label>
                <Form.Control placeholder="Ventilation Rate" type="number" name="ventilation_rate" value={this.state.ventilation_rate} onChange={this.handleInputChangeFor('ventilation_rate')}/>
                 </Col>
                  <Col>
                 <Form.Label> Set Tidal Volume (mL/kg) </Form.Label>
                <Form.Control placeholder="Set Tidal Volume" type="number" name="set_tidal_volume" value={this.state.set_tidal_volume} onChange={this.handleInputChangeFor('set_tidal_volume')}/>
                 </Col>
            </Row>
    
            <Row>
                <Col>
                 <Form.Label> Peak Airway Pressure (cmH₂O) </Form.Label>
                <Form.Control placeholder="Peak Airway Pressure" type="number" name="peak_airway_pressure" value={this.state.peak_airway_pressure} onChange={this.handleInputChangeFor('peak_airway_pressure')}/>
                 </Col>
                 <Col>
                 <Form.Label> CPAP/PEEP (cmH₂O) </Form.Label>
                <Form.Control placeholder="CPAP/PEEP" type="number" name="cpap_peep" value={this.state.cpap_peep} onChange={this.handleInputChangeFor('cpap_peep')}/>
                 </Col>
                 <Col>
                 <Form.Label> Gas Temperature (°C) </Form.Label>
                <Form.Control placeholder="Gas Temperature" type="number" name="gas_temperature" value={this.state.gas_temperature} onChange={this.handleInputChangeFor('gas_temperature')}/>
                 </Col>
                  <Col>
                 <Form.Label> ETT Measure (cm) </Form.Label>
                <Form.Control placeholder="ETT Measure" type="number" name="ett_measure" value={this.state.ett_measure} onChange={this.handleInputChangeFor('ett_measure')}/>
                 </Col>
            </Row>
            
            <Row>
                <Col>
                 <Form.Label> Pressure Support </Form.Label>
                <Form.Control placeholder="Pressure Support" type="text" name="pressure_support" value={this.state.pressure_support} onChange={this.handleInputChangeFor('pressure_support')}/>
                 </Col>
                  <Col>
                <Form.Label>Humidifier H₂O Level Check</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({humidifier_ho_level: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                  <Col>
                <Form.Label>Emptying Vent Tubes Check</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({emptying_vent_tubes: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                    <Col>
                <Form.Label>Feet Check</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({feet: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Warm">Warm</option>
                    <option value="Cool">Cool</option>
                    <option value="Cold">Cold</option>
                 </Form.Control>
                 </Col>
            </Row>
            <Row>
                 <Col>
                 <Form.Label>R-Pedal Pulse (BPM)</Form.Label>
                <Form.Control placeholder="Right Pedal Pulse" type="number" name="rt_pedal_pulse" value={this.state.rt_pedal_pulse} onChange={this.handleInputChangeFor('rt_pedal_pulse')}/>
                 </Col>
                    <Col>
                <Form.Label>R-Pedal Pulse Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({rt_pedal_pulse_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="0">0 - No Pulse</option>
                    <option value="1">1 - Faint</option>
                    <option value="2">2 - Normal</option>
                    <option value="3">3 - Bounding</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label>L-Pedal Pulse (BPM)</Form.Label>
                <Form.Control placeholder="Left Pedal Pulse" type="number" name="lt_pedal_pulse" value={this.state.lt_pedal_pulse} onChange={this.handleInputChangeFor('lt_pedal_pulse')}/>
                 </Col>
                      <Col>
                <Form.Label>L-Pedal Pulse Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({lt_pedal_pulse_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="0">0 - No Pulse</option>
                    <option value="1">1 - Faint</option>
                    <option value="2">2 - Normal</option>
                    <option value="3">3 - Bounding</option>
                 </Form.Control>
                 </Col>
            </Row>

             <Button onClick={(event)=>this.icuCardiacResp(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Cardiac & Respiratory Inputs</Button>

        <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Miscellaneous</h2>

          <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
                        
            <Row>
                <Col>
                <Form.Label>Pressure Points</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({pressure_points: event.target.value})}>
                    <option value="">Pick From Below </option>
                    <option value="Intact">Intact </option>
                    <option value="Red">Red</option>
                    <option value="Bruised">Bruised</option>
                    <option value="Skin Broken">Skin Broken</option>
                    <option value="Blister">Blister</option>
                    <option value="Necrosis">Necrosis</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label>IV or CVP site</Form.Label>
                <Form.Control placeholder="IV or CVP Site" type="text" name="iv_or_cvp_site" value={this.state.iv_or_cvp_site} onChange={this.handleInputChangeFor('iv_or_cvp_site')}/>
                 </Col>
                   <Col>
                <Form.Label>IV Checks</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({iv_checks: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                   <Col>
                <Form.Label>Hemocheck</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({hemocheck: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label>Cannula Site</Form.Label>
                <Form.Control placeholder="Cannula Site" type="text" name="cannula_site" value={this.state.cannula_site} onChange={this.handleInputChangeFor('cannula_site')}/>
                 </Col>
            </Row>
            <Row>
                   <Col>
                <Form.Label>LOC - M</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_m: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>LOC - E</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_e: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                 </Form.Control>
                 </Col>
                       <Col>
                <Form.Label>LOC - V</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_v: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </Form.Control>
                 </Col>
                <Col>
                 <Form.Label>LOC - Total</Form.Label>
                <Form.Control placeholder="LOC - Total" type="number" name="loc_total" value={this.state.loc_total} onChange={this.handleInputChangeFor('loc_total')}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                <Form.Label>2hr Turns</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({_2hr_turns: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="None">None</option>
                    <option value="Supine Position">Supine Position</option>
                    <option value="Prone Position">Prone Position</option>
                    <option value="Lateral Position">Lateral Position</option>
                    <option value="Sims Position">Sims Position</option>
                    <option value="Fowler's Position">Fowler's Position</option>
                    <option value="Semi-Fowler's Position">Semi-Fowler's Position</option>
                    <option value="Orthopneic or Tripod">Orthopneic or Tripod</option>
                    <option value="Trendelenburg position">Trendelenburg position</option>
                 </Form.Control>
                 </Col>
                <Col>
                <Form.Label>Pain Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({pain_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="0 - No Pain">0 - No Pain</option>
                    <option value="1 - Mild Pain">1 - Mild Pain</option>
                    <option value="2 - Moderate Pain">2 - Moderate Pain</option>
                    <option value="3 - Severe Pain">3 - Severe Pain</option>
                    <option value="4 - Very Severe Pain">4- Very Severe Pain</option>
                    <option value="5 - Worst Possible Pain">5 - Worst Possible Pain</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>Sedation Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({sedation_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1 - Awake">1 - Awake</option>
                    <option value="2 - Dozing Intermittently">2 - Dozing Intermittently</option>
                    <option value="3 - Mostly Sleeping">3 - Mostly Sleeping</option>
                    <option value="4 - Awakens When Roused">4- Awakens When Roused</option>
                    <option value="5 - Unrousable">5 - Unrousable</option>
                 </Form.Control>
                 </Col>
                   <Col>
                 <Form.Label>Neuro Observations</Form.Label>
                <Form.Control placeholder="Neuro Observations" type="text" name="neuro_obs" value={this.state.neuro_obs} onChange={this.handleInputChangeFor('neuro_obs')}/>
                 </Col>
            </Row>
   
            
           <Button onClick={(event)=>this.icuMiscellaneous(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Miscellaneous Inputs</Button>
            
            
            <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Medication List</h2>

          <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
            <Row>
                 <Col>
                <Form.Label>Medication</Form.Label>
                <Form.Control placeholder="Medication" type="text" name="drugs" value={this.state.drugs} onChange={this.handleInputChangeFor('drugs')}/>
                </Col>
                 <Col>
                <Form.Label>Dosage</Form.Label>
                <Form.Control placeholder="Dosage" type="text" name="dose" value={this.state.dose} onChange={this.handleInputChangeFor('dose')}/>
                </Col>
                  <Col>
                <Form.Label>Frequency</Form.Label>
                <Form.Control placeholder="Frequency" type="text" name="frequency" value={this.state.frequency} onChange={this.handleInputChangeFor('frequency')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label>Drug Infusion Name</Form.Label>
                <Form.Control placeholder="Drug Infusion Name" type="text" name="drug_infusions" value={this.state.drug_infusions} onChange={this.handleInputChangeFor('drug_infusions')}/>
                </Col>
                <Col>
                <Form.Label>Drug Infusion Dosage </Form.Label>
                <Form.Control placeholder="Drug Infusion Dosage" type="text" name="drug_infusion_dosage" value={this.state.drug_infusion_dosage} onChange={this.handleInputChangeFor('drug_infusion_dosage')}/>
                </Col>
                <Col>
                <Form.Label>Drug Infusion Frequency </Form.Label>
                <Form.Control placeholder="Drug Infusion Frequency" type="text" name="drug_infusion_frequency" value={this.state.drug_infusion_frequency} onChange={this.handleInputChangeFor('drug_infusion_frequency')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label>Stat Emergency Medication</Form.Label>
                <Form.Control placeholder="Stat Emergency Medication" type="text" name="stat_emergency_medication" value={this.state.stat_emergency_medication} onChange={this.handleInputChangeFor('stat_emergency_medication')}/>
                </Col>
                <Col>
                <Form.Label>Stat Emergency Med Dosage </Form.Label>
                <Form.Control placeholder="Stat Emergency Med Dosage" type="text" name="dose_stat_emergency_medication" value={this.state.dose_stat_emergency_medication} onChange={this.handleInputChangeFor('dose_stat_emergency_medication')}/>
                </Col>
                <Col>
                <Form.Label>Stat Emergency Med Frequency </Form.Label>
                <Form.Control placeholder="Stat Emergency Med Frequency" type="text" name="frequency_stat_emergency_medication" value={this.state.frequency_stat_emergency_medication} onChange={this.handleInputChangeFor('frequency_stat_emergency_medication')}/>
                </Col>
            </Row>
           
           
<Button onClick={(event)=>this.icuMedications(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Medication List</Button>
               
               
               <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Blood Gases</h2>

          <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>

            <Row>
                <Col>
                 <Form.Label>pH</Form.Label>
                <Form.Control placeholder="pH" type="number" name="ph" value={this.state.ph} onChange={this.handleInputChangeFor('ph')}/>
                 </Col>
                 <Col>
                 <Form.Label>pCO₂</Form.Label>
                <Form.Control placeholder="pCO₂" type="number" name="pco2" value={this.state.pco2} onChange={this.handleInputChangeFor('pco2')}/>
                 </Col>
                 <Col>
                 <Form.Label>pO₂</Form.Label>
                <Form.Control placeholder="pO₂" type="number" name="po2" value={this.state.po2} onChange={this.handleInputChangeFor('po2')}/>
                 </Col>
                 <Col>
                 <Form.Label>HCO₃</Form.Label>
                <Form.Control placeholder="HCO₃" type="number" name="hco3" value={this.state.hco3} onChange={this.handleInputChangeFor('hco3')}/>
                 </Col>
                 <Col>
                 <Form.Label>peep</Form.Label>
                <Form.Control placeholder="peep" type="number" name="peep" value={this.state.peep} onChange={this.handleInputChangeFor('peep')}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                 <Form.Label>tv</Form.Label>
                <Form.Control placeholder="tv" type="number" name="tv" value={this.state.tv} onChange={this.handleInputChangeFor('tv')}/>
                 </Col>
                 <Col>
                 <Form.Label>be</Form.Label>
                <Form.Control placeholder="be" type="number" name="be" value={this.state.be} onChange={this.handleInputChangeFor('be')}/>
                 </Col>
                 <Col>
                 <Form.Label>rr</Form.Label>
                <Form.Control placeholder="rr" type="number" name="rr" value={this.state.rr} onChange={this.handleInputChangeFor('rr')}/>
                 </Col>
                 <Col>
                 <Form.Label>FiO₂</Form.Label>
                <Form.Control placeholder="FiO₂" type="number" name="fio2" value={this.state.fio2} onChange={this.handleInputChangeFor('fio2')}/>
                 </Col>
            </Row>
             
<Button onClick={(event)=>this.icuBloodGases(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Blood Gases</Button>
                
                <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Lab Results</h2>

          <Row>
                <Col>
                <Form.Label>Date Ordered</Form.Label>
                <Form.Control placeholder="Date Ordered" type="date" name="date_ordered" value={this.state.date_ordered} onChange={this.handleInputChangeFor('date_ordered')}/>
                </Col>

                <Col>
                <Form.Label>Time Ordered</Form.Label>
                <Form.Control placeholder="Time Ordered" type="time" name="time_ordered" value={this.state.time_ordered} onChange={this.handleInputChangeFor('time_ordered')}/>
                </Col>
                <Col>
                <Form.Label>Date Resulted</Form.Label>
                <Form.Control placeholder="Date Resulted" type="date" name="date_resulted" value={this.state.date_resulted} onChange={this.handleInputChangeFor('date_resulted')}/>
                </Col>

                <Col>
                <Form.Label>Time Resulted</Form.Label>
                <Form.Control placeholder="Time Resulted" type="time" name="time_resulted" value={this.state.time_resulted} onChange={this.handleInputChangeFor('time_resulted')}/>
                </Col>
    
            </Row>
            <Row>
                <Col>
                <Form.Label>Ordering Provider </Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" type="text" name="ordering_first_name" value={this.state.ordering_first_name} onChange={this.handleInputChangeFor('ordering_first_name')}/>
                </Col>
                <Col>
                 <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Middle Name" type="text" name="ordering_middle_name" value={this.state.ordering_middle_name} onChange={this.handleInputChangeFor('ordering_middle_name')}/>
                </Col>
                <Col>
                 <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" type="text" name="ordering_last_name" value={this.state.ordering_last_name} onChange={this.handleInputChangeFor('ordering_last_name')}/>
                </Col>
            </Row>
             <Row>
                <Col>
                <Form.Label>Resulting Provider </Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" type="text" name="resulting_first_name" value={this.state.resulting_first_name} onChange={this.handleInputChangeFor('resulting_first_name')}/>
                </Col>
                <Col>
                 <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Middle Name" type="text" name="resulting_middle_name" value={this.state.resulting_middle_name} onChange={this.handleInputChangeFor('resulting_middle_name')}/>
                </Col>
                <Col>
                 <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" type="text" name="resulting_last_name" value={this.state.resulting_last_name} onChange={this.handleInputChangeFor('resulting_last_name')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>PCV (%)</Form.Label>
                <Form.Control placeholder="PCV" type="number" name="pcv" value={this.state.pcv} onChange={this.handleInputChangeFor('pcv')}/>
                 </Col>
                 <Col>
                 <Form.Label>Hb (g/L)</Form.Label>
                <Form.Control placeholder="Hb" type="number" name="hb" value={this.state.hb} onChange={this.handleInputChangeFor('hb')}/>
                 </Col>
                  <Col>
                 <Form.Label>WCC (10⁹/L)</Form.Label>
                <Form.Control placeholder="WCC" type="number" name="wcc" value={this.state.wcc} onChange={this.handleInputChangeFor('wcc')}/>
                 </Col>
                 <Col>
                 <Form.Label> RBC(10¹²/L) </Form.Label>
                <Form.Control placeholder="RBC" type="number" name="rbc" value={this.state.rbc} onChange={this.handleInputChangeFor('rbc')}/>
                 </Col>
                 <Col>
                 <Form.Label> Platelets (10⁹/L) </Form.Label>
                <Form.Control placeholder="Platelets" type="number" name="platelets" value={this.state.platelets} onChange={this.handleInputChangeFor('platelets')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> pi (%) </Form.Label>
                <Form.Control placeholder="pi" type="number" name="pi" value={this.state.pi} onChange={this.handleInputChangeFor('pi')}/>
                 </Col>
                 <Col>
                 <Form.Label> Clotting Time (s) </Form.Label>
                <Form.Control placeholder="Clotting Time" type="number" name="clotting_time" value={this.state.clotting_time} onChange={this.handleInputChangeFor('clotting_time')}/>
                 </Col>
                 <Col>
                 <Form.Label> Sgot (U/L) </Form.Label>
                <Form.Control placeholder="Sgot" type="number" name="sgot" value={this.state.sgot} onChange={this.handleInputChangeFor('sgot')}/>
                 </Col>
                 <Col>
                 <Form.Label> Spgt (U/L) </Form.Label>
                <Form.Control placeholder="Spgt" type="number" name="spgt" value={this.state.spgt} onChange={this.handleInputChangeFor('spgt')}/>
                 </Col>
             <Col>
                 <Form.Label> LDH (U/L) </Form.Label>
                <Form.Control placeholder="LDH" type="number" name="ldh" value={this.state.ldh} onChange={this.handleInputChangeFor('ldh')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> CPK (U/L) </Form.Label>
                <Form.Control placeholder="CPK" type="number" name="cpk" value={this.state.cpk} onChange={this.handleInputChangeFor('cpk')}/>
                 </Col>
                 <Col>
                 <Form.Label> Urea (mmol/L) </Form.Label>
                <Form.Control placeholder="Urea" type="number" name="urea" value={this.state.urea} onChange={this.handleInputChangeFor('urea')}/>
                 </Col>
                 <Col>
                 <Form.Label> Na (mmol/L) </Form.Label>
                <Form.Control placeholder="Na" type="number" name="na" value={this.state.na} onChange={this.handleInputChangeFor('na')}/>
                 </Col>
                 <Col>
                 <Form.Label> K (mmol/L) </Form.Label>
                <Form.Control placeholder="K" type="number" name="k" value={this.state.k} onChange={this.handleInputChangeFor('k')}/>
                 </Col>
                  <Col>
                 <Form.Label> Cl (mmol/L) </Form.Label>
                <Form.Control placeholder="Cl" type="number" name="cl" value={this.state.cl} onChange={this.handleInputChangeFor('cl')}/>
                 </Col>
                   <Col>
                 <Form.Label> Creatinine (umol/L) </Form.Label>
                <Form.Control placeholder="Creatinine" type="number" name="creat" value={this.state.creat} onChange={this.handleInputChangeFor('creat')}/>
                 </Col>
            </Row>
            
            <Row>
                 <Col>
                 <Form.Label> Total Protein (g/L) </Form.Label>
                <Form.Control placeholder="Total Protein" type="number" name="protein_total" value={this.state.protein_total} onChange={this.handleInputChangeFor('protein_total')}/>
                 </Col>
                 <Col>
                 <Form.Label> Albumin (g/L) </Form.Label>
                <Form.Control placeholder="Albumin" type="number" name="albumin" value={this.state.albumin} onChange={this.handleInputChangeFor('albumin')}/>
                 </Col>
                <Col>
                 <Form.Label> Globulin (g/L) </Form.Label>
                <Form.Control placeholder="Globulin" type="number" name="globulin" value={this.state.globulin} onChange={this.handleInputChangeFor('globulin')}/>
                 </Col>
                  <Col>
                 <Form.Label> EET Osmol (mOsmol/Kg) </Form.Label>
                <Form.Control placeholder="EET Osmol" type="number" name="eet_osmol" value={this.state.eet_osmol} onChange={this.handleInputChangeFor('eet_osmol')}/>
                 </Col>
                 <Col>
                 <Form.Label> Urine Osmol (mOsmol/Kg) </Form.Label>
                <Form.Control placeholder="Urine Osmol" type="number" name="urine_osmol" value={this.state.urine_osmol} onChange={this.handleInputChangeFor('urine_osmol')}/>
                 </Col>
            </Row>

             <Row>
                  <Col>
                 <Form.Label> Ca (mmol/L) </Form.Label>
                <Form.Control placeholder="Ca" type="number" name="ca" value={this.state.ca} onChange={this.handleInputChangeFor('ca')}/>
                 </Col>
                  <Col>
                 <Form.Label> Mg (mmol/L) </Form.Label>
                <Form.Control placeholder="Mg" type="number" name="mg" value={this.state.mg} onChange={this.handleInputChangeFor('mg')}/>
                 </Col>
                 <Col>
                 <Form.Label> PO₄ (mmol/L) </Form.Label>
                <Form.Control placeholder="PO₄" type="number" name="po4" value={this.state.po4} onChange={this.handleInputChangeFor('po4')}/>
                 </Col>
                 <Col>
                 <Form.Label> Abgs </Form.Label>
                <Form.Control placeholder="Abgs" type="number" name="abgs" value={this.state.abgs} onChange={this.handleInputChangeFor('abgs')}/>
                 </Col>
                 <Col>
                 <Form.Label> Abe </Form.Label>
                <Form.Control placeholder="Abe" type="number" name="abe" value={this.state.abe} onChange={this.handleInputChangeFor('abe')}/>
                 </Col>
                  <Col>
                 <Form.Label> Osat(%) </Form.Label>
                <Form.Control placeholder="Osat" type="number" name="osat" value={this.state.osat} onChange={this.handleInputChangeFor('osat')}/>
                 </Col>

             </Row>
              
        
<Button onClick={(event)=>this.icuLabResults(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Lab Results</Button>
               

               <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Fluid Balance</h2>

          <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
            <Row>
                <Col>
                <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Fluid Intake</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> IV Fluid Type </Form.Label>
                <Form.Control placeholder="IV Fluid Type" type="text" name="intravenous_fluid_intake_type" value={this.state.intravenous_fluid_intake_type} onChange={this.handleInputChangeFor('intravenous_fluid_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> IV Fluid Amount </Form.Label>
                <Form.Control placeholder="IV Fluid Amount" type="number" name="intravenous_fluid_intake_amount" value={this.state.intravenous_fluid_intake_amount} onChange={this.handleInputChangeFor('intravenous_fluid_intake_amount')}/>
                 </Col>
                  <Col>
                 <Form.Label> Oral Intake Type </Form.Label>
                <Form.Control placeholder="Oral Intake Type" type="text" name="oral_intake_type" value={this.state.oral_intake_type} onChange={this.handleInputChangeFor('oral_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> Oral Intake Amount </Form.Label>
                <Form.Control placeholder="Oral Intake Amount" type="number" name="oral_intake_amount" value={this.state.oral_intake_amount} onChange={this.handleInputChangeFor('oral_intake_amount')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> Oral Intake Hourly Total </Form.Label>
                <Form.Control placeholder="Oral Intake Hourly Total" type="number" name="oral_intake_hourly_total" value={this.state.oral_intake_hourly_total} onChange={this.handleInputChangeFor('oral_intake_hourly_total')}/>
                 </Col>
                 <Col>
                 <Form.Label> Gastric Feed Intake Type </Form.Label>
                <Form.Control placeholder="Gastric Feed Intake Type" type="text" name="gastric_feed_intake_type" value={this.state.gastric_feed_intake_type} onChange={this.handleInputChangeFor('gastric_feed_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> Gastric Feed Intake Amount </Form.Label>
                <Form.Control placeholder="Gastric Feed Intake Amount" type="number" name="gastric_feed_intake_amount" value={this.state.gastric_feed_intake_amount} onChange={this.handleInputChangeFor('gastric_feed_intake_amount')}/>
                 </Col>
            </Row>
              <Row>
                <Col>
                <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Fluid Output</h4>
                </Col>
            </Row>
            <Row>
            <Col>
                 <Form.Label> Gastric Suction & Vomitus </Form.Label>
                <Form.Control placeholder="Gastric Suction & Vomitus" type="number" name="nasogastric_suction_and_vomitus_output" value={this.state.nasogastric_suction_and_vomitus_output} onChange={this.handleInputChangeFor('nasogastric_suction_and_vomitus_output')}/>
            </Col>
             <Col>
                 <Form.Label> Porto-vac Under & H₂O Drain </Form.Label>
                <Form.Control placeholder="Porto-vac & Under H₂O Drain" type="number" name="portovac_under_h2o_drain_output" value={this.state.portovac_under_h2o_drain_output} onChange={this.handleInputChangeFor('portovac_under_h2o_drain_output')}/>
            </Col>
              <Col>
                 <Form.Label> Stool Drainage </Form.Label>
                <Form.Control placeholder="Stool Drainage" type="text" name="stool_drainage_output" value={this.state.stool_drainage_output} onChange={this.handleInputChangeFor('stool_drainage_output')}/>
            </Col>
            </Row>
            <Row>
                 <Col>
                 <Form.Label> Urine Output </Form.Label>
                <Form.Control placeholder="Urine Output" type="number" name="urine_ouput" value={this.state.urine_ouput} onChange={this.handleInputChangeFor('urine_ouput')}/>
            </Col>
             <Col>
                 <Form.Label> Hourly Urine Output </Form.Label>
                <Form.Control placeholder="Hourly Urine Output" type="number" name="hourly_urine_ouput" value={this.state.hourly_urine_ouput} onChange={this.handleInputChangeFor('hourly_urine_ouput')}/>
            </Col>
             <Col>
                <Form.Label> NIG Aspirate Output </Form.Label>
                <Form.Control placeholder="NIG Aspirate Output" type="number" name="nig_aspirate_output" value={this.state.nig_aspirate_output} onChange={this.handleInputChangeFor('nig_aspirate_output')}/>
                </Col>
               
            </Row>

            <Row>
                <Col>
                <Form.Label> SG Output </Form.Label>
                <Form.Control placeholder="SG Output" type="number" name="sg_output" value={this.state.sg_output} onChange={this.handleInputChangeFor('sg_output')}/>
                </Col>
                 <Col>
                <Form.Label> Output Test</Form.Label>
                <Form.Control placeholder="Output Test" type="number" name="output_test" value={this.state.output_test} onChange={this.handleInputChangeFor('output_test')}/>
                </Col>
                 <Col>
                <Form.Label> Running Output Total</Form.Label>
                <Form.Control placeholder="Running Output Total" type="number" name="running_output_total" value={this.state.running_output_total} onChange={this.handleInputChangeFor('running_output_total')}/>
                </Col>
                 <Col>
                <Form.Label> Hourly Balance</Form.Label>
                <Form.Control placeholder="Hourly Balance" type="number" name="hourly_balance" value={this.state.hourly_balance} onChange={this.handleInputChangeFor('hourly_balance')}/>
                </Col>
            </Row>
               
             

<Button onClick={(event)=>this.icuFluidBalance(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Fluid Balance</Button>


        <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>General Info</h2>

          <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date Of Entry" type="date" name="date" value={this.state.date} onChange={this.handleInputChangeFor('date')}/>
                </Col>

                <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control placeholder="Time Of Entry" type="time" name="time" value={this.state.time} onChange={this.handleInputChangeFor('time')}/>
                </Col>
    
            </Row>
               
               <Row>
                    <Col>
                        <Form.Label> Duty Nurse First Name</Form.Label>
                        <Form.Control placeholder="Duty Nurse First Name" type="text" name="duty_nurse_first_name" value={this.state.duty_nurse_first_name} onChange={this.handleInputChangeFor('duty_nurse_first_name')}/>
                    </Col>
                     <Col>
                        <Form.Label> Duty Nurse Middle Name</Form.Label>
                        <Form.Control placeholder="Duty Nurse Middle Name" type="text" name="duty_nurse_middle_name" value={this.state.duty_nurse_middle_name} onChange={this.handleInputChangeFor('duty_nurse_middle_name')}/>
                    </Col>
                     <Col>
                        <Form.Label> Duty Nurse Last Name</Form.Label>
                        <Form.Control placeholder="Duty Nurse Last Name" type="text" name="duty_nurse_last_name" value={this.state.duty_nurse_last_name} onChange={this.handleInputChangeFor('duty_nurse_last_name')}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label> Duty Intensivist First Name</Form.Label>
                        <Form.Control placeholder="Duty Intensivist First Name" type="text" name="duty_intensivist_first_name" value={this.state.duty_intensivist_first_name} onChange={this.handleInputChangeFor('duty_intensivist_first_name')}/>
                    </Col>
                    <Col>
                        <Form.Label> Duty Intensivist Middle Name</Form.Label>
                        <Form.Control placeholder="Duty Intensivist Middle Name" type="text" name="duty_intensivist_middle_name" value={this.state.duty_intensivist_middle_name} onChange={this.handleInputChangeFor('duty_intensivist_middle_name')}/>
                    </Col>
                    <Col>
                        <Form.Label> Duty Intensivist Last Name</Form.Label>
                        <Form.Control placeholder="Duty Intensivist Last Name" type="text" name="duty_intensivist_last_name" value={this.state.duty_intensivist_last_name} onChange={this.handleInputChangeFor('duty_intensivist_last_name')}/>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <Form.Label> Physiotherapist First Name</Form.Label>
                        <Form.Control placeholder="Physiotherapist First Name" type="text" name="physiotherapist_first_name" value={this.state.physiotherapist_first_name} onChange={this.handleInputChangeFor('physiotherapist_first_name')}/>
                    </Col>
                     <Col>
                        <Form.Label> Physiotherapist</Form.Label>
                        <Form.Control placeholder="Physiotherapist Middle Name" type="text" name="physiotherapist_middle_name" value={this.state.physiotherapist_middle_name} onChange={this.handleInputChangeFor('physiotherapist_middle_name')}/>
                    </Col>
                     <Col>
                        <Form.Label> Physiotherapist</Form.Label>
                        <Form.Control placeholder="Physiotherapist Last Name" type="text" name="physiotherapist_last_name" value={this.state.physiotherapist_last_name} onChange={this.handleInputChangeFor('physiotherapist_last_name')}/>
                    </Col>
                    
               </Row>

               <Row>
                      <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Diagnosis</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="diagnosis" placeholder="Enter Diagnosis" 
                            name="diagnosis" 
                            value={this.state.diagnosis} 
                            onChange={this.handleInputChangeFor('diagnosis')} />
                    </InputGroup>
                    <Col>
                    <div></div>
                    </Col>
                     <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Procedures/Clinical Observations</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="doc_procedures_observations" 
                            placeholder="Enter Procedures/ Clinical Observations"
                            value={this.state.doc_procedures_observations}
                            onChange={this.handleInputChangeFor('doc_procedures_observations')}/>
                    </InputGroup>
                    
               </Row>
               <Row>
                   <Col>
                   <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Physician Sign Off</h4>
                   </Col>
               </Row>
               <Row>
                    <Col>
                        <Form.Label> Doc First Name</Form.Label>
                        <Form.Control placeholder="Doc First Name" type="text" name="provider_first_name_procedures_observations" value={this.state.provider_first_name_procedures_observations} onChange={this.handleInputChangeFor('provider_first_name_procedures_observations')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Middle Name</Form.Label>
                        <Form.Control placeholder="Doc Middle Name" type="text" name="provider_middle_name_procedures_observations" value={this.state.provider_middle_name_procedures_observations} onChange={this.handleInputChangeFor('provider_middle_name_procedures_observations')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Last Name</Form.Label>
                        <Form.Control placeholder="Doc Last Name" type="text" name="provider_last_name_procedures_observations" value={this.state.provider_last_name_procedures_observations} onChange={this.handleInputChangeFor('provider_last_name_procedures_observations')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Specialty</Form.Label>
                        <Form.Control placeholder="Doc Speciality" type="text" name="provider_specialty_procedures_observations" value={this.state.provider_specialty_procedures_observations} onChange={this.handleInputChangeFor('provider_specialty_procedures_observations')}/>
                    </Col>
               </Row>

            <Row>
                    <Col>
                         <div></div>
                    </Col>
                     <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>IV Doc Instructions</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="iv_doc_instructions" 
                            placeholder="Doctor's IV Instructions"
                            value={this.state.iv_doc_instructions}
                            onChange={this.handleInputChangeFor('iv_doc_instructions')}/>
                    </InputGroup>
                    <Col>
                         <div></div>
                    </Col>
                     <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Medication & R</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="medication_and_r_doc_instructions" 
                            placeholder="Medication & R"
                            value={this.state.medication_and_r_doc_instructions}
                            onChange={this.handleInputChangeFor('medication_and_r_doc_instructions')}/>
                    </InputGroup>
                    <Col>
                         <div></div>
                    </Col>
                     <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Nursing Care Plan</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="nursing_care_plan" 
                            placeholder="Nursing Care Plan"
                            value={this.state.nursing_care_plan}
                            onChange={this.handleInputChangeFor('nursing_care_plan')}/>
                    </InputGroup>  
               </Row>
               <Row>
                   <Col>
                   <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Physician Sign Off</h4>
                   </Col>
               </Row>
               <Row>
                    <Col>
                        <Form.Label> Doc First Name</Form.Label>
                        <Form.Control placeholder="Doc First Name" type="text" name="provider_first_name_iv_doc_instructions" value={this.state.provider_first_name_iv_doc_instructions} onChange={this.handleInputChangeFor('provider_first_name_iv_doc_instructions')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Middle Name</Form.Label>
                        <Form.Control placeholder="Doc Middle Name" type="text" name="provider_middle_name_iv_doc_instructions" value={this.state.provider_middle_name_iv_doc_instructions} onChange={this.handleInputChangeFor('provider_middle_name_iv_doc_instructions')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Last Name</Form.Label>
                        <Form.Control placeholder="Doc Last Name" type="text" name="provider_last_name_iv_doc_instructions" value={this.state.provider_last_name_iv_doc_instructions} onChange={this.handleInputChangeFor('provider_last_name_iv_doc_instructions')}/>
                    </Col>
                    <Col>
                        <Form.Label> Doc Specialty</Form.Label>
                        <Form.Control placeholder="Doc Speciality" type="text" name="provider_specialty_iv_doc_instructions" value={this.state.provider_specialty_iv_doc_instructions} onChange={this.handleInputChangeFor('provider_specialty_iv_doc_instructions')}/>
                    </Col>
               </Row>


        <h4 style={{   width: '70%', margin: '2% 40% 2%', }}>Invasive Line Log</h4>

          <Row>
                <Col>
                      <Form.Label> Invasive Line Type</Form.Label>
                      <Form.Control placeholder="Invasive Line Type" type="text" name="invasive_line_type" value={this.state.invasive_line_type} onChange={this.handleInputChangeFor('invasive_line_type')}/>
                </Col>
                <Col>
                <Form.Label>Date Inserted</Form.Label>
                <Form.Control placeholder="Date Inserted" type="date" name="date_inserted" value={this.state.date_inserted} onChange={this.handleInputChangeFor('date_inserted')}/>
                </Col>
                 <Col>
                <Form.Label>Date Due For Change</Form.Label>
                <Form.Control placeholder="Date Due For Change" type="date" name="invasive_line_date_due_for_change" value={this.state.invasive_line_date_due_for_change} onChange={this.handleInputChangeFor('invasive_line_date_due_for_change')}/>
                </Col>
                <Col>
                <Form.Label>Date Changed</Form.Label>
                <Form.Control placeholder="Date Changed" type="date" name="invasive_line_date_changed" value={this.state.invasive_line_date_changed} onChange={this.handleInputChangeFor('invasive_line_date_changed')}/>
                </Col>
            </Row>

    <Button onClick={(event)=>this.icuGeneralInfo(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save General Info</Button>


                
        <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Special Investigations</h2>

          <Row>
                <Col>
                <Form.Label>Date Urine Collected</Form.Label>
                <Form.Control placeholder="Date Collected" type="date" name="urine_collection_date" value={this.state.urine_collection_date} onChange={this.handleInputChangeFor('urine_collection_date')}/>
                </Col>

                <Col>
                <Form.Label>Time Urine Collected</Form.Label>
                <Form.Control placeholder="Time Collected" type="time" name="urine_collection_time" value={this.state.urine_collection_time} onChange={this.handleInputChangeFor('urine_collection_time')}/>
                </Col>
                <Col>
                <Form.Label>Date Urine Resulted</Form.Label>
                <Form.Control placeholder="Date Resulted" type="date" name="urine_result_date" value={this.state.urine_result_date} onChange={this.handleInputChangeFor('urine_result_date')}/>
                </Col>

                <Col>
                <Form.Label>Time Urine Resulted</Form.Label>
                <Form.Control placeholder="Time Resulted" type="time" name="urine_result_time" value={this.state.urine_result_time} onChange={this.handleInputChangeFor('urine_result_time')}/>
                </Col>
    
            </Row>

            <Row>
                <Col>
                      <Form.Label> Urinalysis - Protein</Form.Label>
                      <Form.Control placeholder="Urinalysis - Protein" type="number" name="urinalysis_protein" value={this.state.urinalysis_protein} onChange={this.handleInputChangeFor('urinalysis_protein')}/>
                </Col>
                <Col>
                      <Form.Label> Urinalysis - Blood</Form.Label>
                      <Form.Control placeholder="Urinalysis - Blood" type="number" name="urinalysis_blood" value={this.state.urinalysis_blood} onChange={this.handleInputChangeFor('urinalysis_blood')}/>
                </Col>
                 <Col>
                      <Form.Label> Urinalysis - Acetone</Form.Label>
                      <Form.Control placeholder="Urinalysis - Acetone" type="number" name="urinalysis_acetone" value={this.state.urinalysis_acetone} onChange={this.handleInputChangeFor('urinalysis_acetone')}/>
                </Col>
            </Row>

             <Row>
                <Col>
                      <Form.Label> Urinalysis - Bile</Form.Label>
                      <Form.Control placeholder="Urinalysis - Bile" type="number" name="urinalysis_bile" value={this.state.urinalysis_bile} onChange={this.handleInputChangeFor('urinalysis_bile')}/>
                </Col>
                <Col>
                      <Form.Label> Urinalysis - Sg</Form.Label>
                      <Form.Control placeholder="Urinalysis - Sg" type="number" name="urinalysis_sg" value={this.state.urinalysis_sg} onChange={this.handleInputChangeFor('urinalysis_sg')}/>
                </Col>
                 <Col>
                      <Form.Label> Urinalysis - Ph</Form.Label>
                      <Form.Control placeholder="Urinalysis - Ph" type="number" name="urinalysis_ph" value={this.state.urinalysis_ph} onChange={this.handleInputChangeFor('urinalysis_ph')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label>Date Sputum Collected</Form.Label>
                <Form.Control placeholder="Date Collected" type="date" name="sputum_collection_date" value={this.state.sputum_collection_date} onChange={this.handleInputChangeFor('sputum_collection_date')}/>
                </Col>

                <Col>
                <Form.Label>Time Sputum Collected</Form.Label>
                <Form.Control placeholder="Time Collected" type="time" name="sputum_collection_time" value={this.state.sputum_collection_time} onChange={this.handleInputChangeFor('sputum_collection_time')}/>
                </Col>
                <Col>
                <Form.Label>Date Sputum Resulted</Form.Label>
                <Form.Control placeholder="Date Resulted" type="date" name="sputum_result_date" value={this.state.sputum_result_date} onChange={this.handleInputChangeFor('sputum_result_date')}/>
                </Col>

                <Col>
                <Form.Label>Time Sputum Resulted</Form.Label>
                <Form.Control placeholder="Time Resulted" type="time" name="sputum_result_time" value={this.state.sputum_result_time} onChange={this.handleInputChangeFor('sputum_result_time')}/>
                </Col>
    
            </Row>
             <Col>
                         <div></div>
                    </Col>
                     <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Sputum Results</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="special_investigation_sputum_results" 
                            placeholder="Sputum Results"
                            value={this.state.special_investigation_sputum_results}
                            onChange={this.handleInputChangeFor('special_investigation_sputum_results')}/>
                    </InputGroup>  


<Button onClick={(event)=>this.icuSpecialInvestigation(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Special Investigation</Button>
            
            </Form>
      </Card>

</div>

        );
    }
}


export default connect()(Icu);