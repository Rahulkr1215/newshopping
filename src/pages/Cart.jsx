import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

    const {cart} = useSelector((state)=> state);
    const [totalAmount , setTotalAmount] = useState(0);

    useEffect (()=>{
        setTotalAmount(cart.reduce((acc , curr)=> acc + curr.price , 0));
    },[cart])

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {
                cart.length > 0 ?
                (<div className="grid grid-cols-3 gap-8"> 


                    <div className="col-span-2 space-y-6">
                    {
                        cart.map ((item,index)=>{
                            return <CartItem key= {item.id} item ={item} itemIndex={index} />
                        })
                    }    
                     </div>

                     <div className="bg-gray-100 p-6 rounded-md shadow-md">

                        <div className="text-xl font-semibold mb-4 text-gray-800">Your Cart</div>
                        <div className="text-lg font-medium text-gray-700 mb-2">Summary</div>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Total Items:{cart.length}</span>
                        </p>
                     </div>
                     <div className="text-gray-700">
                        <p className="font-semibold">Total Amount: ${totalAmount}</p>
                        <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                            CheckOut Now 
                        </button>

                     </div>







                </div>) :
                (<div  className="text-center"> 
                  <h1 className="text-2xl font-semibold text-gray-800"> Cart Empty </h1> 
                  <Link to = {"/"}>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Shop Now
                  </button>
                  </Link> 
                </div>) 
            }

        </div>
    );
};

export default Cart;