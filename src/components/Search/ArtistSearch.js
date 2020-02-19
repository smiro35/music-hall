import React from 'react';
import SearchBar from './SearchBar';
import ArtistList from './ArtistList';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const Search = (props) => {
//   return (
//     <Form inline>
//       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <Label for="Artisit" className="mr-sm-2"></Label>
//         <Input type="name" name="Artisit" id="artisitName" placeholder="Enter name of performer" />
//       </FormGroup>
//        <Button>Submit</Button>
//     </Form>
//   );
// }

// export default Search;

export default class ArtistSearch extends React.Component{

    state ={

        searched :'',
        artists :[]
    }
    
    handleInput = (event)=>{

        const{name,value} = event.target.value

        this.setState(

            {
                [name]:value

            }

        )

    

    }


    handleSubmit = (event)=>{
        event.preventDefault();
        // now we make an axios call to the api, or we can fetch
        // const key ="your key here"
        
        // const url = `the urls?${this.state.searched}&&api_key${key}`
        // /axios.get(url)

        // ***The goal for the .then is to get info search and update the state
        // .then((response)=>{
        //     console.log(response);
        //   this.setState(

        //     {
        //         artists: whatever the data you want from the response console logged.
        //     }

        // )
            


        // });
        // .catch((err)=>{
        //     console.error(err);
            
        // })
    }


render(){

 return (


    <div>

         
<ArtistList
        artists = {this.state.artists}
        />

        <SearchBar
         searched = {this.state.searched}

         handleInput={this.handleInput}

         handleSubmit={this.handleSubmit}
        
        />
        


    </div>

 )



}



}