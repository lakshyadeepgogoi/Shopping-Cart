import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const[totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart])


  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      {
        cart.length > 0 ? 
        (<div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">

          <div className=" flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div>

            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>


            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>
                Checkout Now
              </button>
            </div>


          </div>


        </div>) :
        (<div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
          <button>
          Shop Now 
          </button>
          </Link>
          </div>)
      }

    </div>
  );
};

export default Cart;
