import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import API from '../../utils/API'
// import './SearchBar.css'



function SearchBar(props) {
  function addArtist(){
  }
    return (
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-md-2" onChange={props.handleInputChange} name={props.name}/>
      <Button 
      variant="outline-success"
      onClick={props.handleSubmit} 
      >Search</Button>
      {/* <Button variant="primary"
      variant="outline-primary"
      onClick={addArtist}
      >Add Artist
      </Button> */}
    </Form>

    



    );



}

export default SearchBar;


//     <SearchBar
//     dataSource={state.dataSource}
//     onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
//     onRequestSearch={() => console.log('onRequestSearch')}
//     style={{
//       margin: '0 auto',
//       maxWidth: 800
//     }}
//   />


// <SearchBar
//       onChange={() => console.log('onChange')}
//       onRequestSearch={() => console.log('onRequestSearch')}
//       style={{
//         margin: '0 auto',
//         maxWidth: 800
//       }}
//     />