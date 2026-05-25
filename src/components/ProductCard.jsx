import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  // const { addToCart } =useCart();

  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <div>
        <h3 className="font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-teal-900 font-bold">${product.price}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 bg-teal-600 text-white py-2 rounded w-full hover:bg-teal-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
