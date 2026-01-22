// import Link from "next/link";
// import Navigation from "./components/navigation";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl font-bold">Product Store</h1>
        <p className="mt-4 text-slate-300 max-w-xl">
          Browse products, view details, and manage inventory through the admin
          panel.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/products"
            className="bg-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 text-slate-70"
          >
            View Products
          </Link>

          <Link
            href="/admin/add-product"
            className="bg-slate-700 px-6 py-3 rounded-lg hover:bg-slate-600 text-slate-70 font-semibold"
          >
            Admin Panel
          </Link>
        </div>
      </section>
    </main>
  );
}
