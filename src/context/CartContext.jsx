import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("ecommerce_cart", []);

  //addtocart
  const addToCart = (product) => {
    //check if product already in the cart, if yes just increase the quantity by 1, if not add new product to the cart with quantity 1
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  //remove fromcart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  // update quantity
  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );

    if (quantity <= 0) {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, updateQuantity, cart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
