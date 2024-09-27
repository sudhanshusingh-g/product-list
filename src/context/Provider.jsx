import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};