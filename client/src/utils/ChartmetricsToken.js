import axios from 'axios';
export default {
    get: (url) => {
        return new Promise((resolve, reject) => {
            axios.post("https://cors-anywhere.herokuapp.com/https://api.chartmetric.com/api/token", {
                "refreshtoken": "JpmNnpIa9QDCuwwGymLSRQfmKtgCe7iyqr8oNs2nIN1xTTUtqrm6NGUVlUVmASbz"
            }).then((response) => {
                const token = response.data.token;
                console.log("token", token);
                axios.get(`https://cors-anywhere.herokuapp.com/${url}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((response) => {
                    console.log("response", response);
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                })
            }).catch((err) => {
                reject(err);
            });
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            axios.post("https://cors-anywhere.herokuapp.com/https://api.chartmetric.com/api/token", {
                "refreshtoken": "JpmNnpIa9QDCuwwGymLSRQfmKtgCe7iyqr8oNs2nIN1xTTUtqrm6NGUVlUVmASbz"
            }).then((response) => {
                const token = response.data.token;
                axios.post(`https://cors-anywhere.herokuapp.com/${url}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                })
            }).catch((err) => {
                reject(err);
            });
        });
    }
}





