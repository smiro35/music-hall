import React from 'react';
import{Table} from 'react-bootstrap';
import{handlePostArtist} from '../pages/Dashboard/Dashboard'

function ApiTable(props){

  // function handletwo(){
  //   props.handlePostArtist();
  //   props.tableDisplay();
      
    return(
    
        <Table striped bordered hover variant="dark" onClick={props.handlePostArtist}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Bands in Town</th>
            <th>Instagram</th>
            <th>Spotify</th>
            <th>Youtube</th>
            <th>Deezer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Date here</td>
            <td>Followers</td>
            <td>Followers</td>
            <td>Fans</td>
            <td>Subscribers</td>
            <td>Followers</td>
          </tr>
          
         
        </tbody>
      </Table>




    )
//   }

}

export default ApiTable;