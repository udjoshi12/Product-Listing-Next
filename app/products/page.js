import Link from "next/link";
import Navigation from "../components/navigation";
import Product from "../components/product";

export default async function Page() {
    const res = await fetch("https://fakestoreapi.com/products", {cache: "no-store"});
    const data = await res.json();
    return <div className="bg-slate-900">
            <Navigation />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center items-center h-100vh" >
                {data.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}><Product key={product.id} product={product}/></Link>
                ))}
            </div>
    </div>;
}