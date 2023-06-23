import  { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the ProductContext
export const ProductContext = createContext();

// Create the ProductProvider component
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    const item = {
      product,
      quantity,
    };
    setCartItems([...cartItems, item]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product !== product
    );
    setCartItems(updatedCartItems);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Define the context value
  const contextValue = {
    selectedProduct,
    setSelectedProduct,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

// Prop validation
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
