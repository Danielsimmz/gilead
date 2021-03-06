import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'


//This component is for the provider logging in at the specified route
//In our case, the route will be /sanfordhealth
class ProviderLogin extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'PROVIDER_LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'PROVIDER_LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginProvider && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginProvider}
          </h2>
        )}



         <h1 style={{   width: '50%', margin: '2% 30%' }}>Welcome To GileadMD</h1>
        
      <Card border = "success" style={{ width: '50%', margin: '3% auto' }} >
      <Form >  
          <Row>
            <Col>
              <Form.Control placeholder="Username" type="text" name="Username" value={this.state.username} onChange={this.handleInputChangeFor('username')}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Password" type="text" name="Password" value={this.state.password} onChange={this.handleInputChangeFor('password')}/>
            </Col>
          </Row>
        
          <Button onClick={(event)=>this.login(event)} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
            Log In
          </Button>
        </Form>
      </Card>
        <div>
          <p style={{ width: '100%', margin: '1% 40%' }}>Failing to Log in? Contact your system administrator for further assistance</p>
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

export default connect(mapStateToProps)(ProviderLogin);
