import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';


const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <img className="gilead" src="images/gilead.png" alt="gilead balm"/>
      <h1 className="nav-title">GileadMD</h1>
    </Link>
    <div className="nav-right">
     
     
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
        <LogOutButton className="nav-link"/>
         {(props.user.clearance_level === 1)?<Link className="nav-link" to="/AddProvider">
            Add Provider
          </Link>: ''} 
          
        </>
      )}

       {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
       <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
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
  providerloginMode: state.providerloginMode,
});

export default connect(mapStateToProps)(Nav);
