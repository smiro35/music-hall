import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import API from '../../utils/API'




function SearchBar(props) {
  
    return (
      <Form inline >
      <FormControl style={{borderRadius:"30rem", width:"20rem" }} type="text" placeholder="Search" className="mr-md-2" onChange={props.handleInputChange} name={props.name}/>
      <Button 
      
      onClick={props.handleSubmit} 
      style={{borderRadius:"30rem", backgroundColor:"#9063cd"}}
      >Search</Button>
     
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