import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">
          Please login to view your cart
        </h2>
        <Link to="/login" className="bg-teal-700 text-white px-4 py-2 rounded">
          Login
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="bg-teal-700 text-white px-4 py-2 rounded">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {user && (
        <p className="mb-4 text-green-600">Shipping to: {user.address}</p>
      )}

      <div className="bg-white rounded shadow p-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex gap-4 items-center w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <p className="font-semibold truncate">{item.title}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <p className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={clearCart}
          className="text-red-500 border border-red-500 px-4 py-2 rounded"
        >
          Clear Cart
        </button>
        <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
