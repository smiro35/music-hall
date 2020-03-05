import React from "react";
import {Table} from 'reactstrap';


export function TableData({ children }) {
    return (
      
       <Table dark>
      <thead>
         <tr>
           <th>I.D</th>
           <th>Performance</th>
           <th>Date</th>
           <th>Total Sold</th>
           <th>Total Money</th>
           <th>Total Attendance</th>
           <th>Average Ticket Price</th>
           <th>Percent Sold</th>
           <th>Show Success</th>
           <th>Fiscal Year</th>
          <th>Genre</th>
         </tr>
       </thead>
       <tbody>
         {children}
       </tbody>
     </Table> 
      
    );
  }
  
  export function TableItem({ children }) {
    return <tr>{children}</tr>;
  }
  
  export default TableData;
















































































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

























