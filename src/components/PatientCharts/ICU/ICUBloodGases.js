import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';


class ICUBloodGases extends Component {

    state = {
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        ph: '',
        pco2: '',
        po2: '',
        hco3: '',
        peep: '',
        tv: '',
        be: '',
        rr: '',
        fio2: '',
           
    }


     icuBloodGases = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'BLOOD_GASES',
              payload: {
                  patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id,
                  date: this.state.date, time: this.state.time, ph: this.state.ph, pco2: this.state.pco2,
                  po2: this.state.po2, hco3: this.state.hco3, peep: this.state.peep, tv: this.state.tv,
                  be: this.state.be, rr: this.state.rr, fio2: this.state.fio2
              }

          });

          this.setState({
              patient_id: this.props.patient.id, date_of_birth: this.props.patient.date_of_birth, admission_id: '', date: '', time: '',
              ph: '', pco2: '', po2: '', hco3: '', peep: '', tv: '', be: '', rr: '',
              fio2: '',
          })
    }




     //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
        return(
            <div>
                <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Blood Gases</h2>
                {this.props.errors.addBloodGasesError && (<h2 className="alert" role="alert"> {this.props.errors.addBloodGasesError}</h2>)}

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
                 <Form.Label>pH</Form.Label>
                <Form.Control placeholder="pH" type="number" name="ph" value={this.state.ph} onChange={this.handleInputChangeFor('ph')}/>
                 </Col>
                 <Col>
                 <Form.Label>pCO₂</Form.Label>
                <Form.Control placeholder="pCO₂" type="number" name="pco2" value={this.state.pco2} onChange={this.handleInputChangeFor('pco2')}/>
                 </Col>
                 <Col>
                 <Form.Label>pO₂</Form.Label>
                <Form.Control placeholder="pO₂" type="number" name="po2" value={this.state.po2} onChange={this.handleInputChangeFor('po2')}/>
                 </Col>
                 <Col>
                 <Form.Label>HCO₃</Form.Label>
                <Form.Control placeholder="HCO₃" type="number" name="hco3" value={this.state.hco3} onChange={this.handleInputChangeFor('hco3')}/>
                 </Col>
                 <Col>
                 <Form.Label>peep</Form.Label>
                <Form.Control placeholder="peep" type="number" name="peep" value={this.state.peep} onChange={this.handleInputChangeFor('peep')}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                 <Form.Label>tv</Form.Label>
                <Form.Control placeholder="tv" type="number" name="tv" value={this.state.tv} onChange={this.handleInputChangeFor('tv')}/>
                 </Col>
                 <Col>
                 <Form.Label>be</Form.Label>
                <Form.Control placeholder="be" type="number" name="be" value={this.state.be} onChange={this.handleInputChangeFor('be')}/>
                 </Col>
                 <Col>
                 <Form.Label>rr</Form.Label>
                <Form.Control placeholder="rr" type="number" name="rr" value={this.state.rr} onChange={this.handleInputChangeFor('rr')}/>
                 </Col>
                 <Col>
                 <Form.Label>FiO₂</Form.Label>
                <Form.Control placeholder="FiO₂" type="number" name="fio2" value={this.state.fio2} onChange={this.handleInputChangeFor('fio2')}/>
                 </Col>
            </Row>
             
<Button onClick={(event)=>this.icuBloodGases(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Blood Gases</Button>
                
               
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});

export default connect(mapStateToProps) (ICUBloodGases);