import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

class AddPatient extends Component {

      state = {
    first_name: '',
	middle_name: '',
	last_name: '',
	date_of_birth: '',
	profile_picture: '',
	phone_number: '',
	email: '',
	physical_address: '',
	mailing_address: '',
	next_of_kin_first_name: '',
	next_of_kin_last_name: '',
	next_of_kin_phone_number: '',
    next_of_kin_email: '',
    next_of_kin_relationship: '',
	sex:  '',
	mass: '',
	height: '',
	allergies: '',
	age: '',
	patient_alive: '',
	medical_aid_provider:'',
	medical_aid_number: '',
	patient_religion: '',
	marital_status: '',
	father_first_name: '',
	father_middle_name: '',
	father_last_name: '',
	mother_first_name: '',
	mother_middle_name: '',
    mother_last_name: '',
    occupation: '',
    employer: ''
      }

//This function dispatched our newly added patient to the database from state
//We first validate the inputs to make sure we are not sending empty inputs to the server
      registerPatient = (event) => {
    event.preventDefault();

    console.log( 'we are about to send the sate', this.state);

    if (this.state.first_name && this.state.middle_name && this.state.last_name && this.state.date_of_birth &&
        this.state.phone_number && this.state.email && this.state.physical_address && this.state.occupation &&
        this.state.mailing_address && this.state.next_of_kin_first_name && this.state.next_of_kin_last_name &&
        this.state.next_of_kin_phone_number && this.state.next_of_kin_email && this.state.sex && this.state.mass &&
        this.state.height && this.state.allergies && this.state.age && this.state.patient_alive && this.state.medical_aid_provider &&
        this.state.medical_aid_number && this.state.patient_religion && this.state.marital_status && this.state.next_of_kin_relationship &&
        this.state.father_first_name && this.state.father_middle_name && this.state.father_last_name && this.state.employer &&
        this.state.mother_first_name && this.state.mother_middle_name && this.state.mother_last_name){

        

//send the new patient to the server through a redux saga
      this.props.dispatch({
        type: 'REGISTER_PATIENT',
        payload: {
          first_name: this.state.first_name, middle_name: this.state.middle_name, last_name: this.state.last_name, date_of_birth: this.state.date_of_birth, profile_picture: this.state.profile_picture, 
          phone_number: this.state.phone_number, email: this.state.email, physical_address: this.state.physical_address, mailing_address: this.state.mailing_address, next_of_kin_first_name: this.state.next_of_kin_first_name,
          next_of_kin_last_name: this.state.next_of_kin_last_name, next_of_kin_phone_number: this.state.next_of_kin_phone_number, next_of_kin_email: this.state.next_of_kin_email, next_of_kin_relationship: this.state.next_of_kin_relationship,
          sex: this.state.sex, mass: this.state.mass, height: this.state.height, allergies: this.state.allergies, age: this.state.age, patient_alive: this.state.patient_alive, medical_aid_provider: this.state.medical_aid_provider, 
          medical_aid_number: this.state.medical_aid_number, patient_religion: this.state.patient_religion, marital_status: this.state.marital_status, father_first_name: this.state.father_first_name, father_middle_name: this.state.father_middle_name, 
          father_last_name: this.state.father_last_name, mother_first_name: this.state.mother_first_name, mother_middle_name: this.state.mother_middle_name, 
          mother_last_name: this.state.mother_last_name, occupation: this.state.occupation, employer: this.state.employer
        },
      });


      this.setState({
       first_name: '', middle_name: '', last_name: '', date_of_birth: '', profile_picture: '', phone_number: '', email: '',
       physical_address: '', mailing_address: '', next_of_kin_first_name: '', next_of_kin_last_name: '', next_of_kin_phone_number: '',
       next_of_kin_email: '', next_of_kin_relationship: '', sex: '', mass: '', height: '', allergies: '', age: '',
       patient_alive: '', medical_aid_provider: '', medical_aid_number: '', patient_religion: '', marital_status: '',
       father_first_name: '', father_middle_name: '', father_last_name: '', mother_first_name: '', mother_middle_name: '',
       mother_last_name: '', occupation: '', employer: ''
      });
    } else {
      this.props.dispatch({type: 'ADD_PATIENT_ERROR'});
    }
  } // end registerPatient

//This function handles storing input values into state on change
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

