import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function OrderConfirmModal() {
  const { cart, setConfirmOrder,setCart } = useContext(ProductContext);

  // Calculate the total order amount for the modal
  const orderTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg lg:w-[40%] w-88 md:w-96">
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" alt="Order Logo" />
        </div>
        <h2 className="text-2xl font-bold text-rose-900 ">Order Confirmed</h2>
        <p className="text-sm text-rose-400">We hope you enjoy your food!</p>

        {/* Product list inside the modal */}
        <div className="bg-rose-100 rounded p-4 my-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-2 p-2 ">
                <div className="w-12 h-12 rounded-md">
                  <img src={item.image.thumbnail} alt="Product image"
                  className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <p className="font-semibold text-rose-900">{item.name}</p>
                  <p className="text-sm text-rose-500 flex items-center space-x-2">
                    <span className="text-red font-bold">{item.quantity}x</span>
                    <span>@${item.price.toFixed(2)}</span>
                  </p>
                </div>
              </div>
              <p className="font-bold text-rose-500">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Total price */}
          <div className="flex justify-between border-t pt-2">
            <span className="font-light text-lg text-rose-500 pl-2">Order Total</span>
            <span className="font-bold text-2xl text-rose-900">
              ${orderTotal}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-red w-full rounded-full px-4 py-2 hover:bg-rose-900 text-white"
            onClick={() => {
                setCart([]);
                setConfirmOrder(false)}}
          >
            Start New Order
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmModal;
