import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("http://localhost:3001/api/performances");
    },
    postPerformance: function(performanceData) {
        console.log(performanceData);
        return axios.post("http://localhost:3001/api/performances", performanceData);
    },
    postArtist: function(artistData){
        console.log(artistData);
        return axios.post("http://localhost:3001/api/artists", artistData)
    },
    postMusicAPI: function(apiData){
        console.log(apiData);
        return axios.post("http://localhost:3001/api/musicapi", apiData)
    }
}