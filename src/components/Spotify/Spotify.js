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
        const token = "BQAvTaCepqieh3zPAp-4KAznXU1kTe2yZJ8ecMLNeHus1y2NOhZAec1ZSedm4gJIh9JmcQfxbGkfQZeY0wyNZ1haZ_tHcSYWrAj1NL5s2m7T3p1bMW6StMOh0YEk9I-7rlfV4Y0S13uKFRLUp0Spw3nzeXtPfw1Lp1_nr4I0HSmC_xvaITTb-7vKt4Mt35jtge6NflERs1V8MrU-PZtbXQkZdZ1mOTHUAa0_W-dI8A8UYPig2L2Hco0M-s_5_6nFdvx__Pjwe588cyyW__JqoydYCsVtVg"
        // 'BQBCE1-fUqVPfHgGMCMZv7RJbnomGCbQPG8B9tddyGv1bDngxvhxj519ymRobMtskS-iv-vss6y-TZprt0ShSFUKggqj4LHtu6TzM0O36CNkRx70PY-3te1knb2KUBaJ60rtjHSLMOT8Z-VwizqJGjYCJcrhvJQbVjVBTU99wmns5CwZSVAKIq3FHNAT1i6lDWDsMVLzQ5beizvkVEqK_QcS9cAicV0ALIp8Bm5s720p_uqf2XvSo0LRunkX52QEBoFEKVlb7NIbvYY';
        
        
        // const YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=' + process.env.REACT_APP_YOUTUBE_API_KEY
        // console.log(YouTubeURL)
        // fetch(YouTubeURL)
        // .then(result => result.json())
        // .then(data =>{
        //     console.log(data);
        // })
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






















