import {combineReducers} from 'redux';
import productListReducer from './productListReducer';
import proImageReducer from './proImageReducer';

export default combineReducers({
  productList: productListReducer,
  productImg: proImageReducer
})