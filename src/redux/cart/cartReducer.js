import { ADD_TO_CART, DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
    cartItems: [],
    total_items: 0,
    total_price: 0
}

const cartReducer = (state = initialState, action)=>{

    switch (action.type) {
        case ADD_TO_CART:
            const newCartItem = action.payload;
            const coppiedCart = state.cartItems.map((cartItem) => ({ ...cartItem }) );
            const itemIndex = coppiedCart.findIndex(
                (cartItem) => cartItem.id === newCartItem.id
            )
            console.log(itemIndex, 'itemIndex');


            if(itemIndex > -1){
                // if item exist in the cart
                //let itemQty = coppiedCart[itemIndex].quantity = coppiedCart[itemIndex].quantity + 1;

                //if(newCartItem.quantity > state.cartItems[itemIndex].quantity){
                    state.cartItems[itemIndex].quantity--;
                    state.cartItems[itemIndex].qtyIncart++;
                    let totalItems = state.total_items + 1
                    let totalPrice = state.total_price + state.cartItems[itemIndex].price
                //}
                
                return{
                    ...state,
                    total_items: totalItems,
                    total_price: totalPrice
                }
            }else{
                // if item not exist in the cart
                newCartItem.qtyIncart = 1;
                let totalItems = state.total_items + 1
                let totalPrice = state.total_price + newCartItem.price
                //newCartItem.quantity = 1;
                return{
                    ...state,
                    cartItems: [...state.cartItems, newCartItem],
                    total_items: totalItems,
                    total_price: totalPrice
                }
            }
        case INCREMENT:
            return{
                ...state
            }
        case DECREMENT:
            const coppiedCartDec = state.cartItems.map((cartItem) => ({ ...cartItem }) );
            const decItemIndex = coppiedCartDec.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            if(decItemIndex > -1){
                state.cartItems[decItemIndex].quantity++
                state.cartItems[decItemIndex].qtyIncart--
                let totalItems = state.total_items - 1
                let totalPrice = state.total_price - state.cartItems[decItemIndex].price
                return{
                    ...state,
                    total_items: totalItems,
                    total_price: totalPrice
                }
            }
            return{
                ...state
            }
        default:
            return state;
    }
}

export default cartReducer;