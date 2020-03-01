import React from 'react';

function SearchBar(props){
    
        return(
            <div>
                <form>
                   <input
                name= "search"
                onChange={props.handleInputChange}
                value={props.search}
                
                ></input>
                <button
                onClick={props.handleSubmit} 
                className="btn btn-primary"
                >artist</button>
 
                </form>
                
            </div>
            );
    
    
    
    }

    export default SearchBar;