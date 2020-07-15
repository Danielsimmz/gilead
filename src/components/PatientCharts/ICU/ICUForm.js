import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import ICUBasicVitals from './ICUBasicVitals';
import ICUCardiacResp from './ICUCardiacResp';
import ICUMisc from './ICUMisc';
import ICUMedList from './ICUMedList';
import ICUBloodGases from './ICUBloodGases';
import LabEntering from './LabEntering';
import ICUFluidBalance from './ICUFluidBalance';
import ICUGeneralInfo from './ICUGeneralInfo';
import ICUSpecialInvestigations from './ICUSpecialInvestigations';
// import Col from "react-bootstrap/Col";
// import Row from 'react-bootstrap/Row'
// import Button from "react-bootstrap/Button";
// import { Link } from 'react-router-dom';
// import InputGroup from 'react-bootstrap/InputGroup';



class ICUForm extends Component {
    state = {

    }

    render () {
        return(

<div>
                <h1 style={{  width: '50%', margin: '2% 40%' }}>ICU Chart</h1>
    <Card border = "success" style={{ width: '85%', margin: '3% auto' }} >
 
        <Form> 
              <ICUBasicVitals patient={this.props.patient}/>
              <ICUCardiacResp  patient={this.props.patient}/>
              <ICUMisc patient={this.props.patient}/>
              <ICUMedList  patient={this.props.patient}/>
              <ICUBloodGases  patient={this.props.patient}/>
              <LabEntering  patient={this.props.patient}/>
              <ICUFluidBalance  patient={this.props.patient}/>
              <ICUGeneralInfo  patient={this.props.patient}/>
              <ICUSpecialInvestigations  patient={this.props.patient}/>
                       
        </Form>
      </Card>

</div>

        );
    }
}

const mapStateToProps = state => ({

    user: state.user,
    patient: state.dashPatient.dashboardUser,
});

export default connect(mapStateToProps)(ICUForm);