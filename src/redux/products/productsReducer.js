import { LOAD_ALL_PRODUCTS } from './actionTypes'
const initialState = [
    {
        id: 1,
        title: "Asus Vivobook X515MA",
        quantity: 10,
        price: 35500
    },
    {
        id: 2,
        title: "Dell E1916HV 18.5 Inch",
        quantity: 5,
        price: 9500
    },
    {
        id: 3,
        title: "Canon Eos 4000D 18MP",
        quantity: 8,
        price: 36500
    }
]

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_ALL_PRODUCTS:
            return{
                ...state,

            }

        default: 
         return state
    }
}
export default productReducer;
