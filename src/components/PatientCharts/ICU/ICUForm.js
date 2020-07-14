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
              <ICUBasicVitals/>
              <ICUCardiacResp/>
              <ICUMisc/>
              <ICUMedList/>
              <ICUBloodGases/>
              <LabEntering/>
              <ICUFluidBalance/>
              <ICUGeneralInfo/>
              <ICUSpecialInvestigations/>
                       
        </Form>
      </Card>

</div>

        );
    }
}


export default connect()(ICUForm);