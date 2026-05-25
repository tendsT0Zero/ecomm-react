import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

function Navbar() {
  // const { cart } = useCart();
  // const cartCount = cart.length;
  // const { user, logout } = useAuth();

  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cart);
  const cartCount = cartItems?.length || 0;
  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-teal-600">
        My Store
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative text-2xl">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => dispatch(logout())}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-teal-700 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
