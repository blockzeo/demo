import axios from 'axios';
import { GLOBAL_API_DOMAIN } from '../config/index.js'

const request = axios.create({
    baseURL: GLOBAL_API_DOMAIN,
    timeout: 60000,
    withCredentials: false
});

request.interceptors.request.use( async (config) => {
    return config
}, function(error){
  return Promise.reject(error)
})

request.interceptors.response.use( async (response) => {
  return response
}, function(error) {
  return Promise.reject(error)
});

export default request
