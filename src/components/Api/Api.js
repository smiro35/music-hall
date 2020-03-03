import React,{useState} from 'react';
import Artist from './Artist';
import axios from 'axios';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import config from '../Youtube/config'
import numeral from 'numeral';
import YouTube from './YouTube';
import Spotify from './Spotify';
import SearchBar from './SearchBar';


   function Api(){

    const[state,setState] = useState({
        search:"",
        artist:false,
        channel_id:false
    });

    const [subscriberCount, setSubscriberCount] = useState();
    const [viewCount, setViewCount] = useState();
    
    function handleInputChange (event) {
        const { name, value } = event.target;
        console.log(value)
        setState(
            {
                [name]: value
            }
        )
    }
   
   function handleSubmit (event){
        event.preventDefault();
        console.log("tried to make api call.")

        const api_key = "AIzaSyD8oztcAFZeVYzRDZbTg4DXBLlSUp-WuaI";
        const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${state.artist}&key=${api_key}`;

        

        
           


        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                console.log(data.items[0].id.channelId);
                const Id = data.items[0].id.channelId;
                const newApicall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${state.channel_id}&key=${api_key}`;
                fetch(newApicall)
                    .then(result => result.json())
                    .then(data => {
                        console.log(data);

                        const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
                        console.log(count);
                        

                        const views = numeral(data.items[0].statistics.viewCount).format('0,0');
                        console.log(views);
                        

                        setSubscriberCount(count);
                        setViewCount(views)


                    })



            });

        const token = "BQBbV_BR1PmdTNdlGdn5PHHwK2cU3hifbr0ummU3UyyTyPYuw-Ir5aK8_AyQ4q26Yfo4BYugb1OQjjUEaUoyW3BvvXTzkSg5DJKpBOAcf2ystCFhQwq4-JzR5AMXt3J00cHMnlxItAfG61fEuYisCx00-dIU312Lgy1W_GY3stJCifUFVl1SwDdZcT-yTOpyt425OQ0t6yRzijP-K5l9iE_vP0CIcEsfI6V6Ld35RKXXRB-X0QtEQrooC345DI9kTJMOkkcYDEHhl_tUXSYrk3gYF2Xlkw";
        // BQApIDgk7Jrus9B3CU59-tGO7fwnhyXMTMLsS4VA-5NPpa9Xr4z-H-AfziVL-S-leuPTojLJ5a47LgWnq_XTPi_O6TS6Cz5M8pCm8VFIpxXoCR1UlscNSefEOCNxNkZkHXILP7roEUJbnb63-2oP2BZsnFoOfbYNZeJvLWrLizfZZgNkS4s8eFr2mx8-Rq5ONRTW_xs0yS1vNUJA7akQ3gw3jNRPCueH4n_lCZT_yRVzhsHq4rz0JjYVf5Z1R135qQ5UhrwYCdtmad0H3QBdwEODT2Mn6w";
        // BQCs5t7vr5g5JHPeg06hddFIDGiFZCoR4R59WbigcoZEH6k9Q0WBJr7OvCBjUPzapmmD51ygJ090jx1C4RgrT3k5cVVtkQBOVB7G-rk_uh-aNE9y9kuY_VOMPm65SW2EEQsbdldk2zyiW9KmCi1js2KyoHd4tHwInnrv4geWmsDINBeTPqjMzQeb8S9odidarx19Jdss-xNlTnM-FeXN7AW4nro3H0NJXzDmwy64R6bkN-oymqR0DncqVjweFABzypklLrutFdya_4X_MzNsfIl-ElaBFA";
        // "BQAvTaCepqieh3zPAp-4KAznXU1kTe2yZJ8ecMLNeHus1y2NOhZAec1ZSedm4gJIh9JmcQfxbGkfQZeY0wyNZ1haZ_tHcSYWrAj1NL5s2m7T3p1bMW6StMOh0YEk9I-7rlfV4Y0S13uKFRLUp0Spw3nzeXtPfw1Lp1_nr4I0HSmC_xvaITTb-7vKt4Mt35jtge6NflERs1V8MrU-PZtbXQkZdZ1mOTHUAa0_W-dI8A8UYPig2L2Hco0M-s_5_6nFdvx__Pjwe588cyyW__JqoydYCsVtVg"
        // 'BQBCE1-fUqVPfHgGMCMZv7RJbnomGCbQPG8B9tddyGv1bDngxvhxj519ymRobMtskS-iv-vss6y-TZprt0ShSFUKggqj4LHtu6TzM0O36CNkRx70PY-3te1knb2KUBaJ60rtjHSLMOT8Z-VwizqJGjYCJcrhvJQbVjVBTU99wmns5CwZSVAKIq3FHNAT1i6lDWDsMVLzQ5beizvkVEqK_QcS9cAicV0ALIp8Bm5s720p_uqf2XvSo0LRunkX52QEBoFEKVlb7NIbvYY';
        
        
        // const YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=' + process.env.REACT_APP_YOUTUBE_API_KEY
        // console.log(YouTubeURL)
        // fetch(YouTubeURL)
        // .then(result => result.json())
        // .then(data =>{
        //     console.log(data);
        // })
        // const url = `https://api.spotify.com/v1/artists/${state.search}`;
        const url = `https://api.spotify.com/v1/search?q=${state.search}&type=artist`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setState({ 
                    ...state,
                    artist: response.data.artists.items[0] },
                    () => console.log(state.artist))
            })
            .catch((err) => {
                console.error(err);
            })
    }
    
        return (
            <div>
                {/* <SearchBar
                    name="search"
                    search={state.search}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit} /> */}
                <Artist
                    artist={state.artist} />
                    
                    
                    <Spotify/>
            </div>
        )
    
}

export default Api;





        

        
           


       