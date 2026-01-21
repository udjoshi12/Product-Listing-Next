import Navigation from "../components/navigation";
import Product from "../components/product";

export default async function Page() {
    const res = await fetch("https://fakestoreapi.com/products", {cache: "no-store"});
    const data = await res.json();
    return <div className="bg-slate-900">
            <Navigation />
            <h1>This is the products page</h1>
            <button className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center items-center">
                {data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </button>
        <div>       {/*this holds product details*/}
            
        </div>
    </div>;
}