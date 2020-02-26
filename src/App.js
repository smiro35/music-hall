import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";

// import ArtistSearch from './components/Search/ArtistSearch';
//  import YouTubeCounter from './components/Youtube/YouTubeCounter';
// import Cards from './components/Cards/Cards.js';
// import Search from './components/Search/Search.js';
import Sidenav from './components/Sidenav/Sidenav.js'


// import Cards from './components/Cards'

const App = () => (
  <Router>
    
      
      
    
      

      
      
     

    
      

      

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Dashboard/:someparam" component={Dashboard}/>
        <Route component={NoMatch} />
      </Switch>
   
  </Router>
);

export default App;