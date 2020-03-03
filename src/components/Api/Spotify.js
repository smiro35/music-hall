import React from 'react';
import SearchBar from './SearchBar';
import Artist from './Artist';
import axios from 'axios';
import{Card, CardDeck} from 'react-bootstrap';


function Spotify() {
    // state = {
    //     search: '',
    //     artist: false,
    // }
    // handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState(
    //         {
    //             [name]: value
    //         }
    //     )
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const token = "BQCs5t7vr5g5JHPeg06hddFIDGiFZCoR4R59WbigcoZEH6k9Q0WBJr7OvCBjUPzapmmD51ygJ090jx1C4RgrT3k5cVVtkQBOVB7G-rk_uh-aNE9y9kuY_VOMPm65SW2EEQsbdldk2zyiW9KmCi1js2KyoHd4tHwInnrv4geWmsDINBeTPqjMzQeb8S9odidarx19Jdss-xNlTnM-FeXN7AW4nro3H0NJXzDmwy64R6bkN-oymqR0DncqVjweFABzypklLrutFdya_4X_MzNsfIl-ElaBFA";
    //     // "BQAvTaCepqieh3zPAp-4KAznXU1kTe2yZJ8ecMLNeHus1y2NOhZAec1ZSedm4gJIh9JmcQfxbGkfQZeY0wyNZ1haZ_tHcSYWrAj1NL5s2m7T3p1bMW6StMOh0YEk9I-7rlfV4Y0S13uKFRLUp0Spw3nzeXtPfw1Lp1_nr4I0HSmC_xvaITTb-7vKt4Mt35jtge6NflERs1V8MrU-PZtbXQkZdZ1mOTHUAa0_W-dI8A8UYPig2L2Hco0M-s_5_6nFdvx__Pjwe588cyyW__JqoydYCsVtVg"
    //     // 'BQBCE1-fUqVPfHgGMCMZv7RJbnomGCbQPG8B9tddyGv1bDngxvhxj519ymRobMtskS-iv-vss6y-TZprt0ShSFUKggqj4LHtu6TzM0O36CNkRx70PY-3te1knb2KUBaJ60rtjHSLMOT8Z-VwizqJGjYCJcrhvJQbVjVBTU99wmns5CwZSVAKIq3FHNAT1i6lDWDsMVLzQ5beizvkVEqK_QcS9cAicV0ALIp8Bm5s720p_uqf2XvSo0LRunkX52QEBoFEKVlb7NIbvYY';
        
        
    //     // const YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=' + process.env.REACT_APP_YOUTUBE_API_KEY
    //     // console.log(YouTubeURL)
    //     // fetch(YouTubeURL)
    //     // .then(result => result.json())
    //     // .then(data =>{
    //     //     console.log(data);
    //     // })
    //     // const url = `https://api.spotify.com/v1/artists/${this.state.search}`;
    //     const url = `https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`
    //     axios.get(url, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then((response) => {
    //             this.setState({ artist: response.data.artists.items[0] },
    //                 () => console.log(this.state.artist))
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    // }
    
        return (
            <Card bg="success" text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB7J2E8f3nAhWBiOAKHdCdBZMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fabout%2Fbrand-resources%2F&psig=AOvVaw0vV4RgRkfRLSO_5ipqkcNr&ust=1583310394819661" />
        <Card.Body>
          <Card.Title>Spotify</Card.Title>
          <Card.Text>
           <h2>Subscription:</h2> 

           <h2>Views:</h2> 
           </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
        )
   
}

export default Spotify;






















