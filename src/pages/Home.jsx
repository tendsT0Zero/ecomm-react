import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
function Home() {
  const {
    response: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  if (loading)
    return (
      <div className="text-center py-20 text-xl font-bold animate-pulse">
        Loading Products...
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center py-20">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(products ?? []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
