import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


class ICUMisc extends Component {

    state= {
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        pressure_points: '',
        iv_checks: '',
        hemocheck: '',
        loc_m: '',
        loc_e: '',
        loc_v: '',
        loc_total: '',
        cannula_site: '',
        _2hr_turns: '',
        pressure_support: '',
        pain_score: '',
        sedation_score: '',
        neuro_obs: '',
        iv_or_cvp_site: '',
        feet: '',

    }


    icuMiscellaneous = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'ICU_MISC',
              payload: {
                       patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id,
                       date: this.state.date, time: this.state.time, pressure_points: this.state.pressure_points, iv_checks: this.state.iv_checks,
                        hemocheck: this.state.hemocheck, loc_m: this.state.loc_m, loc_e: this.state.loc_e, loc_v: this.state.loc_v, 
                        loc_total: this.state.loc_total, cannula_site: this.state.cannula_site, _2hr_turns: this.state._2hr_turns, 
                        pain_score: this.state.pain_score, sedation_score: this.state.sedation_score,
                        neuro_obs: this.state.neuro_obs, iv_or_cvp_site: this.state.iv_or_cvp_site, feet: this.state.feet,
  }

          });

          this.setState({
                 patient_id: this.props.patient.id, date_of_birth: this.props.patient.date_of_birth, admission_id: '', date: '', time: '',
                 pressure_points: '', iv_checks: '', hemocheck: '', loc_m: '', loc_e: '',
                 loc_v: '', loc_total: '', cannula_site: '', _2hr_turns: '', pressure_support: '',
                 pain_score: '', sedation_score: '', neuro_obs: '', iv_or_cvp_site: '', feet: '',

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
                 <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Miscellaneous</h2>
                 {this.props.errors.addIcuMiscError && (<h2 className="alert" role="alert"> {this.props.errors.addIcuMiscError}</h2>)}

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
                <Form.Label>Pressure Points</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({pressure_points: event.target.value})}>
                    <option value="">Pick From Below </option>
                    <option value="Intact">Intact </option>
                    <option value="Red">Red</option>
                    <option value="Bruised">Bruised</option>
                    <option value="Skin Broken">Skin Broken</option>
                    <option value="Blister">Blister</option>
                    <option value="Necrosis">Necrosis</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label>IV or CVP site</Form.Label>
                <Form.Control placeholder="IV or CVP Site" type="text" name="iv_or_cvp_site" value={this.state.iv_or_cvp_site} onChange={this.handleInputChangeFor('iv_or_cvp_site')}/>
                 </Col>
                   <Col>
                <Form.Label>IV Checks</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({iv_checks: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                   <Col>
                <Form.Label>Hemocheck</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({hemocheck: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="true">Done</option>
                    <option value="false">Not Done</option>
                 </Form.Control>
                 </Col>
                  <Col>
                 <Form.Label>Cannula Site</Form.Label>
                <Form.Control placeholder="Cannula Site" type="text" name="cannula_site" value={this.state.cannula_site} onChange={this.handleInputChangeFor('cannula_site')}/>
                 </Col>
            </Row>
            <Row>
                   <Col>
                <Form.Label>LOC - M</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_m: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>LOC - E</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_e: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                 </Form.Control>
                 </Col>
                       <Col>
                <Form.Label>LOC - V</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({loc_v: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </Form.Control>
                 </Col>
                <Col>
                 <Form.Label>LOC - Total</Form.Label>
                <Form.Control placeholder="LOC - Total" type="number" name="loc_total" value={this.state.loc_total} onChange={this.handleInputChangeFor('loc_total')}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                <Form.Label>2hr Turns</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({_2hr_turns: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="None">None</option>
                    <option value="Supine Position">Supine Position</option>
                    <option value="Prone Position">Prone Position</option>
                    <option value="Lateral Position">Lateral Position</option>
                    <option value="Sims Position">Sims Position</option>
                    <option value="Fowler's Position">Fowler's Position</option>
                    <option value="Semi-Fowler's Position">Semi-Fowler's Position</option>
                    <option value="Orthopneic or Tripod">Orthopneic or Tripod</option>
                    <option value="Trendelenburg position">Trendelenburg position</option>
                 </Form.Control>
                 </Col>
                <Col>
                <Form.Label>Pain Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({pain_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="0 - No Pain">0 - No Pain</option>
                    <option value="1 - Mild Pain">1 - Mild Pain</option>
                    <option value="2 - Moderate Pain">2 - Moderate Pain</option>
                    <option value="3 - Severe Pain">3 - Severe Pain</option>
                    <option value="4 - Very Severe Pain">4- Very Severe Pain</option>
                    <option value="5 - Worst Possible Pain">5 - Worst Possible Pain</option>
                 </Form.Control>
                 </Col>
                 <Col>
                <Form.Label>Sedation Score</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({sedation_score: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="1 - Awake">1 - Awake</option>
                    <option value="2 - Dozing Intermittently">2 - Dozing Intermittently</option>
                    <option value="3 - Mostly Sleeping">3 - Mostly Sleeping</option>
                    <option value="4 - Awakens When Roused">4- Awakens When Roused</option>
                    <option value="5 - Unrousable">5 - Unrousable</option>
                 </Form.Control>
                 </Col>
                  <Col>
                <Form.Label>Feet</Form.Label>
                <Form.Control as="select" onChange={(event)=>this.setState({feet: event.target.value})}>
                    <option value="">Pick From Below</option>
                    <option value="Cold">Cold</option>
                    <option value="Cool">Cool</option>
                    <option value="Warm">Warm</option>
                 </Form.Control>
                 </Col>
                 </Row>
                     <p></p>
                <Row>
                    
                 <InputGroup size='sm'>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Neuro Observations</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" aria-label="neuro_obs" placeholder="Enter Neuro Observations" 
                            name = "neuro_obs"
                            value={this.state.neuro_obs} 
                            onChange={this.handleInputChangeFor('neuro_obs')} />
                    </InputGroup>
            </Row>
   
            
           <Button onClick={(event)=>this.icuMiscellaneous(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Miscellaneous Inputs</Button>
            
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});


export default connect(mapStateToProps)(ICUMisc);