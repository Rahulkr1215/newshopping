
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast} from "react-hot-toast"; 

const CartItem  = ( {item , itemIndex}) => { 
    const dispatch = useDispatch ();

    const removeFromCart = () =>{
        dispatch (remove(item.id));
        toast.success("Item Removed");

    }

    return (
        <div>

        <div className="flex items-start justify-between border-b border-gray-300 py-4">

            <div className="w-24 h-24 flex-shrink-0">
                <img src={item.image} 
                className="w-full h-full object-cover rounded-md" />
            </div>
            <div>
                <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
                <h1 className="text-gray-600 text-sm mb-2">{item.description}</h1>
                <div>
                    <p>{item.price}</p>
                </div>
                <div className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={removeFromCart}>
                    <FcDeleteDatabase/>
                </div>
            </div>

        </div>
        </div>
    );
};

export default CartItem;