import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';



class Homepage extends Component {
                    state = {
                        admin: false,
                        provider: false
                    }
                     
startApp = (event, param) => {
    if (param === 'provider'){
        this.setState({
            admin: false,
            provider: true
        })
        this.props.dispatch({type: 'SET_TO_PROVIDER_LOGIN_MODE'});
    } else if (param === 'admin'){
         this.setState({
             admin: true,
             provider: false
         })
        this.props.dispatch({type: 'SET_TO_LOGIN_MODE'});
        this.props.dispatch({type: 'UNSET_TO_PROVIDER_LOGIN_MODE'});
    }
}

    render () {
        return (
            <div>

           
<h1 style={{   width: '50%', margin: '2% 30%' }}>Welcome To GileadMD Records</h1>
<h4 style={{   width: '50%', margin: '2% 30%' }}>The Smartest Medical Chart In Town</h4>

    <Card border = "success" style={{ width: '80%', margin: '3% auto' }} >
      <img className="gilead" src="images/gilead.png" alt="gilead balm"/>
        
          <Button onClick={(event)=>this.startApp(event, 'provider')} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
            Provider
          </Button>
        <Button onClick={(event)=>this.startApp(event, 'admin')} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
            Admin
          </Button>
      </Card>
       
      </div>
       
     
        );
    }
}





export default connect()(Homepage);