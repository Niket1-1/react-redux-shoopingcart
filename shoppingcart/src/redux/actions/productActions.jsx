import { ActionTypes } from "../constants/action-Types"

export const setproducts=(products)=>{
     return {
         type:ActionTypes.SET_PRODUCTS,
         payload:products,
     }
}

export const selectedproduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}