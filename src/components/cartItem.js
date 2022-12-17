import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDec from "./button_dec";
import ButtonInc from "./button_inc";

export default function CartItem(props){

    const qty = useSelector((state)=> state.qty);

    return(
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{props.data.title}</p>
            </div>
            <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <ButtonDec id={props.data.id} />
                    <p>{props.data.qtyIncart}</p>
                    <ButtonInc id={props.data.id}/>
                </div>
            </div>
        </div>
    )
}