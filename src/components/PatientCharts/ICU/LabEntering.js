import React, {Component} from 'react';
import{connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';


class LabEntering extends Component {

    state = {
        patient_id: '',
        date_of_birth: '',
        admission_id: '',
        ordering_first_name: '',
        ordering_middle_name: '',
        ordering_last_name: '',
        resulting_first_name: '',
        resulting_middle_name: '',
        resulting_last_name: '',
        date_ordered: '',
        time_ordered: '',
        date_resulted: '',
        time_resulted: '',
        pcv: '',
        hb: '',
        wcc: '',
        rbc: '',
        platelets: '',
        pi: '',
        clotting_time: '',
        sgot: '',
        spgt: '',
        ldh: '',
        cpk: '',
        urea: '',
        na: '',
        k: '',
        cl: '',
        creat: '',
        protein_total: '',
        albumin: '',
        globulin: '',
        eet_osmol: '',
        urine_osmol: '',
        ca: '',
        mg: '',
        po4: '',
        abgs: '',
        abe: '',
        osat: '',

    }





        icuLabResults = (event) => {
          event.preventDefault();

          console.log('We are about to send the state', this.state);

          this.props.dispatch({
              type: 'LAB_ENTERING',
              payload: {
                    patient_id: this.state.patient_id, date_of_birth: this.state.date_of_birth, admission_id: this.state.admission_id, ordering_first_name: this.state.ordering_first_name,
                    ordering_middle_name: this.state.ordering_middle_name, ordering_last_name: this.state.ordering_last_name, resulting_first_name: this.state.resulting_first_name, resulting_middle_name: this.state.resulting_middle_name,
                    resulting_last_name: this.state.resulting_last_name, date_ordered: this.state.date_ordered, time_ordered: this.state.time_ordered, date_resulted: this.state.date_resulted,
                    time_resulted: this.state.time_resulted, pcv: this.state.pcv, hb: this.state.hb, wcc: this.state.wcc, rbc: this.state.rbc,
                    platelets: this.state.platelets, pi: this.state.pi, clotting_time: this.state.clotting_time, sgot: this.state.sgot, spgt: this.state.spgt,
                    ldh: this.state.ldh, cpk: this.state.cpk, urea: this.state.urea, na: this.state.na, k: this.state.k,
                    cl: this.state.cl, creat: this.state.creat, protein_total: this.state.protein_total, albumin: this.state.albumin,
                    globulin: this.state.globulin, eet_osmol: this.state.eet_osmol, urine_osmol: this.state.urine_osmol, ca: this.state.ca,
                    mg: this.state.mg, po4: this.state.po4, abgs: this.state.abgs, abe: this.state.abe, osat: this.state.osat,
                }

          });

          this.setState({
                 patient_id: '', date_of_birth: '', admission_id: '', ordering_first_name: '', ordering_middle_name: '',
                 ordering_last_name: '', resulting_first_name: '', resulting_middle_name: '', resulting_last_name: '',
                date_ordered: '', time_ordered: '', date_resulted: '', time_resulted: '', pcv: '', hb: '',
                wcc: '', rbc: '', platelets: '', pi: '', clotting_time: '', sgot: '', spgt: '',  ldh: '',
                cpk: '', urea: '', na: '', k: '', cl: '', creat: '', protein_total: '', albumin: '',
                globulin: '', eet_osmol: '',  urine_osmol: '', ca: '', mg: '', po4: '', abgs: '', abe: '', osat: '',
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
                    <h2 style={{   width: '70%', margin: '2% 40% 2%', }}>Lab Results</h2>

          <Row>
                <Col>
                <Form.Label>Date Ordered</Form.Label>
                <Form.Control placeholder="Date Ordered" type="date" name="date_ordered" value={this.state.date_ordered} onChange={this.handleInputChangeFor('date_ordered')}/>
                </Col>

                <Col>
                <Form.Label>Time Ordered</Form.Label>
                <Form.Control placeholder="Time Ordered" type="time" name="time_ordered" value={this.state.time_ordered} onChange={this.handleInputChangeFor('time_ordered')}/>
                </Col>
                <Col>
                <Form.Label>Date Resulted</Form.Label>
                <Form.Control placeholder="Date Resulted" type="date" name="date_resulted" value={this.state.date_resulted} onChange={this.handleInputChangeFor('date_resulted')}/>
                </Col>

                <Col>
                <Form.Label>Time Resulted</Form.Label>
                <Form.Control placeholder="Time Resulted" type="time" name="time_resulted" value={this.state.time_resulted} onChange={this.handleInputChangeFor('time_resulted')}/>
                </Col>
    
            </Row>
            <Row>
                <Col>
                <Form.Label>Ordering Provider </Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" type="text" name="ordering_first_name" value={this.state.ordering_first_name} onChange={this.handleInputChangeFor('ordering_first_name')}/>
                </Col>
                <Col>
                 <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Middle Name" type="text" name="ordering_middle_name" value={this.state.ordering_middle_name} onChange={this.handleInputChangeFor('ordering_middle_name')}/>
                </Col>
                <Col>
                 <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" type="text" name="ordering_last_name" value={this.state.ordering_last_name} onChange={this.handleInputChangeFor('ordering_last_name')}/>
                </Col>
            </Row>
             <Row>
                <Col>
                <Form.Label>Resulting Provider </Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" type="text" name="resulting_first_name" value={this.state.resulting_first_name} onChange={this.handleInputChangeFor('resulting_first_name')}/>
                </Col>
                <Col>
                 <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Middle Name" type="text" name="resulting_middle_name" value={this.state.resulting_middle_name} onChange={this.handleInputChangeFor('resulting_middle_name')}/>
                </Col>
                <Col>
                 <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" type="text" name="resulting_last_name" value={this.state.resulting_last_name} onChange={this.handleInputChangeFor('resulting_last_name')}/>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label>PCV (%)</Form.Label>
                <Form.Control placeholder="PCV" type="number" name="pcv" value={this.state.pcv} onChange={this.handleInputChangeFor('pcv')}/>
                 </Col>
                 <Col>
                 <Form.Label>Hb (g/L)</Form.Label>
                <Form.Control placeholder="Hb" type="number" name="hb" value={this.state.hb} onChange={this.handleInputChangeFor('hb')}/>
                 </Col>
                  <Col>
                 <Form.Label>WCC (10⁹/L)</Form.Label>
                <Form.Control placeholder="WCC" type="number" name="wcc" value={this.state.wcc} onChange={this.handleInputChangeFor('wcc')}/>
                 </Col>
                 <Col>
                 <Form.Label> RBC(10¹²/L) </Form.Label>
                <Form.Control placeholder="RBC" type="number" name="rbc" value={this.state.rbc} onChange={this.handleInputChangeFor('rbc')}/>
                 </Col>
                 <Col>
                 <Form.Label> Platelets (10⁹/L) </Form.Label>
                <Form.Control placeholder="Platelets" type="number" name="platelets" value={this.state.platelets} onChange={this.handleInputChangeFor('platelets')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> pi (%) </Form.Label>
                <Form.Control placeholder="pi" type="number" name="pi" value={this.state.pi} onChange={this.handleInputChangeFor('pi')}/>
                 </Col>
                 <Col>
                 <Form.Label> Clotting Time (s) </Form.Label>
                <Form.Control placeholder="Clotting Time" type="number" name="clotting_time" value={this.state.clotting_time} onChange={this.handleInputChangeFor('clotting_time')}/>
                 </Col>
                 <Col>
                 <Form.Label> Sgot (U/L) </Form.Label>
                <Form.Control placeholder="Sgot" type="number" name="sgot" value={this.state.sgot} onChange={this.handleInputChangeFor('sgot')}/>
                 </Col>
                 <Col>
                 <Form.Label> Spgt (U/L) </Form.Label>
                <Form.Control placeholder="Spgt" type="number" name="spgt" value={this.state.spgt} onChange={this.handleInputChangeFor('spgt')}/>
                 </Col>
             <Col>
                 <Form.Label> LDH (U/L) </Form.Label>
                <Form.Control placeholder="LDH" type="number" name="ldh" value={this.state.ldh} onChange={this.handleInputChangeFor('ldh')}/>
                 </Col>
            </Row>
            <Row>
                <Col>
                 <Form.Label> CPK (U/L) </Form.Label>
                <Form.Control placeholder="CPK" type="number" name="cpk" value={this.state.cpk} onChange={this.handleInputChangeFor('cpk')}/>
                 </Col>
                 <Col>
                 <Form.Label> Urea (mmol/L) </Form.Label>
                <Form.Control placeholder="Urea" type="number" name="urea" value={this.state.urea} onChange={this.handleInputChangeFor('urea')}/>
                 </Col>
                 <Col>
                 <Form.Label> Na (mmol/L) </Form.Label>
                <Form.Control placeholder="Na" type="number" name="na" value={this.state.na} onChange={this.handleInputChangeFor('na')}/>
                 </Col>
                 <Col>
                 <Form.Label> K (mmol/L) </Form.Label>
                <Form.Control placeholder="K" type="number" name="k" value={this.state.k} onChange={this.handleInputChangeFor('k')}/>
                 </Col>
                  <Col>
                 <Form.Label> Cl (mmol/L) </Form.Label>
                <Form.Control placeholder="Cl" type="number" name="cl" value={this.state.cl} onChange={this.handleInputChangeFor('cl')}/>
                 </Col>
                   <Col>
                 <Form.Label> Creatinine (umol/L) </Form.Label>
                <Form.Control placeholder="Creatinine" type="number" name="creat" value={this.state.creat} onChange={this.handleInputChangeFor('creat')}/>
                 </Col>
            </Row>
            
            <Row>
                 <Col>
                 <Form.Label> Total Protein (g/L) </Form.Label>
                <Form.Control placeholder="Total Protein" type="number" name="protein_total" value={this.state.protein_total} onChange={this.handleInputChangeFor('protein_total')}/>
                 </Col>
                 <Col>
                 <Form.Label> Albumin (g/L) </Form.Label>
                <Form.Control placeholder="Albumin" type="number" name="albumin" value={this.state.albumin} onChange={this.handleInputChangeFor('albumin')}/>
                 </Col>
                <Col>
                 <Form.Label> Globulin (g/L) </Form.Label>
                <Form.Control placeholder="Globulin" type="number" name="globulin" value={this.state.globulin} onChange={this.handleInputChangeFor('globulin')}/>
                 </Col>
                  <Col>
                 <Form.Label> EET Osmol (mOsmol/Kg) </Form.Label>
                <Form.Control placeholder="EET Osmol" type="number" name="eet_osmol" value={this.state.eet_osmol} onChange={this.handleInputChangeFor('eet_osmol')}/>
                 </Col>
                 <Col>
                 <Form.Label> Urine Osmol (mOsmol/Kg) </Form.Label>
                <Form.Control placeholder="Urine Osmol" type="number" name="urine_osmol" value={this.state.urine_osmol} onChange={this.handleInputChangeFor('urine_osmol')}/>
                 </Col>
            </Row>

             <Row>
                  <Col>
                 <Form.Label> Ca (mmol/L) </Form.Label>
                <Form.Control placeholder="Ca" type="number" name="ca" value={this.state.ca} onChange={this.handleInputChangeFor('ca')}/>
                 </Col>
                  <Col>
                 <Form.Label> Mg (mmol/L) </Form.Label>
                <Form.Control placeholder="Mg" type="number" name="mg" value={this.state.mg} onChange={this.handleInputChangeFor('mg')}/>
                 </Col>
                 <Col>
                 <Form.Label> PO₄ (mmol/L) </Form.Label>
                <Form.Control placeholder="PO₄" type="number" name="po4" value={this.state.po4} onChange={this.handleInputChangeFor('po4')}/>
                 </Col>
                 <Col>
                 <Form.Label> Abgs </Form.Label>
                <Form.Control placeholder="Abgs" type="number" name="abgs" value={this.state.abgs} onChange={this.handleInputChangeFor('abgs')}/>
                 </Col>
                 <Col>
                 <Form.Label> Abe </Form.Label>
                <Form.Control placeholder="Abe" type="number" name="abe" value={this.state.abe} onChange={this.handleInputChangeFor('abe')}/>
                 </Col>
                  <Col>
                 <Form.Label> Osat(%) </Form.Label>
                <Form.Control placeholder="Osat" type="number" name="osat" value={this.state.osat} onChange={this.handleInputChangeFor('osat')}/>
                 </Col>

             </Row>
              
        
<Button onClick={(event)=>this.icuLabResults(event)} variant="success" type="submit" style={{ width: '40%', margin: '4% 30% 2%' }}>Save Lab Results</Button>
         
          </div>
            );
        }
}


export default connect()(LabEntering);