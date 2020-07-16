import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


class ICUGeneralInfo extends Component {

    state = {
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        duty_nurse_provider_id: '',
        duty_intensivist_provider_id: '',
        physiotherapist_id: '',
        provider_id_procedures_observations: '',
        doc_procedures_observations: '',
        doc_signature_procedures_observations: '',
        provider_id_doc_instructions: '',
        iv_doc_instructions: '',
        medication_and_r_doc_instructions: '',
        doc_instructions_signature:'',
        days_in_icu: '',
        diagnosis: '',
        nursing_care_plan: '',
        invasive_line_type: '',
        date_inserted: '',
        invasive_line_date_due_for_change: '',
        invasive_line_date_changed: '',


    }

     componentDidMount() {
         this.props.dispatch({
             type: 'GET_PROVIDERS'
         })
     }

    icuGeneralInfo = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'GENERAL_INFO',
              payload: {
                   patient_id: this.state.patient_id, 
                   date_of_birth: this.state.date_of_birth, 
                   admission_id: this.state.admission_id,
                    date: this.state.date, 
                    time: this.state.time, 
                    duty_nurse_provider_id: this.state.duty_nurse_provider_id,
                    duty_intensivist_provider_id: this.state.duty_intensivist_provider_id,
                    physiotherapist_id: this.state.physiotherapist_id, 
                    provider_id_procedures_observations: this.state.provider_id_procedures_observations,
                    days_in_icu: this.state.days_in_icu, 
                    doc_procedures_observations: this.state.doc_procedures_observations,
                    doc_signature_procedures_observations: this.state.doc_signature_procedures_observations, 
                    diagnosis: this.state.diagnosis,
                    iv_doc_instructions: this.state.iv_doc_instructions, 
                    medication_and_r_doc_instructions: this.state.medication_and_r_doc_instructions,
                    nursing_care_plan: this.state.nursing_care_plan, 
                    invasive_line_type: this.state.invasive_line_type,
                    date_inserted: this.state.date_inserted, 
                    invasive_line_date_due_for_change: this.state.invasive_line_date_due_for_change,
                    invasive_line_date_changed: this.state.invasive_line_date_changed, 
                    provider_id_doc_instructions: this.state.provider_id_doc_instructions,
                    doc_instructions_signature: this.state.doc_instructions_signature,
              }

          });

          this.setState({
                 patient_id: this.props.patient.id,
                date_of_birth: this.props.patient.date_of_birth,
                admission_id: '',
                date: '',
                time: '',
                duty_nurse_provider_id: '',
                duty_intensivist_provider_id: '',
                physiotherapist_id: '',
                provider_id_procedures_observations: '',
                doc_procedures_observations: '',
                doc_signature_procedures_observations: '',
                provider_id_doc_instructions: '',
                iv_doc_instructions: '',
                medication_and_r_doc_instructions: '',
                doc_instructions_signature: '',
                days_in_icu: '',
                diagnosis: '',
                nursing_care_plan: '',
                invasive_line_type: '',
                date_inserted: '',
                invasive_line_date_due_for_change: '',
                invasive_line_date_changed: '',

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
                 {this.props.errors.addGeneralInfoError && (<h2 className="alert" role="alert"> {this.props.errors.addGeneralInfoError}</h2>)}

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
                <Form.Label>Duty Nurse</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({duty_nurse_provider_id: event.target.value})}>
                    <option value="">Pick From Below </option>
                      {(this.props.providerList)? this.props.providerList.map(provider => (
                    (provider.job_title === 'Nurse') && <option key={provider.id} value= {provider.id}> {provider.job_title + '' + provider.first_name + '' + provider.middle_name + '' + provider.last_name + '' + provider.specialty_title} </option>
                        )): ''}
                 </Form.Control>
                 </Col>


               <Col>
                <Form.Label>Duty Intensivist</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({duty_intensivist_provider_id: event.target.value})}>
                    <option value="">Pick From Below </option>
                      {(this.props.providerList)? this.props.providerList.map(provider => (
                    (provider.job_title === 'Doctor' || 'Physician') && <option key={provider.id} value= {provider.id}> {provider.job_title + '' + provider.first_name +  '' + provider.middle_name + '' + provider.last_name +  '' + provider.specialty_title} </option>
                        )): ''}
                 </Form.Control>
                 </Col>

                  <Col>
                <Form.Label>Physiotherapist</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({physiotherapist_id: event.target.value})}>
                    <option value="">Pick From Below </option>
                      {(this.props.providerList)? this.props.providerList.map(provider => (
                    (provider.job_title === 'Physiotherapist') && <option key={provider.id} value= {provider.id}> {provider.job_title + '' + provider.first_name + '' + provider.middle_name + '' + provider.last_name + '' + provider.specialty_title} </option>
                        )): ''}
                 </Form.Control>
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
                <Form.Label>Physician Name</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({provider_id_procedures_observations: event.target.value})}>
                    <option value="">Pick From Below </option>
                      {(this.props.providerList)? this.props.providerList.map(provider => (
                    (provider.job_title === 'Doctor' || 'Physican' || 'Surgeon') && <option key={provider.id} value= {provider.id}> {provider.job_title + '' + provider.first_name + '' + provider.middle_name + '' + provider.last_name + '' + provider.specialty_title} </option>
                        )): ''}
                 </Form.Control>
                 </Col>

                 <Col>
                        <Form.Label> Physician Signature</Form.Label>
                        <Form.Control placeholder="Physician Signature" type="text" name="doc_signature_procedures_observations" value={this.state.doc_signature_procedures_observations} onChange={this.handleInputChangeFor('doc_signature_procedures_observations')}/>
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
                <Form.Label>Physician Name</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({provider_id_doc_instructions: event.target.value})}>
                    <option value="">Pick From Below </option>
                      {(this.props.providerList)? this.props.providerList.map(provider => (
                    (provider.job_title === 'Doctor' || 'Physican' || 'Surgeon') && <option value= {provider.id}> {provider.job_title + ' ' + provider.first_name + '' + provider.middle_name + '' + provider.last_name + '' + provider.specialty_title} </option>
                        )): ''}
                 </Form.Control>
                 </Col>

                 <Col>
                        <Form.Label> Physician Signature</Form.Label>
                        <Form.Control placeholder="Physician Signature" type="text" name="doc_instructions_signature" value={this.state.doc_instructions_signature} onChange={this.handleInputChangeFor('doc_instructions_signature')}/>
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


const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
    providerList: state.provider.providerList,
});


export default connect(mapStateToProps) (ICUGeneralInfo);