import axios from 'axios';
let baseURL = process.env.API_URL
  ? process.env.API_URL
  : "https://torilo-api.herokuapp.com"/;

axios.defaults.headers.common['Content-Type'] =  'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');

const instance = axios.create({
  baseURL
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('Authorization');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

