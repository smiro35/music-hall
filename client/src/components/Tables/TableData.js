import React from "react";
import {Table} from 'reactstrap';


export function TableData({ children }) {
    return (
      
       <Table dark>
      <thead>
         <tr>
           <th></th>
           <th>I.D</th>
           <th>Performance</th>
           <th>Date</th>
           <th>Total Sold</th>
           <th>Total Money</th>
           <th>Total Attendance</th>
           <th>Average Ticket Price</th>
           <th>Percent Sold</th>
           <th>Predicted Success</th>
           <th>Actual Success</th>
           <th>Predictability</th>
           <th>Marketing Budget</th>
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










































































































