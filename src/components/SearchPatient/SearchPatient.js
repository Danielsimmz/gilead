import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import AddPatient from '../AddPatient/AddPatient';
import { Link } from 'react-router-dom';



class SearchPatient extends Component {

    state = {
        first_name: '',
        middle_name: '',
        last_name: '',
        sex: '',
        date_of_birth: '',
        edit: false,
        id: ''
    }


    searchPatient = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.middle_name && this.state.last_name && this.state.sex && this.state.date_of_birth) {
      
        this.props.dispatch({
        type: 'SEARCH_PATIENT',
        payload: {
           first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            sex: this.state.sex,
            date_of_birth: this.state.date_of_birth
        },
      });
  //empty inputs
this.setState({
     first_name: '',
     middle_name: '',
     last_name: '',
     sex: '',
     date_of_birth: '',
     edit: false,
     id: ''
})
      
    } else {
      this.props.dispatch({ type: 'SEARCH_INPUT_ERROR' });
    }
  } //END of searchPatient


  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }


  //deletePatient takes in the patient id and dispatches it to the db 
  deletePatient = (parameter) =>{
       this.props.dispatch({type: 'DELETE_PATIENT', payload: parameter})
  }


    render () {
        return (
                 <div>
                     <div className='navbuttonscontainer'>
                  {(this.props.user.clearance_level === 1)&&
                    <>
                    <Link to="/AddProvider"><Button  variant="outline-success">Add Provider</Button></Link> {' '} 
                    <Link to='/searchprovider'><Button  variant="outline-info">Search For A Provider</Button></Link> {' '}
                    </>}
              
                <Link to='/addpatient'><Button  variant="outline-primary">Add A Patient</Button></Link> {' '}
                <Link to='/searchpatient'> <Button variant="outline-secondary">Search For A Patient</Button></Link>
        </div>
        {this.props.errors.searchMessage && (<h2 className="alert" role="alert" > {this.props.errors.searchMessage}</h2>)}



         <h1 style={{   width: '50%', margin: '2% 40%' }}>Search For A Patient</h1>
        
      <Card border = "success" style={{ width: '60%', margin: '1% auto' }} >
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
                <Form.Label>Sex</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({sex: event.target.value})}>
                     <option value="">Pick From Below</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </Form.Control>
            </Col>
            <Col>
                <Form.Label>Date Of Birth</Form.Label>
              <Form.Control placeholder="Date Of Birth" type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleInputChangeFor('date_of_birth')}/>
            </Col>
          </Row>
        
          <Button onClick={(event)=>this.searchPatient(event)} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
           Search For Patient
          </Button>
        </Form>
      </Card>
    
    
    {this.props.errors.deletePatientError && (<h2 className="alert" role="alert" > {this.props.errors.deletePatientError}</h2>)}
    
      <Card border = "success" style={{ width: '95%', margin: '8% auto 6%' }}>
         <h1 style={{   width: '50%', margin: '0 30% 1%' }}>Patient Search Results</h1>
        <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>D.O.B</th>
                <th>Physical Address</th>
                <th>Medical Aid Provider</th>
                <th>Medical Aid #</th>
                <th>Chart</th>
                <th>Edit</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
            {(this.props.patientSearch)? this.props.patientSearch.map(patient => (
                    <tr key={patient.id}> 
                      <td align='center'>{patient.first_name}</td>
                      <td align='center'>{patient.middle_name}</td>
                      <td align='center'>{patient.last_name}</td>
                      <td align='center'>{moment(patient.date_of_birth).format('MMMM Do YYYY')}</td>
                       <td align='center'>{patient.physical_address}</td>
                      <td align='center'>{patient.medical_aid_provider}</td>
                      <td align='center'>{patient.medical_aid_number}</td>
                      <td align='center'><Link to="/patientdashboard"><Button  variant="info" >View</Button></Link></td>
                      <td align='center'><Button onClick={()=> {
                        this.setState({id: patient.id})
                        this.setState({edit: true})}} variant="primary" >Edit</Button></td>
                      <td align='center'><Button onClick={(event) =>this.deletePatient(patient)} variant="danger" >delete</Button></td>
                    </tr>
                  )): ''}
            </tbody>
          </Table>
      </Card>
     

      {(this.state.edit)? <AddPatient patientSearch={this.props.patientSearch} patientid={this.state.id}/>:''}

  
            </div>
        )
    }
}





// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    patientSearch: state.search.patientSearch,
    user: state.user,

});

export default connect(mapStateToProps)(SearchPatient);