import axios from 'axios';

export const proImagesActionNames = {
  UPLOAD_IMG: 'UPLOAD_IMG'
}

export const proImagesActionTypes = {
  uploadImg(payload){
    return {
      type: proImagesActionNames.UPLOAD_IMG,
      payload
    }
  },
  uploadImgAsync(payload){
    return function(dispatch, getState){
      return axios.post("http://localhost:45550/api/upload", payload)
              .then((res) => console.log(res.data))
    }
  }
}