    render () {
      return (
      <div>
        {this.props.errors.addPatientError && (
          <h2 className="alert" role="alert">
            {this.props.errors.addPatientError}
          </h2>
        )}
       <h1 style={{   width: '50%', margin: '2% 30%' }}>Add Patient Biography</h1>
        
      <Card border = "info" style={{ width: '90%', margin: '3% auto' }} >
      <Form >  
          <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChangeFor('first_name')}/>
            </Col>
            <Col>
             <Form.Label>Middle Name</Form.Label>
              <Form.Control placeholder="Middle Name" type="text" name="middle_name" value={this.state.middle_name} onChange={this.handleInputChangeFor('middle_name')}/>
            </Col>
            <Col>
             <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChangeFor('last_name')}/>
            </Col>
          </Row>
          <Row>
              <Col>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control placeholder="Date Of Birth" type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleInputChangeFor('date_of_birth')}/>
            </Col>
            <Col>
                <Form.Label>Sex</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({sex: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </Form.Control>
            </Col>
            <Col>
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Age" type="text" name="age" value={this.state.age} onChange={this.handleInputChangeFor('age')}/>
            </Col>
            <Col>
             <Form.Label>Profile Picture</Form.Label>
                <input type="file" onChange={(event)=> this.setState({profile_picture: event.target.files})} />
            </Col>
          </Row>
         <Row>
              <Col>
               <Form.Label>Religion</Form.Label>
                <Form.Control placeholder="Religion" type="text" name="religion" value={this.state.patient_religion} onChange={this.handleInputChangeFor('patient_religion')}/>
              </Col>
              <Col>
               <Form.Label>Medical Aid Provider</Form.Label>
                <Form.Control placeholder="Medical Aid Provider" type="text" name="medical_aid_provider" value={this.state.medical_aid_provider} onChange={this.handleInputChangeFor('medical_aid_provider')}/>
              </Col>
             <Col>
              <Form.Label>Medical Aid Number</Form.Label>
                <Form.Control placeholder="Medical Aid Number" type="text" name="medical_aid_number" value={this.state.medical_aid_number} onChange={this.handleInputChangeFor('medical_aid_number')}/>
              </Col>
         </Row>   
         <Row>
              <Col>
                <Form.Label>Patient Is Living</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({patient_alive: event.target.value})}>
                     <option value=''>Pick From Below</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                 </Form.Control>
            </Col>
            <Col>
                <Form.Label>Marital Status</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({marital_status: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="Single">Single</option>
                    <option value="Engaged">Engaged</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                 </Form.Control>
            </Col>
            <Col>
            <Form.Label>Enter Any Allergies</Form.Label>
                <Form.Control placeholder="Allergies (seperate by comma)" type="text" name="allergies" value={this.state.allergies} onChange={this.handleInputChangeFor('allergies')}/>
              </Col>
         </Row>
          <Row>
              <Col>
               <Form.Label>Weight/Mass (kg)</Form.Label>
                <Form.Control placeholder="Weight/Mass (kg)" type="text" name="mass" value={this.state.mass} onChange={this.handleInputChangeFor('mass')}/>
              </Col>
              <Col>
               <Form.Label>Height (m)</Form.Label>
                <Form.Control placeholder="Height (m)" type="text" name="height" value={this.state.height} onChange={this.handleInputChangeFor('height')}/>
              </Col>
              <Col>
               <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Phone Number" type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleInputChangeFor('phone_number')}/>
            </Col>
            <Col>
             <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.handleInputChangeFor('email')}/>
            </Col>
          </Row>
          <Row>
              <Col> 
              <Form.Label>Physical Address</Form.Label>
              <Form.Control placeholder="Physical Address" type="text" name="physical_address" value={this.state.physical_address} onChange={this.handleInputChangeFor('physical_address')}/>
            </Col>
            <Col>
             <Form.Label>Mailing Address</Form.Label>
              <Form.Control placeholder="Mailing Address" type="text" name="mailing_address" value={this.state.mailing_address} onChange={this.handleInputChangeFor('mailing_address')}/>
            </Col>
          </Row>
          <Row>
            <Col>
             <Form.Label>Occupation</Form.Label>
              <Form.Control placeholder="Occupation" type="text" name="occupation" value={this.state.occupation} onChange={this.handleInputChangeFor('occupation')}/>
            </Col>
            <Col>
             <Form.Label>Employer</Form.Label>
              <Form.Control placeholder="Employer" type="text" name="employer" value={this.state.employer} onChange={this.handleInputChangeFor('employer')}/>
            </Col>
          </Row>
          <Row>
              <Form.Label style={{ margin: '1% auto 2%' }}>Next Of Kin Information</Form.Label>
          </Row>
            <Row>
            <Col>
             <Form.Label> Next Of Kin First Name</Form.Label>
              <Form.Control placeholder="First Name" type="text" name="next_of_kin_first_name" value={this.state.next_of_kin_first_name} onChange={this.handleInputChangeFor('next_of_kin_first_name')}/>
            </Col>
            <Col>
             <Form.Label>Next Of Kin Last Name</Form.Label>
             <Form.Control placeholder="Last Name" type="text" name="next_of_kin_last_name" value={this.state.next_of_kin_last_name} onChange={this.handleInputChangeFor('next_of_kin_last_name')}/>
            </Col>
            <Col>
             <Form.Label>Next Of Kin Phone N.O.</Form.Label>
              <Form.Control placeholder="Phone Number" type="text" name="next_of_kin_phone_number" value={this.state.next_of_kin_phone_number} onChange={this.handleInputChangeFor('next_of_kin_phone_number')}/>
            </Col>
            <Col>
             <Form.Label>Next Of Kin Email</Form.Label>
             <Form.Control placeholder="Email" type="text" name="next_of_kin_email" value={this.state.next_of_kin_email} onChange={this.handleInputChangeFor('next_of_kin_email')}/>
            </Col>
            <Col>
             <Form.Label>Next Of Kin Relationship</Form.Label>
             <Form.Control placeholder="Relationship" type="text" name="next_of_kin_relationship" value={this.state.next_of_kin_relationship} onChange={this.handleInputChangeFor('next_of_kin_relationship')}/>
            </Col>
          </Row>
             
          <Row>
              <Form.Label style={{ margin: '1% auto 2%' }}>Parent Information</Form.Label>
          </Row>
            <Row>
            <Col>
             <Form.Label>Father's First Name</Form.Label>
              <Form.Control placeholder="Father's First Name" type="text" name="father_first_name}" value={this.state.father_first_name} onChange={this.handleInputChangeFor('father_first_name')}/>
            </Col>
            <Col>
             <Form.Label>Father's Middle Name</Form.Label>
             <Form.Control placeholder="Father's Middle Name" type="text" name="father_middle_name}" value={this.state.father_middle_name} onChange={this.handleInputChangeFor('father_middle_name')}/>
            </Col>
             <Col>
              <Form.Label>Father's Last Name</Form.Label>
             <Form.Control placeholder="Father's Last Name" type="text" name="father_last_name}" value={this.state.father_last_name} onChange={this.handleInputChangeFor('father_last_name')}/>
            </Col>
          </Row>
         <Row>
            <Col>
             <Form.Label>Mother's First Name</Form.Label>
              <Form.Control placeholder="Mother's First Name" type="text" name="mother_first_name" value={this.state.mother_first_name} onChange={this.handleInputChangeFor('mother_first_name')}/>
            </Col>
            <Col>
             <Form.Label>Mother's Middle Name</Form.Label>
             <Form.Control placeholder="Mother's Middle Name" type="text" name="mother_middle_name" value={this.state.mother_middle_name} onChange={this.handleInputChangeFor('mother_middle_name')}/>
            </Col>
             <Col>
              <Form.Label>Mother's Last Name</Form.Label>
             <Form.Control placeholder="Mother's Last Name" type="text" name="mother_last_name" value={this.state.mother_last_name} onChange={this.handleInputChangeFor('mother_last_name')}/>
            </Col>
          </Row>
        
          <Button onClick={(event)=>this.registerPatient(event)} variant="success" type="submit" style={{ width: '40%', margin: '7% 30% 2%' }}>
            Add Patient
          </Button>
        </Form>
      </Card>
      </div>


      );
    }
}

//Bring in state to access the organizational id and the error reducers
//the id is needed for inserts into the medical provider database
const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
});
   
export default connect(mapStateToProps) (AddPatient);
