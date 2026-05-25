import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

function Home() {
  // const {
  //   response: products,
  //   loading,
  //   error,
  // } = useFetch("https://fakestoreapi.com/products");

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, //5 mins
  });

  if (isLoading)
    return (
      <div className="text-center py-20 text-xl font-bold animate-pulse">
        Loading Products...
      </div>
    );
  if (isError)
    return (
      <div className="text-red-500 text-center py-20">
        Error occurred while fetching products.
      </div>
    );

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
