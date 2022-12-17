import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, add_to_cart} from '../redux/cart/actions'

export default function ButtonInc(props){
    const qty = useSelector((state)=> state.qty);
    const protuctQty = props.pqty;
    console.log(protuctQty, 'pqty');
    const dispatch = useDispatch();
    const qtyIncrementHandler = (id)=>{
       // if(qty < protuctQty ){
            dispatch(add_to_cart({id: id}));
       //}
       //disabled={qty < protuctQty ? "" : 'disabled'}
    }
    return(
        <button onClick={()=>qtyIncrementHandler(props.id)} className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
        </button>
    )
}