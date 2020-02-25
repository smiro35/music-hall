import React from "react";
import { Table } from "reactstrap";

// function TableData(props) {
//   console.log(props);

//     return(
//         <Table dark>
//         <thead>
//           <tr>
//             <th>Performance</th>
//             <th>Date</th>
//             <th>Total Sold</th>
//             <th>Spotify Reach</th>
//             <th>Instagram Following</th>
//             <th>Total Money</th>
//             <th>Total Attendance</th>
//             <th>Average Ticket Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//           </tr>
//           <tr>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </Table>
//     )
// };

export function TableData({ children }) {
  return (
    <Table dark>
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </Table>
  );
}

export function TableItem({ children }) {
  return <td>{children}</td>;
}

export default TableData;