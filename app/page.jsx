import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <div className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/bg-img.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <section className="max-w-2xl text-center backdrop-blur-md bg-slate-900/40 rounded-2xl p-10 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Product Store
            </h1>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Browse products, explore detailed listings, and manage inventory
              seamlessly through the admin panel.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/60 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-700 hover:border-slate-500 hover:scale-[1.02] active:scale-95"
              >
                View Products
              </Link>

              <Link
                href="/admin/add-product"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/60 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-700 hover:border-slate-500 hover:scale-[1.02] active:scale-95"
              >
                Admin Panel
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
