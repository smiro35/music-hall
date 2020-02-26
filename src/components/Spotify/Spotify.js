import React from 'react';
import SearchBar from './SearchBar';
import Artist from './Artist';
import axios from 'axios';

export default class Spotify extends React.Component{
  
state = {
        search: '',
        artist: {} ,
}
        
    
   handleInputChange = (event)=> {
    const {name,value} = event.target;
        this.setState( 
            {
                [name]:value
            }
        )
    }
                 
            
        
    
handleSubmit = (event) => {
        event.preventDefault();
        const token = 'BQBd9vdugAU8HEoA7uA5Hg6i1_azSGRwFHCeHUMTTg7GXqTSLz18g6dStmt0x2DUF1tUJ2tGH2HIGh_naz6OSh7MIFIEBRNRAyONJJkEE4vfAD0BmWgd8EqARyfz0goMhsrwquRSe_4stQM8vaxVBH2r';
        
        // const url = `https://api.spotify.com/v1/artists/${this.state.search}`;
        const url = `https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`
        axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
              .then((response)=>{ 
                  console.log(response)
                this.setState(
                    {
                        artist: response.data
                    }

                )
            })
                .catch((err) => {
                    console.error(err);
                })

}
        
        

    render() { 
        return(
            <div>
                <SearchBar
                search={this.state.search}
                handleInputChange= {this.handleInputChange}
                handleSubmit={this.handleSubmit}/>
            <Artist
                artist={this.state.artist} />
                </div>
            )

    }

}

