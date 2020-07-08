import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import {connect} from 'react-redux';

import DomNav from '../DomNav/DomNav';
import Footer from '../Footer/Footer';
import ProviderLogin from '../ProviderLogin/ProviderLogin';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Vitals from "../Vitals/Vitals";
import DomAboutPage from '../DomAboutPage/DomAboutPage';
import DomUserPage from '../DomUserPage/DomUserPage';
import './DomainApp.css';

class DomainApp extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <DomNav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/sanfordhealth/about"
              component={DomAboutPage}
            />

            <Route exact path="/sanfordhealth" component={ProviderLogin}/>
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={DomUserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
           

             <ProtectedRoute
            exact
            path="/vitals"
            component={Vitals}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(DomainApp);
