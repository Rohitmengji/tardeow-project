import React, { useState } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProductIndex = cart.findIndex(
      (p) => p.product.id === product.id
    );

    if (existingProductIndex >= 0) {
      const cartProducts = [...cart];
      cartProducts[existingProductIndex].quantity += quantity;
      setCart(cartProducts);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((p) => p.product.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
