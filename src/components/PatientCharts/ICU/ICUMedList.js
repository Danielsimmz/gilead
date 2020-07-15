import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';


class ICUMedList extends Component {

    state= {
       patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        drugs: '',
        dose: '',
        frequency: '',
        drug_infusions: '',
        drug_infusion_dosage: '',
        drug_infusion_frequency: '',
        stat_emergency_medication: '',
        dose_stat_emergency_medication: '',
        frequency_stat_emergency_medication: '',

    }




    icuMedications = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'MED_LIST',
              payload: {
                       patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth,
                       admission_id: this.admission_id, date: this.state.date, time: this.state.time,
                       drugs: this.state.drugs, dose: this.state.dose, frequency: this.state.frequency,
                       drug_infusions: this.state.drug_infusions, drug_infusion_dosage: this.state.drug_infusion_dosage, 
                       drug_infusion_frequency: this.state.drug_infusion_frequency, stat_emergency_medication: this.state.stat_emergency_medication, 
                       dose_stat_emergency_medication: this.state.dose_stat_emergency_medication,
                       frequency_stat_emergency_medication: this.state.frequency_stat_emergency_medication,
              }

          });

          this.setState({
                 patient_id: this.props.patient.id, date_of_birth: this.props.patient.date_of_birth, admission_id: '', date: '', time: '',
                 drugs: '', dose: '', frequency: '', drug_infusions: '', drug_infusion_dosage: '',
                 drug_infusion_frequency: '', stat_emergency_medication: '', dose_stat_emergency_medication: '',
                 frequency_stat_emergency_medication: '',
          })
    }



    //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }
    
    render(){
        return(
            <div>

                <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Medication List</h2>
                {this.props.errors.addMedListError && (<h2 className="alert" role="alert"> {this.props.errors.addMedListError}</h2>)}

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
            </div>   
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});



export default connect(mapStateToProps)(ICUMedList);