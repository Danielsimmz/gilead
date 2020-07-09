import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class AddProvider extends Component {

      state = {
        organizational_id: this.props.user.id,
        username: '',
        password: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        employee_num: '',
        job_title: '',
        specialty_title: '',
        department_name: ''

      }

//This function dispatched our newly added provider to the database from state
//We first validate the inputs to make sure we are not sending empty inputs to the server
      registerProvider = (event) => {
    event.preventDefault();
console.log( 'we are about to send the sate for a provider add', this.state);
    if ( this.state.first_name && this.state.middle_name && this.state.last_name 
      && this.state.username && this.state.password && this.state.date_of_birth
      && this.state.employee_num && this.state.job_title && this.state.specialty_title
      && this.state.department_name) {

//send the new provider to the server through a redux saga
      this.props.dispatch({
        type: 'REGISTER_PROVIDER',
        payload: {
          organizational_id: this.state.organizational_id,
          first_name: this.state.first_name,
          middle_name: this.state.middle_name,
          last_name: this.state.last_name,
          username: this.state.username,
          password: this.state.password,
          date_of_birth: this.state.date_of_birth,
          employee_num: this.state.employee_num,
          job_title: this.state.job_title,
          specialty_title: this.state.specialty_title,
          department_name: this.state.department_name
        },
      });


      this.setState({
        organizational_id: this.props.user.id,
        username: '',
        password: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        employee_num: '',
        job_title: '',
        specialty_title: '',
        department_name: ''
      });
    } else {
      this.props.dispatch({type: 'ADD_PROVIDER_ERROR'});
    }
  } // end registerProvider

  updateProvider = (event) => {
    event.preventDefault();
      console.log( 'we are about to send the state for a provider update', this.state);

      if ( this.state.first_name && this.state.middle_name && this.state.last_name 
      && this.state.username && this.state.password && this.state.date_of_birth
      && this.state.employee_num && this.state.job_title && this.state.specialty_title
      && this.state.department_name){

        //send the updated provider to the server through a redux saga
          this.props.dispatch({
                type: 'UPDATE_PROVIDER',
                payload: {
                    organizational_id: this.state.organizational_id,
                    first_name: this.state.first_name,
                    middle_name: this.state.middle_name,
                    last_name: this.state.last_name,
                    username: this.state.username,
                    password: this.state.password,
                    date_of_birth: this.state.date_of_birth,
                    employee_num: this.state.employee_num,
                    job_title: this.state.job_title,
                    specialty_title: this.state.specialty_title,
                    department_name: this.state.department_name,
                    id: this.props.providerid
                }
          });

            this.props.dispatch({
              type: 'SEARCH_PROVIDER',
              payload: {
                first_name: this.state.first_name,
                middle_name: this.state.middle_name,
                last_name: this.state.last_name,
                job_title: this.state.job_title,
                department_name: this.state.department_name
              },
            });


             this.setState({
               organizational_id: this.props.user.id,
               username: '',
               password: '',
               first_name: '',
               middle_name: '',
               last_name: '',
               date_of_birth: '',
               employee_num: '',
               job_title: '',
               specialty_title: '',
               department_name: ''
             });

  }else{
      this.props.dispatch({ type: 'UPDATE_PROVIDER_ERROR'});
  } //end updateProvider
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
            <div className='navbuttonscontainer'>
                  {(this.props.user.clearance_level === 1)&&
                    <>
                    <Link to="/AddProvider"><Button  variant="outline-success">Add Provider</Button></Link> {' '} 
                    <Link to='/searchprovider'><Button  variant="outline-info">Search For A Provider</Button></Link> {' '}
                    </>}
              
                <Link to='/addpatient'><Button  variant="outline-primary">Add A Patient</Button></Link> {' '}
                <Link to='/searchpatient'> <Button variant="outline-secondary">Search For A Patient</Button></Link>
        </div>
        {this.props.errors.addProviderError && (<h2 className="alert" role="alert">{this.props.errors.addProviderError}</h2>)}
         {this.props.errors.updatePatientError && (<h2 className="alert" role="alert" > {this.props.errors.updatePatientError}</h2>)}

       {(this.props.providerSearch)? <h1 style={{   width: '50%', margin: '2% 40%' }}>Update Provider Information</h1>:  
       <h1 style={{   width: '50%', margin: '2% 40%' }}>Add A Provider</h1>}
        
      <Card border = "success" style={{ width: '50%', margin: '3% auto' }} >
      <Form >  
          <Row>
            <Col>
              <Form.Control placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChangeFor('first_name')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Middle Name" type="text" name="middle_name" value={this.state.middle_name} onChange={this.handleInputChangeFor('middle_name')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Last Name" type="text" name="Last Name" value={this.state.last_name} onChange={this.handleInputChangeFor('last_name')}/>
            </Col>
          </Row>
          <Row>
              <Col>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control placeholder="Date Of Birth" type="date" name="Date Of Birth" value={this.state.date_of_birth} onChange={this.handleInputChangeFor('date_of_birth')}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Username" type="text" name="Username" value={this.state.username} onChange={this.handleInputChangeFor('username')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Password" type="text" name="Password" value={this.state.password} onChange={this.handleInputChangeFor('password')}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control placeholder="Job Title" type="text" name="job_title" value={this.state.job_title} onChange={this.handleInputChangeFor('job_title')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Specialty Title" type="text" name="specialty_title" value={this.state.specialty_title} onChange={this.handleInputChangeFor('specialty_title')}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control placeholder="Department Name" type="text" name="department_name" value={this.state.department_name} onChange={this.handleInputChangeFor('department_name')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Employee Number" type="text" name="employee_num" value={this.state.employee_num} onChange={this.handleInputChangeFor('employee_num')}/>
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

//Bring in state to access the organizational id and the error reducers
//the id is needed for inserts into the medical provider database
const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
});
   
export default connect(mapStateToProps) (AddProvider);
