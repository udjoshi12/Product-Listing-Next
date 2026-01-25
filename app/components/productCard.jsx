"use client";
import { useCart } from "@/app/contexts/cartContext";

export default function ProductCard({ product }) {
  const cart = useCart();

  if (!cart) {
    throw new Error("useCart must be used inside CartProvider");
  }

  const { addToCart } = cart;

  return (
    //max-w-2xl text-center backdrop-blur-md bg-slate-900/40 rounded-2xl p-10 shadow-xl
    <div className="rounded-2xl flex gap-4 flex-col justify-center items-center w-1/2 p-6 ml-auto mr-auto shadow-lg shadow-slate-700/50 bg-slate-700/50 backdrop-blur-md">
      <img src={product.image} alt="product image" className="h-1/2" />

      <p className="text-center font-bold text-base text-slate-100">
        {product.title}
      </p>

      <p className="text-center font-bold text-lg text-slate-300">
        ₹{product.price}
      </p>

      <p className="text-center font-bold text-base text-slate-300">
        About the product:
        <br />
        {product.description}
      </p>

      <p className="text-center font-bold text-base text-slate-300">
        Category: {product.category}
      </p>

      {product.rating && (
        <>
          <p className="text-center font-bold text-base text-slate-300">
            Rating: {product.rating.rate}
          </p>
          <p className="text-center font-bold text-base text-slate-300">
            Number of ratings: {product.rating.count}
          </p>
        </>
      )}
      <button
        type="button"
        onClick={() => {
          addToCart(product);
        }}
        className="mt-2 bg-slate-600 text-slate-100 px-4 py-2 rounded-full hover:bg-slate-500 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
