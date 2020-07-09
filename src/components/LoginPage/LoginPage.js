import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    adminlogin: 'Log In As An Admin',
    providerlogin: 'Log In As A Provider',
    isProvider: 'Are You A Provider',
    isAdmin: 'Are You An Administrator?',
    count:  1
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login
    // count = () => {
    //   return this.state.count +=1
    // }
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}



         <h1 style={{   width: '50%', margin: '2% 30%' }}>Welcome To GileadMD</h1>
        
      <Card border = "success" style={{ width: '50%', margin: '1% auto' }} >
      <Form >  
          <Row>
            <Col>
                <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" type="text" name="Username" value={this.state.username} onChange={this.handleInputChangeFor('username')}/>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" type="text" name="Password" value={this.state.password} onChange={this.handleInputChangeFor('password')}/>
            </Col>
          </Row>
        
          <Button onClick={(event)=>this.login(event)} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
           {(this.state.count%2!==0)?this.state.providerlogin: this.state.adminlogin} 
          </Button>
        </Form>
      </Card>
        <div>
          <p style={{ width: '100%', margin: '2% 40% .5%' }}>Don't Have An Account With Us?</p>
          <Button variant="success" style={{ width: '20%', margin: '0 40%' }} type="button" onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}>
            Register As An Admin
          </Button>
           <p style={{ width: '100%', margin: '3% 44% 0' }}> {(this.state.count%2 !== 0)? this.state.isAdmin: this.state.isProvider} </p>
           <Button variant="info" style={{ width: '20%', margin: '.5% 40%'  }} type="button" 
           onClick={() => {
             let count = this.state.count
             count +=1
             this.setState({
               count: count
            })
             }}>
            {(this.state.count%2 === 0)? this.state.providerlogin:this.state.adminlogin} 
          </Button>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
