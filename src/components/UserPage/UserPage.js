import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";


class UserPage extends Component {

          state = {

          }

          render () {
                return (

                  <div className='navbuttonscontainer'>
                  {(this.props.user.clearance_level === 1)&&
                    <>
                    <Link to="/AddProvider"><Button  variant="outline-success">Add Provider</Button></Link> {' '} 
                    <Link to='/searchprovider'><Button  variant="outline-info">Search For A Provider</Button></Link> {' '}
                    </>}
              
                <Link to='/addpatient'><Button  variant="outline-primary">Add A Patient</Button></Link> {' '}
                <Link to='/searchpatient'> <Button variant="outline-secondary">Search For A Patient</Button></Link>
        </div>

                );
          }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
