import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import AddProvider from '../AddProvider/AddProvider';
import AddPatient from '../AddPatient/AddPatient';
import SearchPatient from '../SearchPatient/SearchPatient';
import SearchProvider from '../SearchProvider/SearchProvider';
import PatientDashboard from '../PatientDashboard/PatientDashboard';
import IcuChart from '../PatientCharts/ICU/ICUForm';
import './App.css';



class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
           { (this.props.user.clearance_level === 1)? <ProtectedRoute
              exact
              path="/AddProvider"
              component={AddProvider}
            />: ''}

            <ProtectedRoute
             exact path="/patientdashboard" 
             component={PatientDashboard}/>

            <ProtectedRoute exact path ='/searchprovider' component={SearchProvider}/>
            <ProtectedRoute exact path ='/searchpatient' component={SearchPatient}/>
            <ProtectedRoute exact path='/addpatient' component={AddPatient}/>
            <ProtectedRoute exact path='/icuchart' component={IcuChart}/>
            
            {/* If none of the other routes matched, we will show a 404. */}
            
            <Route render={() => <h1>404</h1>} />
          </Switch>
         
          <Footer />
          
        </div>
      </Router>
  )}
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
}
export default connect(mapStateToProps)(App);
