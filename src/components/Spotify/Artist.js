import React from 'react';

export default class Artist extends React.Component{

    render(){
        return(
            <div>
                {
                    this.props.artist.followers && 
                    <div>
                           Followers: {this.props.artist.followers.total}
                        </div>
                }
            </div>
            
            );
    
        }
    
    }