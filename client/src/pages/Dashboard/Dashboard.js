import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext'
import { Row, Col } from 'reactstrap';
import YouTube, { artist } from '../../components/Api/YouTube';
import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Api/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import Spotify
            <GridComponent style={{ margin: '5%' }} dataSource={data}
                allowPaging={true}
                height={268}
                // pageSettings={pageOptions}
                pageSize={true}
                allowFiltering={true}
                allowGroupin={true}

            >
                <ColumnsDirective>
                    <ColumnDirective field='value' headerText='ID' textAlign='Center' width='100' />
                    <ColumnDirective field='timestp' headerText='Date' textAlign='Center' width='100' />
                    <ColumnDirective field='performance' headerText='Rating' textAlign='Center' format='c2' width='100' />
                </ColumnsDirective >
                <Inject services={[Page, Filter, Group]} />


            </GridComponent>

            <Button className='m-1' onClick={e => {
                console.log(props.history)
                e.preventDefault();
                props.history.push('/table')
            }}>Table</Button>

            {/* <Button className='m-1' onClick={e => {
                console.log(props.history)
                e.preventDefault();
                props.history.push('/MyData')
            }}>Data Entry</Button> */}






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