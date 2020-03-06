import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
// import './SearchBar.css'



function SearchBar(props) {

    return (

        // <form>
        //    <input
        // name= "search"
        // onChange={props.handleInputChange}
        // input={props.search}
        // style={{
        //     margin: '0 auto',
        //     maxWidth: 800
        //   }}

        // ></input>
        // <button
        // onClick={props.handleSubmit} 
        // className="btn btn-primary"
        // >artist</button>

        // </form>


        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-md-2" onChange={props.handleInputChange} name={props.name}/>
      <Button 
      variant="outline-success"
      onClick={props.handleSubmit} 
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