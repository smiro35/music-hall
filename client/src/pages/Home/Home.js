import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../AuthContext';
import { Container, Row, Button, Col } from "react-bootstrap";
import Axios from "axios";
import { form, span } from 'react-bootstrap/Form';
import './css/main.css'
import './css/util.css'
import pic from './images/img-01.png';
import './vendor/animate/animate.css';
import MyNavbar from "../../components/Navbar/Navbar.js";

function Home(props) {

  const { setIsAuth, setUser, isAuth } = useContext(AuthContext)
  const emptyCreds = { emailInput: '', passwordInput: '' }
  const errorMessage = 'invalid credentials'
  const [formData, setFormData] = useState(emptyCreds)
  const [credsAreInvalid, setCredsAreInvalid] = useState('')

  function handleInputChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault()
    const inputCreds = {
      email: formData.emailInput,
      password: formData.passwordInput
    }
    login(inputCreds)
    setFormData(emptyCreds)
  }
  function login(loginCreds) {
    Axios.post('/api/auth/login', loginCreds)
      .then(response => {
        console.log("login response ", response)
        setUser(response.data)
        setIsAuth(true)
      })
      .catch(err => {
        setCredsAreInvalid(errorMessage)
        console.log(err)
      })


  }


  return (
    //  isAuth ? <Redirect to = '/' />
    <>
      {isAuth && <Redirect to="/dashboard" />}




      <div className="limiter" >
        <div className="container-login100">
          <div className="wrap-login100">
            <img src={pic} alt="not working" />
            <form className="login100-form validate-form" >
              <span className="login100-form-title"> Member Login </span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" name="username"
                  value={formData.emailInput} onChange={handleInputChange}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" name="password"
                  value={formData.passwordInput} onChange={handleInputChange} />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push('/dashboard')
                  }}>
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div className="text-center p-t-136">
                <a className="txt2" href="#" className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/signup");
                  }}>
                  Create your Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>


  )


}

export default Home;





// import React, { useState, useContext } from 'react';
// import { Redirect } from 'react-router-dom'
// import { AuthContext } from '../../AuthContext';
// import {Form , Container, Row, Button, Col, span} from 'react-bootstrap'
// import Axios from 'axios';
// const LoginForm = props => {
//     const { setIsAuth, setUser, isAuth } = useContext(AuthContext)
//     const emptyCreds = { emailInput: '', passwordInput: '' }
//     const errorMessage = 'invalid credentials'
//     const [formData, setFormData] = useState(emptyCreds)
//     const [credsAreInvalid, setCredsAreInvalid] = useState('')
//     const handleInputChange = event => {
//         event.preventDefault()
//         const { name, value } = event.target
//         setFormData({ ...formData, [name]: value });
//     }
//     const handleFormSubmit = event => {
//         event.preventDefault()
//         const inputCreds = {
//             email: formData.emailInput,
//             password: formData.passwordInput
//         }
//         login(inputCreds)
//         setFormData(emptyCreds)
//     }
//     const login = loginCreds => {
//         Axios.post('/api/auth/login', loginCreds)
//             .then(response => {
//                 console.log("login response ", response)
//                 setUser(response.data)
//                 setIsAuth(true)
//             })
//             .catch(err => {
//                 setCredsAreInvalid(errorMessage)
//                 console.log(err)
//             })
//     }
//     return (
//         <>
//             {isAuth && <Redirect to="/dashboard" />}
//             <Form onSubmit={handleFormSubmit}>
//                 <Form.Group controlId="emailInput">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Form.Group controlId="inputPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Text className="text-danger">
//                         {credsAreInvalid}
//                     </Form.Text>
//                 </Form.Group>
//                 <Button className='m-1' variant="primary" type="submit">
//                     Submit
//             </Button>
//                 <Button className='m-1' onClick={e => {
//                     e.preventDefault();
//                     props.history.push('/signup')
//                 }}>Signup</Button>
//                 <Button className='m-1' onClick={e => {
//                     e.preventDefault();
//                     props.history.push('/dashboard')
//                 }}>Dashboard</Button>
//             </Form>
//         </>
//     )
// }
// export default LoginForm;