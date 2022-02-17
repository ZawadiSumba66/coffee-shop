import axios from "axios";

const RAILS_API = 'http://localhost:3001/api/v1';

type Config = {
  headers: {
    Authorization: string
  } 
}

export let config = {
  headers: {
    Authorization: `token ${localStorage.getItem("token")}`,
  },
};

export const api = {
    post(endpoint: string, data: unknown){
        return axios.post(`${RAILS_API}${endpoint}`, data)
    },
    get(endpoint: string, headers: Config){
        return axios.get(`${RAILS_API}${endpoint}`, headers)
    },
    put(endpoint:string, headers: Config, data: unknown){
      return axios.put(`${RAILS_API}${endpoint}`, data, headers)
    },
    delete(endpoint:string, headers: Config, data: unknown){
      return axios.put(`${RAILS_API}${endpoint}`, data, headers)
    }
}