import React, { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full h-screen flex flex-col ms-3">
  <h1 className="text-3xl pt-5 font-bold text-center text-indigo-700 mb-4">
    Fake Store Products
  </h1>

  {/* Scrollable Product Grid */}
  <div className="flex-1 overflow-y-auto px-8 pb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-slate-100 p-6 rounded-xl">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition-transform hover:-translate-y-1"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain mb-4"
          />
          <h3 className="text-center font-semibold text-base mb-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ProductGrid;
