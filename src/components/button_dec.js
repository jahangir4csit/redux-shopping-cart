import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement} from '../redux/cart/actions'

export default function ButtonDec(props){

    const qty = useSelector((state)=> state.qty);
    

    const dispatch = useDispatch();
    const qtyDecrementHandler = (id)=>{
        //if(qty > 1){
            dispatch(decrement({id: id}));
        //}
    }
    //disabled={qty > 1 ? "" : 'disabled'}

    return(
        <button  onClick={()=>qtyDecrementHandler(props.id)} className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 12H6"
                />
            </svg>
        </button>
    )
}