import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartOverlayContext from "./store/CartOverlayContext";
import CartProvider from "./store/CartProvider";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenHandler = () => {
    setIsOpen(true);
  };
  const onCloseHandler = () => {
    setIsOpen(false);
  };
  return (
    <>
      <CartProvider>
        <CartOverlayContext.Provider
          value={{
            setCartOpen: onOpenHandler,
            setCartClose: onCloseHandler,
          }}
        >
          {isOpen && <Cart />}
          <Header />
        </CartOverlayContext.Provider>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
