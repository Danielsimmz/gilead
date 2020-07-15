import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
// import { Link } from 'react-router-dom';
// import InputGroup from 'react-bootstrap/InputGroup';


class ICUBasicVitals extends Component {

    state = {

        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
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

    }


    icuBasicVitals = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'BASIC_VITALS',
              payload: {
                  patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id, date: this.state.date,
                  time: this.state.time, blood_pressure_systolic: this.state.blood_pressure_systolic, blood_pressure_diastolic: this.state.blood_pressure_diastolic,
                  noninvasive_bp: this.state.noninvasive_bp, temperature: this.state.temperature, temp_location: this.state.temp_location,
                  pulse_or_heart_rate: this.state.pulse_or_heart_rate, respiration_rate: this.state.respiration_rate, spo2: this.state.spo2,
                  patient_weight: this.state.patient_weight, patient_height: this.state.patient_height, blood_sugar: this.state.blood_sugar,
              }

          });

          this.setState({
              patient_id: this.props.patient.id, date_of_birth: this.props.patient.date_of_birth, admission_id: '', date: '', time: '', blood_pressure_systolic: '',
              blood_pressure_diastolic: '', noninvasive_bp: '', temperature: '', temp_location: '', pulse_or_heart_rate: '',
              respiration_rate: '', spo2: ' ', patient_weight: '', patient_height: '', blood_sugar: ''  
          })
    }



     //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

      

    render() {
        return(
            <div>
                
                     <h2 className="formsheader" style={{   width: '50%', margin: '0 40% 1%', }}>Basic Vitals</h2> 
                      {this.props.errors.addBasicVitalsError && (<h2 className="alert" role="alert"> {this.props.errors.addBasicVitalsError}</h2>)}
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
               

            </div>

        );
    }
}


//Bring in state to access the error reducers
const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
});


export default connect(mapStateToProps) (ICUBasicVitals);