import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'


class RegisterPage extends Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    customUrl: ''
  };


  

  registerUser = (event) => {
    event.preventDefault();

    if ( this.state.firstName && this.state.middleName && this.state.lastName 
      && this.state.username && this.state.password && this.state.email
      && this.state.phoneNumber && this.state.companyName && this.state.customUrl) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          
          firstName: this.state.firstName,
          middleName: this.state.middleName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          companyName: this.state.companyName,
          customUrl: this.state.customUrl
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <>
      <div>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        
        <h1 style={{   width: '50%', margin: '1% 30%' }}>Welcome To GileadMed</h1>
        
      <Card border = "primary" style={{ width: '60%', margin: '3% auto' }} >

      <Form >  
          <Row>
            <Col>
              <Form.Control placeholder="First name" type="text" name="First name" value={this.state.firstName} onChange={this.handleInputChangeFor('firstName')}/>
            </Col>
            <Col>
              <Form.Control placeholder="Middle name" type="text" name="Middle name" value={this.state.middleName} onChange={this.handleInputChangeFor('middleName')} />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" type="text" name="Last name" value={this.state.lastName} onChange={this.handleInputChangeFor('lastName')} />
            </Col>
          </Row>
          <Row>
            <Col>
             < Form.Control placeholder = "Username" type="text" name="Username" value={this.state.username} onChange={this.handleInputChangeFor('username')} />
            </Col>
             <Col>
             < Form.Control placeholder = "Password" type="text" name="Password" value={this.state.password} onChange={this.handleInputChangeFor('password')} />
            </Col>
          </Row>
          <Row>
            <Col>
             < Form.Control placeholder = "Email" type="text" name="Email" value={this.state.email} onChange={this.handleInputChangeFor('email')}/>
            </Col>
             <Col>
             < Form.Control placeholder = "Phone Number" type="tel" name="Phone Number" value={this.state.phoneNumber} onChange={this.handleInputChangeFor('phoneNumber')} />
            </Col>
          </Row>
          <Row>
            <Col>
            < Form.Control placeholder = "Company Name" type="text" name= "Company Name"  value={this.state.companyName} onChange={this.handleInputChangeFor('companyName')} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Control placeholder = "Enter Custom URL Ending    (ps: Your url will be https://gileadmed/yourinput)" 
            type="text" 
            name="Custom Url" 
            value={this.state.customUrl} 
            onChange={this.handleInputChangeFor('customUrl')}/>
            </Col>
          </Row>
        
         
          <Button onClick={(event)=>this.registerUser(event)} variant="success" type="submit" style={{ width: '40%', margin: '0 30%' }}>
            Submit
          </Button>
        </Form>
      </Card>

       
        <div>
          <p style={{ width: '100%', margin: '1% 40%' }}>Already Have An Account With Us?</p>
          <Button variant="primary" style={{ width: '20%', margin: '0 40%' }} type="button" onClick={() => {this.props.dispatch({ type: "SET_TO_LOGIN_MODE" })}}>
            Login
          </Button>
        </div>
        
      </div>
      </>
    );
  }
}

 

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

