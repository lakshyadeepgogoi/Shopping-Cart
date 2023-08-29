
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice"


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Iteam Removed");

  }





  return (
    <div>


      <div>

        <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          <img src={item.image} className="w-[30%]"/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
};

export default CartItem;
