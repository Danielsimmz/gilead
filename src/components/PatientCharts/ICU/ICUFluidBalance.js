import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';


class ICUFluidBalance extends Component {

    state = {
        patient_id: this.props.patient.id,
        date_of_birth: this.props.patient.date_of_birth,
        admission_id: '',
        date: '',
        time: '',
        intravenous_fluid_intake_type: '',
        intravenous_fluid_intake_amount: '',
        oral_intake_type: '',
        oral_intake_amount: '',
        oral_intake_hourly_total: '',
        gastric_feed_intake_type: '',
        gastric_feed_intake_amount: '',
        nasogastric_suction_and_vomitus_output: '',
        portovac_under_h2o_drain_output: '',
        stool_drainage_output: '',
        urine_ouput: '',
        pee_hours_output: '',
        nig_aspirate_output: '',
        sg_output: '',
        output_test: '',
        running_output_total: '',
        hourly_balance: ''

    }



     icuFluidBalance = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'FLUID_BALANCE',
              payload: {
                  patient_id: this.state.patient_id, 
                  date_of_birth: this.state.date_of_birth,
                 admission_id: this.state.admission_id, 
                 date: this.state.date,
                  time: this.state.time, 
                  intravenous_fluid_intake_type: this.state.intravenous_fluid_intake_type, 
                  urine_ouput: this.state.urine_ouput,
                  intravenous_fluid_intake_amount: this.state.intravenous_fluid_intake_amount, 
                  nig_aspirate_output: this.state.nig_aspirate_output, 
                  sg_output: this.state.sg_output,
                  oral_intake_type: this.state.oral_intake_type, 
                  oral_intake_amount: this.state.oral_intake_amount, 
                  oral_intake_hourly_total: this.state.oral_intake_hourly_total,
                  gastric_feed_intake_type: this.state.gastric_feed_intake_type, 
                  gastric_feed_intake_amount: this.state.gastric_feed_intake_amount,
                  nasogastric_suction_and_vomitus_output: this.state.nasogastric_suction_and_vomitus_output, 
                  pee_hours_output: this.state.pee_hours_output,
                  portovac_under_h2o_drain_output: this.state.portovac_under_h2o_drain_output,
                   stool_drainage_output: this.state.stool_drainage_output, 
                  output_test: this.state.output_test, 
                  running_output_total: this.state.running_output_total, 
                  hourly_balance: this.state.hourly_balance
              }

          });

          this.setState({
             patient_id: this.props.patient.id, 
             date_of_birth: this.props.patient.date_of_birth,
            admission_id: '', 
            date: '', 
            time: '', 
            intravenous_fluid_intake_type: '',
            intravenous_fluid_intake_amount: '',
            oral_intake_type: '', 
            oral_intake_amount: '', 
            oral_intake_hourly_total: '', 
            gastric_feed_intake_type: '',
             gastric_feed_intake_amount: '', 
             nasogastric_suction_and_vomitus_output: '',
              portovac_under_h2o_drain_output: '',
            stool_drainage_output: '', 
            urine_ouput: '',
              pee_hours_output: '',
             nig_aspirate_output: '',
            sg_output: '',
             output_test: '', 
             running_output_total: '', 
             hourly_balance: ''
          });
    }




    //This function handles storing input values into state on change
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
            return (
                <div>
                    <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Fluid Balance</h2>
                    {this.props.errors.addFluidBalanceError && (<h2 className="alert" role="alert"> {this.props.errors.addFluidBalanceError}</h2>)}

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
                <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Fluid Intake</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> IV Fluid Type </Form.Label>
                <Form.Control placeholder="IV Fluid Type" type="text" name="intravenous_fluid_intake_type" value={this.state.intravenous_fluid_intake_type} onChange={this.handleInputChangeFor('intravenous_fluid_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> IV Fluid Amount </Form.Label>
                <Form.Control placeholder="IV Fluid Amount" type="number" name="intravenous_fluid_intake_amount" value={this.state.intravenous_fluid_intake_amount} onChange={this.handleInputChangeFor('intravenous_fluid_intake_amount')}/>
                 </Col>
                  <Col>
                 <Form.Label> Oral Intake Type </Form.Label>
                <Form.Control placeholder="Oral Intake Type" type="text" name="oral_intake_type" value={this.state.oral_intake_type} onChange={this.handleInputChangeFor('oral_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> Oral Intake Amount </Form.Label>
                <Form.Control placeholder="Oral Intake Amount" type="number" name="oral_intake_amount" value={this.state.oral_intake_amount} onChange={this.handleInputChangeFor('oral_intake_amount')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> Oral Intake Hourly Total </Form.Label>
                <Form.Control placeholder="Oral Intake Hourly Total" type="number" name="oral_intake_hourly_total" value={this.state.oral_intake_hourly_total} onChange={this.handleInputChangeFor('oral_intake_hourly_total')}/>
                 </Col>
                 <Col>
                 <Form.Label> Gastric Feed Intake Type </Form.Label>
                <Form.Control placeholder="Gastric Feed Intake Type" type="text" name="gastric_feed_intake_type" value={this.state.gastric_feed_intake_type} onChange={this.handleInputChangeFor('gastric_feed_intake_type')}/>
                 </Col>
                 <Col>
                 <Form.Label> Gastric Feed Intake Amount </Form.Label>
                <Form.Control placeholder="Gastric Feed Intake Amount" type="number" name="gastric_feed_intake_amount" value={this.state.gastric_feed_intake_amount} onChange={this.handleInputChangeFor('gastric_feed_intake_amount')}/>
                 </Col>
            </Row>
              <Row>
                <Col>
                <h4 style={{   width: '70%', margin: '1% 40% 1%', }}>Fluid Output</h4>
                </Col>
            </Row>
            <Row>
            <Col>
                 <Form.Label> Gastric Suction & Vomitus </Form.Label>
                <Form.Control placeholder="Gastric Suction & Vomitus" type="number" name="nasogastric_suction_and_vomitus_output" value={this.state.nasogastric_suction_and_vomitus_output} onChange={this.handleInputChangeFor('nasogastric_suction_and_vomitus_output')}/>
            </Col>
             <Col>
                 <Form.Label> Porto-vac Under & H₂O Drain </Form.Label>
                <Form.Control placeholder="Porto-vac & Under H₂O Drain" type="number" name="portovac_under_h2o_drain_output" value={this.state.portovac_under_h2o_drain_output} onChange={this.handleInputChangeFor('portovac_under_h2o_drain_output')}/>
            </Col>
              <Col>
                 <Form.Label> Stool Drainage </Form.Label>
                <Form.Control placeholder="Stool Drainage" type="text" name="stool_drainage_output" value={this.state.stool_drainage_output} onChange={this.handleInputChangeFor('stool_drainage_output')}/>
            </Col>
            </Row>
            <Row>
                 <Col>
                 <Form.Label> Urine Output </Form.Label>
                <Form.Control placeholder="Urine Output" type="number" name="urine_ouput" value={this.state.urine_ouput} onChange={this.handleInputChangeFor('urine_ouput')}/>
            </Col>
             <Col>
                 <Form.Label> Hourly Urine Output </Form.Label>
                <Form.Control placeholder="Hourly Urine Output" type="number" name="pee_hours_output" value={this.state.pee_hours_output} onChange={this.handleInputChangeFor('pee_hours_output')}/>
            </Col>
             <Col>
                <Form.Label> NIG Aspirate Output </Form.Label>
                <Form.Control placeholder="NIG Aspirate Output" type="number" name="nig_aspirate_output" value={this.state.nig_aspirate_output} onChange={this.handleInputChangeFor('nig_aspirate_output')}/>
                </Col>
               
            </Row>

            <Row>
                <Col>
                <Form.Label> SG Output </Form.Label>
                <Form.Control placeholder="SG Output" type="number" name="sg_output" value={this.state.sg_output} onChange={this.handleInputChangeFor('sg_output')}/>
                </Col>
                 <Col>
                <Form.Label> Output Test</Form.Label>
                <Form.Control placeholder="Output Test" type="text" name="output_test" value={this.state.output_test} onChange={this.handleInputChangeFor('output_test')}/>
                </Col>
                 <Col>
                <Form.Label> Running Output Total</Form.Label>
                <Form.Control placeholder="Running Output Total" type="number" name="running_output_total" value={this.state.running_output_total} onChange={this.handleInputChangeFor('running_output_total')}/>
                </Col>
                 <Col>
                <Form.Label> Hourly Balance</Form.Label>
                <Form.Control placeholder="Hourly Balance" type="number" name="hourly_balance" value={this.state.hourly_balance} onChange={this.handleInputChangeFor('hourly_balance')}/>
                </Col>
            </Row>
               
             

<Button onClick={(event)=>this.icuFluidBalance(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Fluid Balance</Button>

                </div>
            );
        }

}


const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});


export default connect(mapStateToProps) (ICUFluidBalance);