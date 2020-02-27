import React from 'react';
import SearchBar from '../Search/SearchBar';
import Artist from './Artist';
import axios from 'axios';
export default class Spotify extends React.Component {
    state = {
        search: '',
        artist: false,
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const token = 'BQBCE1-fUqVPfHgGMCMZv7RJbnomGCbQPG8B9tddyGv1bDngxvhxj519ymRobMtskS-iv-vss6y-TZprt0ShSFUKggqj4LHtu6TzM0O36CNkRx70PY-3te1knb2KUBaJ60rtjHSLMOT8Z-VwizqJGjYCJcrhvJQbVjVBTU99wmns5CwZSVAKIq3FHNAT1i6lDWDsMVLzQ5beizvkVEqK_QcS9cAicV0ALIp8Bm5s720p_uqf2XvSo0LRunkX52QEBoFEKVlb7NIbvYY'
        const YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=' + process.env.REACT_APP_YOUTUBE_API_KEY
        console.log(YouTubeURL)
        fetch(YouTubeURL)
        .then(result => result.json())
        .then(data =>{
            console.log(data);
        })
        // const url = `https://api.spotify.com/v1/artists/${this.state.search}`;
        const url = `https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                this.setState({ artist: response.data.artists.items[0] },
                    () => console.log(this.state.artist))
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit} />
                <Artist
                    artist={this.state.artist} />
            </div>
        )
    }
}






















