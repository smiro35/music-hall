import React from 'react';
import { Form,FormControl } from 'react-bootstrap';






function ArtistSearch({handleSearchChange}) {

    return (

    
        <Form inline  onChange={e => handleSearchChange(e)}>
      <FormControl style={{borderRadius:"30rem", width:"50rem" }} type="text" placeholder="Search" className="mr-md-2" />
     
    </Form>




    );



}

export default ArtistSearch;