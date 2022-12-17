import { ADD_TO_CART, DECREMENT, INCREMENT, TOTAL_PRICE } from "./actionTypes"

export const add_to_cart = (value)=>{
    return {
        type: ADD_TO_CART,
        payload: value
    }
}
export const total_price = (value)=>{
    return {
        type: TOTAL_PRICE,
        payload: value
    }
}   
export const increment = (value)=>{
    return {
        type: INCREMENT,
        payload: value
    }
}
export const decrement = (value)=>{
    return {
        type: DECREMENT,
        payload: value
    }
} 