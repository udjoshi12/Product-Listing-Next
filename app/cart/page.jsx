"use client";
import { useCart } from "@/app/contexts/cartContext";
import Product from "../components/product";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-2xl text-slate-100">
        Your Cart
      </h1>
      {items.length === 0 && (
        <p className="text-center font-bold text-xl text-slate-100">
          Wow, such empty!
        </p>
      )}

      {items.map((item) => (
        <div key={item.id} className="flex flex-col justify-between ">
          <Product product={item} />
          <p className="text-slate-100 m-auto">Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)} className="m-auto bg-slate-800 text-slate-100 px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">Remove</button>
        </div>
      ))}

      {items.length > 0 && (
        <button onClick={clearCart} className="m-auto bg-slate-800 text-slate-100 px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">
          Clear Cart
        </button>
      )}
    </div>
  );
}
