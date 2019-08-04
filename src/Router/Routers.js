import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationPage from "../Containers/RegistrationPage";
import LoginPage from "../Containers/LoginPage";
import HomePage from "../Containers/HomePage"

export default class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route  path="/" exact component={LoginPage} />
           <Route path="/registration" component={RegistrationPage} />
           <Route  path="/home" exact component={HomePage} />
          </Switch>
        </Router>
      )
    }
}