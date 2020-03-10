import React, { useContext } from "react";
import { AuthProvider, AuthContext } from './AuthContext'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import MyData from "./pages/Data";
import Signup from "./components/SingupForm";
import TablePage from "./pages/TablePage/TablePage.js";
import Members from './pages/Home/Members'

// import { AuthProvider } from './AuthContext'

function App(){
  
    // Here we subscribe the authentication context using the useContext hook
    // we use isAuth to determine whether the user is logged in, and setIsAuth
    // to change their status on logout.
    const { isAuth, setIsAuth } = useContext(AuthContext);
    console.log("App auth: ", isAuth)
  
  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // // the props that were not destructured. 
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to='/login' />
        // isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
  return (
    // <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/MyData" component={MyData} />
          {/* <Route exact path="/Dashboard/:someparam" component={Dashboard} /> */}
          <Route exact path="/table" component={TablePage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    // </AuthProvider>
  )
};

export default () => (
  <AuthProvider>
    <App/>
  </AuthProvider>
);
