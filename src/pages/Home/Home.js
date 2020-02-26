import React from 'react';
import { form, span } from 'react-bootstrap/Form';
import './css/main.css'
import './css/util.css'
import './images/img-01.png';



function home() {

  return (
    <>

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>
          </div>
        </div>

        <form className="login100-form validate-form">
          <span className="login100-form-title">
            Member Login
					</span>

          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input className="input100" type="text" name="email" placeholder="Email" />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="pass" placeholder="Password" />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
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
            <a className="txt2" href="#">
              Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>


    </>




  );





}

export default home;
















































         // import React from 'react';
// import {Jumbotron, Button} from 'reactstrap';
          // import MediaControlCard from '../../components/myHomeCard.js';
          // import CssBaseline from '@material-ui/core/CssBaseline';
          // import Typography from '@material-ui/core/Typography';
          // import Container from '@material-ui/core/Container';

// const Home = (props) => {
//   return (

//     <React.Fragment >
//       <CssBaseline />
//       <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', margin:5,}}>
//         {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}


//         <MediaControlCard />

//         <p className="lead"> 
//   <Button style={{ backgroundColor: "#9063cd" }}>Dashboard</Button>
//         </p>



//       </Container>





//     </React.Fragment >




//     // <div style={{paddingTop:"10px"}}>
//     //   <Jumbotron style={{backgroundColor:"#462560", height:"50rem", paddingTop:"10rem"}}> 

//     // </Jumbotron>

//   );
// };

// export default Home;


// {/* <Jumbotron style={{backgroundColor:"#9063cd", height:"50rem", paddingTop:"10rem"}}> */ }

// // #6f42c1\


// {/* <p className="lead">We have great concerts.</p>
//         {/* <hr className="my-2" /> */}
// // <p>Ask your neighbours about us. .</p>









// // import React from 'react';


// // export default function SimpleContainer() {
// //   return (
// //     <React.Fragment>
// //       <CssBaseline />
// //       <Container maxWidth="sm">
// //         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
// //       </Container>
// //     </React.Fragment>
// //   );
// // }
