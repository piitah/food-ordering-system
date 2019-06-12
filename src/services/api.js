import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://localhost:8181/`,
        headers: {
            // 'Authorization': 'Bearer Token' + store.state.token,
            'Content-Type': 'application/json'
        }
    });
}
