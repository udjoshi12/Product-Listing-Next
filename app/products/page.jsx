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
    <div className="relative h-screen w-full">
      <Image
        src="/bg-img.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full text-white bg-transparent">
        <div className="bg-slate-900 h-screen">
          <ProductsClient products={allProducts} />
        </div>
      </div>
    </div>
  );
}
