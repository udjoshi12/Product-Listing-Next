"use client";

import { useCart } from "@/app/contexts/cartContext";
import Link from "next/link";

export default function Navigation() {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between bg-slate-900 border-b border-slate-700 px-4 h-14 text-white">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="px-3 py-2 hover:bg-slate-800 rounded-md font-medium"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="px-3 py-2 hover:bg-slate-800 rounded-md font-medium"
        >
          Products
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <Link
          href="/cart"
          className="flex items-center justify-center px-3 py-2 hover:bg-slate-800 rounded-md"
        >
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#e1e8f0"
            stroke="#e1e8f0"
            className="w-6 h-6"
          >
            <g>
              <path d="M491.615,95.732c-5.051-6.18-12.624-9.78-20.622-9.78H123.655l-11.827-40.616c-5.434-18.177-20.341-31.939-38.883-35.912L30.487,0.297c-7.2-1.537-14.28,3.039-15.817,10.23-1.536,7.182,3.039,14.271,10.231,15.808l42.449,9.101c9.05,1.935,16.309,8.651,18.958,17.506l77.589,266.549c-1.749.814-3.43,1.706-5.06,2.674-8.371,4.984-15.077,11.979-19.577,20.147-4.296,7.768-6.588,16.564-6.801,25.639v1.384c.178,7.08,1.68,13.89,4.313,20.095 4.194,9.916,11.172,18.313,19.968,24.264 8.796,5.943,19.476,9.433,30.86,9.424h249.57c7.361,0,13.32-5.96,13.32-13.312 0-7.352-5.96-13.321-13.32-13.321h-249.57c-3.982,0-7.7-.79-11.104-2.233-5.102-2.156-9.492-5.79-12.574-10.358-2.954-4.381-4.686-9.56-4.839-15.231.153-6.766,2.309-12.633,6.095-17.327 1.97-2.428,4.382-4.551,7.318-6.308 2.904-1.732,6.317-3.098,10.324-3.965l250.86-40.836c16.402-2.674,29.426-15.197,32.737-31.472l30.682-150.848c.356-1.748.544-3.531.536-5.297 0-6.179-2.098-12.148-6.02-16.953z" />
              <path d="M197.856,438.502c-20.36,0-36.745,16.385-36.745,36.745s16.385,36.753,36.745,36.753 36.753-16.393,36.753-36.753-16.393-36.745-36.753-36.745z" />
              <path d="M399.39,438.502c-20.36,0-36.753,16.385-36.753,36.745s16.393,36.753,36.753,36.753 36.753-16.393,36.753-36.753-16.393-36.745-36.753-36.745z" />
            </g>
          </svg>
          <span className="text-xs mt-1 ml-1">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}
