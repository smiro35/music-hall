import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("/api/performances");
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
    deletePerformance: function(performanceID) {
        console.log(performanceID);
        return axios.delete("/api/performances/:id", performanceID)
    }
    
}