import {proImagesActionNames} from '../action/proImagesAction'

function proImageReducer(preState=[], action){
  switch(action.type){
    case proImagesActionNames.UPLOAD_IMG:
      return preState.push(action.payload)
    default:
      return preState
  }
}

export default proImageReducer;