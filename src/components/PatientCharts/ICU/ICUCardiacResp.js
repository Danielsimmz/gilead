import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";

class ICUCardiacResp extends Component {

    state= {
        patient_id: '',
        date_of_birth: '',
        admission_id: '',
        date: '',
        time: '',
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

    }


    icuCardiacResp = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'CARDIAC_RESP',
              payload: {
                  patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id,
                  date: this.state.date, time: this.state.time, cardiac_rhythm: this.state.cardiac_rhythm, cvp: this.state.cvp,
                  minute_volume: this.state.minute_volume, patient_tidal_volume: this.state.patient_tidal_volume, suction: this.state.suction,
                  intake_oxygen_rate: this.state.intake_oxygen_rate, color: this.state.color, map: this.state.map, pap: this.state.pap,
                  pawp: this.state.pawp, lt_auscultation: this.state.lt_auscultation, rt_auscultation: this.state.rt_auscultation,
                  perfusion: this.state.perfusion, ventilation_mode: this.ventilation_mode, ventilation_rate: this.state.ventilation_rate,
                  set_tidal_volume: this.state.set_tidal_volume, peak_airway_pressure: this.state.peak_airway_pressure, rt_pedal_pulse: this.state.rt_pedal_pulse,
                  lt_pedal_pulse: this.state.lt_pedal_pulse, lt_pedal_pulse_score: this.state.lt_pedal_pulse_score, rt_pedal_pulse_score: this.state.rt_pedal_pulse_score,
                  cpap_peep: this.cpap_peep, gas_temperature: this.state.gas_temperature, humidifier_ho_level: this.state.humidifier_ho_level, emptying_vent_tubes: this.state.emptying_vent_tubes,
                  ett_measure: this.state.ett_measure,
              }

          });

          this.setState({
             patient_id: '', date_of_birth: '', admission_id: '', date: '', time: '', cardiac_rhythm: '',
             cvp: '', minute_volume: '', patient_tidal_volume: '', suction: '', intake_oxygen_rate: '', color: '',
             map: '', pap: '', pawp: '', lt_auscultation: '', rt_auscultation: '', perfusion: '', ventilation_mode: '',
             ventilation_rate: '', set_tidal_volume: '', peak_airway_pressure: '', rt_pedal_pulse: '',
             lt_pedal_pulse: '', lt_pedal_pulse_score: '', rt_pedal_pulse_score: '', cpap_peep: '', gas_temperature: '',
             humidifier_ho_level: '', emptying_vent_tubes: '', ett_measure: '',
          })
    }


     //This function handles storing input values into state on change
     handleInputChangeFor = propertyName => (event) => {
         this.setState({
             [propertyName]: event.target.value,
         });
     }

    render (){
        return(

                <div>
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

        
                </div>
        );
    }
}

export default connect()(ICUCardiacResp);