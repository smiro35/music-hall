import React from 'react';
import { Form,FormControl } from 'react-bootstrap';






function ArtistSearch({handleSearchChange}) {

    return (

    
        <Form inline  onChange={e => handleSearchChange(e)}>
      <FormControl type="text" placeholder="Search" className="mr-md-2" />
     
    </Form>




    );



}

export default ArtistSearch;