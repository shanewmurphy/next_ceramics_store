import { createContext, useState } from "react";
import SHOP_DATA from "../Shop/Products-list";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return (
    <div>
      <ProductsContext.Provider value={{ products }}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
