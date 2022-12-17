import React from "react";
import Product from "./components/product";
import CartItem from './components/cartItem';
import { useSelector } from "react-redux"

export default function Cart(){
    const all_products = useSelector((state)=>state.products);
    const all_cartItems = useSelector((state)=>state.cart);
    const total_items = useSelector((state)=>state.cart.total_items);
    const total_price = useSelector((state)=>state.cart.total_price);
    
    console.log(all_products, 'all products');
    console.log(all_cartItems, 'carts');

    return(
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                {/* <!-- Products --> */}
                {all_products.map(product=> <Product data={product} key={product.id} /> )}
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                    {all_cartItems.cartItems.length > 0 && all_cartItems.cartItems.map(
                        (items, index)=>(
                            <CartItem data={items} key={index} />
                        )
                    )}
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-5xl">{total_items}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Price</p>
                            <p className="text-5xl">{total_price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}