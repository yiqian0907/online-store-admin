export const productListActionNames = {
  ADD_PRODUCT: "ADD_PRODUCT"
}


export const productListActionTypes = {
  addProduct(newPro){
    return {
      type: productListActionNames.ADD_PRODUCT,
      newPro
    }
  }
}