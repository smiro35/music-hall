import React from 'react';

function SearchBar(props){
    
        return(
            <div>
                <form>
                   <input
                name= "search"
                onChange={props.handleInputChange}
                value={props.search}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                  }}
                
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


//     <SearchBar
//     dataSource={state.dataSource}
//     onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
//     onRequestSearch={() => console.log('onRequestSearch')}
//     style={{
//       margin: '0 auto',
//       maxWidth: 800
//     }}
//   />