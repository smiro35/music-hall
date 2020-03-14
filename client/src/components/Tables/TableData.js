import React from "react";
import { Table } from 'reactstrap';


export function TableData({ children }) {
  return (

    <Table dark>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Date</th>
          <th>Total Sold</th>
          <th>Total Money</th>
          <th>Total Attendance</th>
          <th>Average Ticket Price</th>
          <th>Percent Sold</th>
          <th>Projected Success</th>
          <th>Actual Success</th>
          <th>Predictability</th>
          <th>Genre</th>
          <th>Marketing Budget</th>
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










































































































