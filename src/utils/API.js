import axios from "axios";

export default {
    getPerformances: function() {
        return axios.get("http://localhost:3001/api/performances");
    },
    postPerformances:function(performanceData){
        return axios.post("http://localhost:3001/api/performances", performanceData);

    }
}


// saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
