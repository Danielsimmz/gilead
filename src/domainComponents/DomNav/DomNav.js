import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButtonProvider from '../LogOutButtonProvider/LogOutButtonProvider';
import './DomNav.css';

const DomNav = (props) => (
  <div className="nav">
    <Link to="/sanfordhealth">
      <img className="gilead" src="images/gilead.png" alt="gilead balm"/>
      <h1 className="nav-title">GileadMD</h1>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/sanfordhealth">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {(props.user.clearance_level === 2) ? 'Home' : 'Login'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.clearance_level === 2 && (
        <>
          <Link className="nav-link" to="/vitals">
            Vitals
          </Link>
          <LogOutButtonProvider className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/sanfordhealth/about">
        About
      </Link>
      

      
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(DomNav);
