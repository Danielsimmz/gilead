import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


class ICUGeneralInfo extends Component {

    state = {
        patient_id: '',
        date_of_birth: '',
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


    }


    icuGeneralInfo = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'GENERAL_INFO',
              payload: {
                   patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id,
                    date: this.state.date, time: this.state.time, duty_nurse_first_name: this.state.duty_nurse_first_name, duty_nurse_middle_name: this.state.duty_nurse_middle_name,
                    duty_nurse_last_name: this.state.duty_nurse_last_name, duty_intensivist_first_name: this.state.duty_intensivist_first_name, duty_intensivist_middle_name: this.state.duty_intensivist_middle_name,
                    duty_intensivist_last_name: this.state.duty_intensivist_last_name, physiotherapist_first_name: this.state.physiotherapist_first_name,
                    physiotherapist_middle_name: this.state.physiotherapist_middle_name, physiotherapist_last_name: this.state.physiotherapist_last_name,
                    days_in_icu: this.state.days_in_icu, doc_procedures_observations: this.state.doc_procedures_observations,
                    doc_signature_procedures_observations: this.state.doc_signature_procedures_observations, provider_first_name_procedures_observations: this.state.provider_first_name_procedures_observations,
                    provider_middle_name_procedures_observations: this.state.provider_middle_name_procedures_observations, provider_last_name_procedures_observations: this.state.provider_last_name_procedures_observations,
                    provider_specialty_procedures_observations: this.state.provider_specialty_procedures_observations, diagnosis: this.state.diagnosis,
                    provider_first_name_iv_doc_instructions: this.state.provider_first_name_iv_doc_instructions, provider_middle_name_iv_doc_instructions: this.state.provider_middle_name_iv_doc_instructions,
                    provider_last_name_iv_doc_instructions: this.state.provider_last_name_iv_doc_instructions, provider_specialty_iv_doc_instructions: this.state.provider_specialty_iv_doc_instructions,
                    iv_doc_instructions: this.state.iv_doc_instructions, medication_and_r_doc_instructions: this.state.medication_and_r_doc_instructions,
                    nursing_care_plan: this.state.nursing_care_plan, invasive_line_type: this.state.invasive_line_type,
                    date_inserted: this.state.date_inserted, invasive_line_date_due_for_change: this.state.invasive_line_date_due_for_change,
                    invasive_line_date_changed: this.state.invasive_line_date_changed,
              }

          });

          this.setState({
                 patient_id: '', date_of_birth: '', admission_id: '',
                 date: '', time: '', duty_nurse_first_name: '', duty_nurse_middle_name: '', duty_nurse_last_name: '', 
                 duty_intensivist_first_name: '', duty_intensivist_middle_name: '', duty_intensivist_last_name: '', physiotherapist_first_name: '',
                 physiotherapist_middle_name: '', physiotherapist_last_name: '', days_in_icu: '', doc_procedures_observations: '', doc_signature_procedures_observations: '',
                 provider_first_name_procedures_observations: '', provider_middle_name_procedures_observations: '', provider_last_name_procedures_observations: '',
                 provider_specialty_procedures_observations: '', diagnosis: '', provider_first_name_iv_doc_instructions: '', provider_middle_name_iv_doc_instructions: '',
                 provider_last_name_iv_doc_instructions: '', provider_specialty_iv_doc_instructions: '', iv_doc_instructions: '', medication_and_r_doc_instructions: '',
                 nursing_care_plan: '', invasive_line_type: '', date_inserted: '', invasive_line_date_due_for_change: '', invasive_line_date_changed: '',
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
                        <Form.Label> Physiotherapist Middle Name</Form.Label>
                        <Form.Control placeholder="Physiotherapist Middle Name" type="text" name="physiotherapist_middle_name" value={this.state.physiotherapist_middle_name} onChange={this.handleInputChangeFor('physiotherapist_middle_name')}/>
                    </Col>
                     <Col>
                        <Form.Label> Physiotherapist Middle Name</Form.Label>
                        <Form.Control placeholder="Physiotherapist Last Name" type="text" name="physiotherapist_last_name" value={this.state.physiotherapist_last_name} onChange={this.handleInputChangeFor('physiotherapist_last_name')}/>
                    </Col>
                    
               </Row>

               <Row>
                   <p></p>
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
                    <p></p>
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
                         <p></p>
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
                         <p></p>
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
                         <p></p>
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

            </div>
        );
    }

}

export default connect() (ICUGeneralInfo);