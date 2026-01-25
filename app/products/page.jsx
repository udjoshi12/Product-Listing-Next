import ProductsClient from "./productsClient/productsClient";
import Image from "next/image";

export default async function Page() {
  const [res, resLocal] = await Promise.all([
    fetch("https://fakestoreapi.com/products", { cache: "no-store" }),
    fetch("http://localhost:3000/api/products"),
  ]);

  const data = await res.json();
  const localData = await resLocal.json();

  const allProducts = [...data, ...localData];

  return (
    <>
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

      <div className="relative min-h-screen">
        <div className="min-h-screen bg-slate-900/40 backdrop-blur-sm">
          <ProductsClient products={allProducts} />
        </div>
      </div>
    </>
  );
}
