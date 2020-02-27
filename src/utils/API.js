import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("http://localhost:3001/api/performances");
    }
}