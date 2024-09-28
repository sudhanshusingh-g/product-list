import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { cart, setCart, confirmOrder, setConfirmOrder } =
    useContext(ProductContext);

  // Calculate the total order amount
  const orderTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Function to remove an item from the cart
  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-4 md:col-span-3 lg:col-span-1">
      <h1 className="text-red font-bold text-xl">Your Cart ({cart.length})</h1>

      {cart.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {cart.map((item, index) => (
            <div
              className="flex items-center justify-between border-b-[1px] py-3"
              key={index}
            >
              {/* Product Details */}
              <div>
                <p className="text-md font-semibold text-rose-900">
                  {item.name}
                </p>
                <div className="flex items-center space-x-6">
                  <span className="text-sm font-semibold text-red">
                    {item.quantity}x
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-rose-400 text-sm">
                      @${item.price.toFixed(2)}
                    </span>
                    <span className="text-rose-500 text-sm font-semibold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Remove from Cart Button */}
              <button
                onClick={() => removeFromCart(item.name)}
                className="border-[2px] p-1 group border-rose-400 rounded-full hover:border-rose-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                  className="group-hover:stroke-rose-900"
                >
                  <path
                    fill="#CAAFA7"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    className="group-hover:fill-rose-900"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Total section */}
          <div className="flex items-center justify-between">
            <span className="text-xs">Order Total</span>
            <span className="font-extrabold text-paragraph text-rose-900">
              ${orderTotal}
            </span>
          </div>

          {/* Carbon Neutral Delivery Note */}
          <div className="flex items-center bg-rose-50 py-3 px-4 rounded-md justify-center text-xs space-x-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
            </div>
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>

          {/* Confirm Order Button */}
          <button className="bg-red text-rose-100 w-full rounded-full text-xs py-3 px-4 hover:bg-rose-900 transition-bg duration-300"
          onClick={()=>setConfirmOrder(true)}
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div>
          <div className="w-16 h-16 mx-auto">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="Empty Cart"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-rose-500 text-center my-4 text-xs">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
