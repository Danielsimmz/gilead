import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


class ICUSpecialInvestigations extends Component {

    state = {
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        urinalysis_protein: '',
        urinalysis_acetone: '',
        urinalysis_blood: '',
        urinalysis_bile: '',
        urinalysis_sg: '',
        urinalysis_ph: '',
        urine_collection_date: '',
        urine_collection_time: '',
        urine_result_date: '',
        urine_result_time: '',
        sputum_collection_date: '',
        sputum_collection_time: '',
        sputum_result_date: '',
        sputum_result_time: '',
        special_investigation_sputum_results: '',
    }



        icuSpecialInvestigation = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'SPEC_INV',
              payload: {
                    patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id,
                    date: this.state.date, time: this.state.time, urinalysis_protein: this.state.urinalysis_protein, urinalysis_acetone: this.state.urinalysis_acetone,
                    urinalysis_blood: this.state.urinalysis_blood, urinalysis_bile: this.state.urinalysis_bile,
                    urinalysis_sg: this.state.urinalysis_sg, urinalysis_ph: this.state.urinalysis_ph, urine_collection_date: this.state.urine_collection_date, urine_collection_time: this.state.urine_collection_time, urine_result_date: this.state.urine_result_date, urine_result_time: this.state.urine_result_time,
                    sputum_collection_date: this.state.sputum_collection_date, sputum_collection_time: this.state.sputum_collection_time, sputum_result_date: this.state.sputum_result_date,
                    sputum_result_time: this.state.sputum_result_time, special_investigation_sputum_results: this.state.special_investigation_sputum_results,
        }

          });

          this.setState({
                 patient_id: this.props.patient.id, date_of_birth: this.props.patient.date_of_birth, admission_id: '', date: '', time: '',
                 urinalysis_protein: '', urinalysis_acetone: '', urinalysis_blood: '', urinalysis_bile: '',
                 urinalysis_sg: '', urinalysis_ph: '', urine_collection_date: '', urine_collection_time: '', urine_result_date: '',
                urine_result_time: '', sputum_collection_date: '', sputum_collection_time: '', sputum_result_date: '',
                sputum_result_time: '', special_investigation_sputum_results: '', });
    }





     //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render () {
        return (
            <div>


                
        <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Special Investigations</h2>
        {this.props.errors.addSpecialInvError && (<h2 className="alert" role="alert"> {this.props.errors.addSpecialInvError}</h2>)}

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
                         <p></p>
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
            
           
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});


export default connect(mapStateToProps) (ICUSpecialInvestigations);