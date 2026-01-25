"use client";
import { useCart } from "@/app/contexts/cartContext";
import Product from "../components/product";
import Image from "next/image";
export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  return (
    <div className="">
      <div className="fixed inset-0 -z-10 pointer-events-none">
              <Image
                src="/bg-img.png"
                alt="Background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            </div>
      


      <div className="relative z-10 min-h-screen text-white bg-slate-900/30 backdrop-blur-sm">
        <div className="mx-auto px-4 pt-8">
          <h1 className="text-center font-bold text-2xl text-slate-100 mb-10">
            Your Cart
          </h1>

          {items.length === 0 && (
            <p className="text-center font-bold text-xl text-slate-100 mt-16">
              Wow, such empty!
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-10 h-full w-full">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col items-center p-4">
                <Product product={item} />
                <p className="text-slate-100 mt-2">Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 bg-slate-600 text-slate-100 px-4 py-2 rounded-full hover:bg-slate-500 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={clearCart}
                className="bg-slate-600 text-slate-100 px-6 py-2 rounded-full hover:bg-slate-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
