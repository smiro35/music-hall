import React from 'react';
// import ArtistList from './ArtistList';
// import ArtistSearch from './ArtistSearch'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchBar extends React.Component {


   render() {

      return (





         <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">         <Label for="Artisit" className="mr-sm-2"></Label>
               <Input
                  name="search"
                  onChange={this.props.handleInputChange}
                  value={this.props.search}
                  id="artisitName"
                  placeholder="Enter name of performer"


               />
            </FormGroup>
            <Button
               onClick={this.props.handleSubmit}

            >Submit</Button>
         </Form>





      )



   }



}