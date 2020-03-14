import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../AuthContext';
import {Form , Container, Row, Button, Col, span} from 'react-bootstrap'
import Axios from 'axios';
const LoginForm = props => {
    const { setIsAuth, setUser, isAuth } = useContext(AuthContext)
    const emptyCreds = { emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')
    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        const inputCreds = {
            email: formData.emailInput,
            password: formData.passwordInput
        }
        login(inputCreds)
        setFormData(emptyCreds)
    }
    const login = loginCreds => {
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
        <>
            {isAuth && <Redirect to="/dashboard" />}
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="inputPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Text className="text-danger">
                        {credsAreInvalid}
                    </Form.Text>
                </Form.Group>
                <Button className='m-1' variant="primary" type="submit">
                    Submit
            </Button>
                <Button className='m-1' onClick={e => {
                    e.preventDefault();
                    props.history.push('/signup')
                }}>Signup</Button>
                <Button className='m-1' onClick={e => {
                    e.preventDefault();
                    props.history.push('/dashboard')
                }}>Dashboard</Button>
            </Form>
        </>
    )
}
export default LoginForm;





















































































// import React, { useContext, useState } from "react";
// import { Redirect } from 'react-router-dom'
// import { AuthContext } from '../../AuthContext';
// import { Container, Row, Button, Col } from "react-bootstrap";
// import Axios from "axios";
// import { form, span } from 'react-bootstrap/Form';
// import './css/main.css'
// import './css/util.css'
// import Logo from '../../music_hall.jpg';
// import './vendor/animate/animate.css';
// import MyNavbar from "../../components/Navbar/Navbar.js";

// function LoginForm (props){
  
//     const { setIsAuth, setUser, isAuth } = useContext(AuthContext)
//     const emptyCreds = { emailInput: '', passwordInput: '' }
//     const errorMessage = 'invalid credentials'
//     const [formData, setFormData] = useState(emptyCreds)
//     const [credsAreInvalid, setCredsAreInvalid] = useState('')
    
//     function handleInputChange(event){
//         event.preventDefault()
//         const { name, value } = event.target
//         setFormData({ ...formData, [name]: value });
//     }
//     function handleFormSubmit(event) {
//         event.preventDefault()
//         const inputCreds = {
//             email: formData.emailInput,
//             password: formData.passwordInput
//         }
//         login(inputCreds)
//         setFormData(emptyCreds)
//     }
//     function login(loginCreds){
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
    

//           }


//   return (
 
//     <>
//       {isAuth && <Redirect to="/dashboard" />}

      


//       <div className="limiter" onSubmit={handleFormSubmit}>
//         <div className="container-login100">
//           <div className="wrap-login100">
//             <img src="https://www.portsmouthnh.com/wp-content/uploads/2018/08/Music-Hall-Portsmouth-NH-EDITED.1-2018-e1533561736653.jpg" width="50%"
//           height="75%" alt="not working" />
//             <form className="login100-form validate-form" onClick={handleFormSubmit}>
//               <span className="login100-form-title"> <h1>WELCOME!</h1> </span>
//               <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
//                 <input className="input100" type="text" name="email" placeholder="Email" name="username"
//                   value={formData.emailInput} onChange={handleInputChange}
//                 />
//                 <span className="focus-input100"></span>
//                 <span className="symbol-input100">
//                  </span>
//               </div>
//               <div className="wrap-input100 validate-input" data-validate="Password is required">
//                 <input className="input100" type="password" name="pass" placeholder="Password" name="password" 
//                value={formData.passwordInput} onChange={handleInputChange} />
//                 <span className="focus-input100"></span>
//                 <span className="symbol-input100">
//                    </span>
//               </div>
//               <div className="container-login100-form-btn">
//                 <button className="btn btn-success"  className="login100-form-btn-success" className="m-1"
//                   onClick={e => {
//                     e.preventDefault();
//                     props.history.push('/dashboard')
//                 }}>
//                   Login
//                 </button>
//               </div>
//               <div className="text-center p-t-12">
//                 <span className="txt1">
//                   Forgot
//                 </span>
//                 <a className="txt2" href="#">
//                   Username / Password?
//                 </a>
//               </div>
//               <div className="text-center p-t-100">
//                 <a className="txt2" href="#" className="m-1"
//                   onClick={e => {
//                     e.preventDefault();
//                     props.history.push("/signup");
//                   }}>
//                   Create your Account
//                   </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
    
    
//     </>


//   )


// }

// export default LoginForm ;