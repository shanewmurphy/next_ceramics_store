import { createContext, useReducer } from "react";
import cartReducer from "./Cart-reducer";

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  const contextValues = {
    ...state,
    addProduct,
  };

  return (
    <div>
      <CartContext.Provider value={ contextValues }>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
