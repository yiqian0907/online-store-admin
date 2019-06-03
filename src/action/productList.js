import axios from 'axios';

export const productListActionNames = {
  ADD_PRODUCT: "ADD_PRODUCT"
}


export const productListActionTypes = {
  addProduct(newPro){
    return {
      type: productListActionNames.ADD_PRODUCT,
      payload:newPro
    }
  },
  addProductAsync(newPro){
    return function(dispatch, getState){
      return axios.post('http://localhost:45550/api/product', newPro)
              .then((res) => {
                // console.log(res.data);
                dispatch(productListActionTypes.addProduct(newPro))
              })
    }
  }
}