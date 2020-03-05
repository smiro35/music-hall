import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import MyData from "./pages/Data";



import TablePage from "./pages/TablePage/TablePage.js";




const App = () => (
  <Router>



    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/MyData" component={MyData} />
      <Route exact path="/Dashboard/:someparam" component={Dashboard} />
      <Route exact path="/Table" component={TablePage} />
      <Route component={NoMatch} />
    </Switch>

  </Router>
);

export default App;
