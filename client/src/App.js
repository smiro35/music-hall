import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import MyData from "./pages/Data";
import Signup from "./components/SingupForm";
import{AuthProvider,AuthContext} from "./AuthContext"
import TablePage from "./pages/TablePage/TablePage.js";
import Axios from "axios";




function App (){
  
  const{isAuth, setIsAuth}= useContext(AuthContext);
  console.log("App auth: ", isAuth);



  const PrivateRoute = ({component: Component,  ...rest}) => (

    <Route
     {...rest}
     render={props =>
       isAuth ? <Component{...props} /> :  <Redirect to ="/home" />
    }
    
    
    
    />


  )
  
  return (
  <Router>
    
      <Switch>
        <Route exact path="/" 
        render={props => <Home {...props} />}
        />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/MyData" component={MyData} />
        <Route exact path="/Dashboard/:someparam" component={Dashboard} />
        <Route exact path="/Table" component={TablePage} />
        {/* <PrivateRoute path="/members" component={Dashboard} /> */}
        <Route component={NoMatch} />
      </Switch>
    
  </Router>
);
  }

export default () => {

  return(

    <AuthProvider>

    <App/>
    </AuthProvider>

  )
}
