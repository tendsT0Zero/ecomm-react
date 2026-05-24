import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({product}) {
    const { addToCart } =useCart();
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg glex flex-col justify-between">
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
        onClick={() => addToCart(product)}
        className="mt-4 bg-teal-600 text-white py-2 rounded w-full hover:bg-teal-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
