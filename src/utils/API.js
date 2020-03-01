import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("http://localhost:3001/api/performances");
    }
    // postPerformances: function(props) {
    //     return axios.post("http://localhost:3001/api/performances" + props);
    // }
}