import React from "react";
import "./App.css";

import Store from "./components/store";
import CartProvider from "./components/cart/context";
import Navigation from "./navbardesign/navbar/navigation";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navigation />
        <Store />
      </CartProvider>
    </div>
  );
}

export default App;
