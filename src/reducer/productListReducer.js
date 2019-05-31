import {productListActionNames} from '../action/productList';

function productListReducer(preState=[], action){
  switch(action.type){
    case productListActionNames.ADD_PRODUCT:
      return preState;
    default:
      return preState;
  }
}

export default productListReducer;