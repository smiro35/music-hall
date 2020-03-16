import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("/api/performances");
    },
    getArtists: function() {
        return axios.get("/api/artists")
    },
    postPerformance: function(performanceData) {
        console.log(performanceData);
        return axios.post("/api/performances", performanceData);
    },
    postArtist: function(artistData){
        console.log(artistData);
        return axios.post("/api/artists", artistData)
    },
    postMusicAPI: function(apiData){
        console.log(apiData);
        return axios.post("/api/musicapi", apiData)
    },
    getMusicAPI: function(apiData){
        console.log(apiData);
        return axios.get("/api/musicapi", apiData)
    }
}