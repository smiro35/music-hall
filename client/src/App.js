import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import MyData from "./pages/Data";
import Login from "./components/LoginForm";
import Signup from "./components/SingupForm";

import { AuthProvider } from './AuthContext'


import TablePage from "./pages/TablePage/TablePage.js";




const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/MyData" component={MyData} />
        <Route exact path="/Dashboard/:someparam" component={Dashboard} />
        <Route exact path="/Table" component={TablePage} />
        <Route component={NoMatch} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
