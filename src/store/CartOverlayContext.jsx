import { createContext } from "react";

const CartOverlayContext = createContext({
  setCartOpen: () => {},
  setCartClose: () => {},
});

export default CartOverlayContext;
