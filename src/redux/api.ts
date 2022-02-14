import axios from "axios";

const RAILS_API = 'http://localhost:3001/api/v1';

export const api = {
    createuser(endpoint, data){

        return axios.post(`${RAILS_API}${endpoint}`, data)
    },
    getuser(endpoint, headers){
        return axios.get(`${RAILS_API}${endpoint}`, headers)
    }
}