import React from 'react';
export default class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <form>
                   <input
                name= "search"
                onChange={this.props.handleInputChange}
                value={this.props.search}
                
                ></input>
                <button
                onClick={this.props.handleSubmit} 
                >artist</button>
 
                </form>
                
            </div>
            );
    
        }
    
    }