import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children, }) {
  const [cart, setCart] = useState([
    {
      _id: '6671b38d25a83203478325d3',
      type: "Shirt",
      color: "White",
      name: "White-Shirt",
      price: 10,
      stock: 22,
      description: "The basic white one",
      quantity: 1,
      id: 3,
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691675073-M1205R_01_b1_s3_a1_1_m94.jpg?crop=1.00xw:0.668xh;0,0.141xh&resize=980:*"
    },
    {
      _id: '6671b3d625a83203478325d5',
      type: "Calcetines",
      color: "Verdes",
      name: "Camiseta de algodón",
      price: 10,
      stock: 20,
      description: "This is a test",
      quantity: 1,
      id: 4,
      image: "https://www.hooraysocks.com/cdn/shop/products/Hooray-sq-54753.jpg?v=1615506303"
    },
  ]);
  function addToCart({product}) {
    const productIdsAsString = localStorage.cart||"[]"
    const productIds = JSON.parse(productIdsAsString)
    productIds.push(product._id)
    const newProductIdsAsString = JSON.stringify(productIds)
    localStorage.cart = newProductIdsAsString
    const newCart = [...cart]
    newCart.push(product)
    setCart(newCart)
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function updateQuantity (id, quantity) {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item));
  }

  function selectToBuy (_id) {
    setCart(cart.map(item =>
      item._id === _id ? { ...item, selected: !item.selected } : item
    ));
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, selectToBuy}}>
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