import Link from "next/link";
// import Navigation from "../components/navigation";
import Product from "../components/product";

export default async function Page() {
  <div className="bg-red-500 text-white p-10">TEST</div>;

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const resLocal = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const tempData = await resLocal.json();
  tempData.map((item) => data.push(item));
  console.log("LOCAL DATA", data);
  return (
    <div className="bg-slate-900">
      {/* <Navigation /> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center items-center h-100vh">
        {data.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
