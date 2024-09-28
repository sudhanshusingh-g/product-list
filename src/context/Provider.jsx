import { useState } from "react";
import { ProductContext } from "./ProductContext";
import data from "../data.json";

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);
  const [confirmOrder,setConfirmOrder]=useState(false);

  const addToCart = (product) => {
    const { name, price, image } = product;
    const existingProduct = cart.find((item) => item.name === name);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { name, price, image, quantity: 1 }]);
    }
  };

  

  return (
    <ProductContext.Provider
      value={{ cart, setCart, products, addToCart,confirmOrder,setConfirmOrder }}
    >
      {children}
    </ProductContext.Provider>
  );
};
