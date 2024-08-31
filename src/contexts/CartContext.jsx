import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("EUR");

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en localStorage cada vez que se actualiza
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart({ product }) {
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id && item.size === product.size
    );

    let newCart;

    if (existingProductIndex !== -1) {
      // El producto ya está en el carrito, incrementamos la cantidad
      newCart = [...cart];
      newCart[existingProductIndex].quantity += product.quantity;
    } else {
      // El producto no está en el carrito, lo añadimos
      newCart = [...cart, product];
    }

    setCart(newCart);

    // Actualizar el localStorage después de añadir o modificar el carrito
    const newCartIds = newCart.map(item => item._id);
    localStorage.cart = JSON.stringify(newCartIds);
  }

  function removeFromCart(_id) {
    setCart(cart.filter((item) => item._id !== _id));
  }

  function updateQuantity(_id, quantity) {
    setCart(
      cart.map((item) =>
        item._id === _id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  }

  function selectToBuy(_id) {
    setCart(
      cart.map((item) =>
        item._id === _id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function changeCurrency(newCurrency) {
    setCurrency(newCurrency);
  }

  function checkout() {
    const selectedItems = cart.filter((item) => item.selected);
    setCheckoutItems(selectedItems);
    navigate("/checkout");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        checkoutItems,
        currency,
        addToCart,
        removeFromCart,
        updateQuantity,
        selectToBuy,
        changeCurrency,
        checkout,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext Hook must be used within a CartProvider");
  }
  return context;
}