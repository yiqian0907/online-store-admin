import axios from 'axios';


axios.interceptors.request.use(function(config){
  if(sessionStorage.getItem('LOGIN_TOKEN')){
      config.headers.Authorization = sessionStorage.getItem('LOGIN_TOKEN');
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

export default {
  login(data){
    return axios.post('http://localhost:45550/api/userlogin', data)
  },
  uploadImg(img){
    return axios.post('http://localhost:45550/api/upload', img)
  },
  getProList(){
    return axios.get("http://localhost:45550/api/product")
  }  
}