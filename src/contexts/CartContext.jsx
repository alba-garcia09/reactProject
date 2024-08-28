import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children, }) {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("USD");

  function addToCart({ product }) {
    const productIdsAsString = localStorage.cart || "[]"
    const productIds = JSON.parse(productIdsAsString)
    productIds.push(product._id)
    const newProductIdsAsString = JSON.stringify(productIds)
    localStorage.cart = newProductIdsAsString
    const newCart = [...cart]
    product.selected = true;
    newCart.push(product)
    setCart(newCart)
  }

  function removeFromCart(_id) {
    setCart(cart.filter(item => item._id !== _id));
  }

  function updateQuantity(_id, quantity) {
    setCart(cart.map(item => item._id === _id ? { ...item, quantity: Math.max(quantity, 1) } : item));
  }

  function selectToBuy(_id) {
    setCart(cart.map(item =>
      item._id === _id ? { ...item, selected: !item.selected } : item
    ));
  }

  function changeCurrency(newCurrency) {
    setCurrency(newCurrency);
  }

  function checkout() {
    const selectedItems = cart.filter(item => item.selected);
    setCheckoutItems(selectedItems);
    navigate('/checkout');
  }

  return (
    <CartContext.Provider value={{ cart, checkoutItems, currency, addToCart, removeFromCart, updateQuantity, selectToBuy, changeCurrency, checkout }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartContext Hook must be used within a CartProvider")
  }
  return context;
}