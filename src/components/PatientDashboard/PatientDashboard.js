import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";



class PatientDashboard extends Component {

    render () {
        return(
            <div>
                <div className='navbuttonscontainer'>
                <Link to='/addpatient'><Button  variant="outline-primary">Add A Patient</Button></Link> {' '}
                <Link to='/searchpatient'> <Button variant="outline-secondary">Search For A Patient</Button></Link>
              </div>

                <h1>Patient Dashboard for {this.props.patient.first_name}</h1>

                <Link to='/icuchart'>ICU</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   
    user: state.user,
    patient: state.dashPatient.dashboardUser,
});

export default connect(mapStateToProps) (PatientDashboard);