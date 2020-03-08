import React, { useState } from 'react';
import { AuthContext } from '../../AuthContext'
import { Row, Col } from 'reactstrap';
import YouTube, { artist } from '../../components/Api/YouTube';
import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Api/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import Spotify from '../../components/Api/Spotify';
import Artist from '../../components/Api/Artist';
import { Card, CardDeck, Button } from 'react-bootstrap';
import {
      GridComponent, 
      ColumnDirective, 
      ColumnsDirective,
      Page,
      PageSettingsModel,
      Inject,
      Filter,
      Group
    } from '@syncfusion/ej2-react-grids';
    
 import './Table.css';


function Dashboard(props) {
    const [state, setState] = useState({
        search: "",
        value:"",
        artist: false,
        channel_id: false,
    });

    const [data, setData] = useState([]);

    let oldData = {};

    // const [subscriberCount, setSubscriberCount] = useState();
    // const [viewCount, setViewCount] = useState();

    // let count = "";

 






    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log("this value", value)
        console.log("stated", state);
        
        setState(
            {  ...state,
                [name]:value
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        let url = `http://localhost:3001/api/dashboard/${state.search}`
        console.log("State here:", state.search);
        
        console.log(url);

       

        
        
       
        axios.get(url)
             .then(response => {
            //   const newData = data.data
                // console.log("this is rout",newData.push(data.data));
                const newData= response.data.bandsintown.obj.followers[19];
                console.log("this is newData",newData);
                
                setData([
                    ...data,
                    newData
                ])
                console.log("new state", state);
                

                
            })
           
            


    };

    return(
      <>

        <MyNavbar>
            <SearchBar 
            name="search"
            value={state.value}
            search={state.search}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}/> 
       
         </MyNavbar>
        




        



        <GridComponent style={{margin:'5%'}} dataSource={data}
        allowPaging={true}
        th class="rotate"
        height={268}
        // pageSettings={pageOptions}
        pageSize={true}
        allowFiltering={true}
        allowGroupin={true}
    
    >
      <ColumnsDirective>
         <ColumnDirective field='value' headerText='ID' textAlign='Center' width='100' />
         <ColumnDirective field='timestp' headerText='Date' textAlign='Center'  width='100' />
         <ColumnDirective field='performance' headerText='Rating' textAlign='Center' format='c2' width='100' />
         </ColumnsDirective >
      <Inject services ={[Page,Filter, Group]}/>

    
    </GridComponent>


    <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/table')
            }}>Table</Button>



            {/* <Row>
                <Col>

                </Col>
                <Col></Col>
                <Col>Spotify</Col>
                <Col>Itunes</Col>

            </Row> */}





       
      </>
    );
}
export default Dashboard;











// import React from "react";
// import {
//   GridComponent, 
//   ColumnDirective, 
//   ColumnsDirective,
//   Page,
//   PageSettingsModel,
//   Inject,
//   Filter,
//   Group
// } from '@syncfusion/ej2-react-grids';
// import data from './dataSource.json';
// import './Table.css';

// // css code url("https://cdn.syncfusion.com/ej2/material.css")

// // the Json object keys are rendered as the header, and the values as rows. 
// export default class MyGrid extends React.Component {

//   pageOptions:PageSettingsModel={

//     pageSize:8, pageSizes:true
//   };
  
  
//   render(){
   
//     return<GridComponent dataSource={data}
//         allowPaging={true}
//         height={268}
//         pageSettings={this.pageOptions}
//         pageSize={true}
//         allowFiltering={true}
//         allowGroupin={true}
    
//     >
//       <ColumnsDirective>
//          <ColumnDirective field='ID' headerText='ID' textAlign='Right' width='100' />
//          <ColumnDirective field='Customer' headerText='Customer' width='150' />
//          <ColumnDirective field='Performance' headerText='Performance' />
//          <ColumnDirective field='Date' headerText='Date' textAlign='Right' format='c2' width='100' />
        
        
//       </ColumnsDirective >
//       <Inject services ={[Page,Filter, Group]}/>

    
//     </GridComponent>
   
//   }


// }


































































// function Dashboard () {



//     return (
//         <>

//         <MyNavbar>   
//             <SearchBar/>
//         </MyNavbar>


//         <Simplecontainer>





//             <Api/>



//                 <Row>
//                     <Col>

//                     </Col>
//                     <Col></Col>
//                     <Col>Spotify</Col>
//                     <Col>Itunes</Col>

//                 </Row>





//         </Simplecontainer>
//         </>
//     );

// }
