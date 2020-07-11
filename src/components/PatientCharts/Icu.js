import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


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
        core_or_rectal_temp: '',
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
        air_entry_left: '',
        air_entry_right: '',
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
        ///// End of cardiac and respiratory readings///
        pressure_points: '',
        iv_checks: '',
        hemocheck: '',
        mode_of_vent: '',
        loc_m: '',
        loc_e: '',
        loc_v: '',
        loc_total: '',
        cannula_site: '',
        _2hr_turns: '',
        pressure_support: '',
        cpap_peep: '',
        gas_temperature: '',
        humidifier_ho_level: '',
        emptying_vent_tubes: '',
        ett_measure: '',
        pain_score: '',
        sedation_score: '',
        neuro_obs: '',
        iv_or_cvp_site: '',
        rt_pedal_pulses: '',
        lt_pedal_pulse: '',
        turns: '',
        feet: '',

        ////Drug section
        drugs: '',
        dose: '',
        frequency: '',
        drug_infusions: '',
        drug_infusion_dosage: '',
        stat_emergency_medication: '',
        dose_stat_emergency_medication: '',
        frequency_stat_emergency_medication: ''

    }


    render () {
        return(

<div>
                <h1>ICU Chart</h1>
    <Card border = "success" style={{ width: '50%', margin: '3% auto' }} >
        <Form >  
            <Row>
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Entry Date" type="date" name="date" value={this.state.date_of_birth} onChange={this.handleInputChangeFor('date_of_birth')}/>
                </Col>

                <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChangeFor('first_name')}/>
                </Col>
    
            </Row>
            <Row>
                <Col>
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control placeholder="Date Of Birth" type="date" name="Date Of Birth" value={this.state.date_of_birth} onChange={this.handleInputChangeFor('date_of_birth')}/>
                </Col>
            </Row>
            
            {(this.props.providerSearch)?<Button onClick={(event)=>this.updateProvider(event)} variant="success" type="submit" style={{ width: '40%', margin: '7% 30% 2%' }}>Update Provider</Button>:<Button onClick={(event)=>this.registerProvider(event)} variant="success" type="submit" style={{ width: '40%', margin: '0 30%' }}>
                Add Provider
            </Button>}
            </Form>
      </Card>

</div>

        );
    }
}


export default connect()(Icu);