import Navigation from "../../components/navigation";
import ProductCard from "../../components/productCard";
export default async function Page({params}) {
    try{
        const {id} = await params;
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {cache: "no-store"});
        console.log(res);
        const data = await res.json();
        return <div className="bg-slate-900 h-screen">
            <Navigation />
            <ProductCard product={data}/>
        </div>;
    }catch(error){
        console.log(error);
        return <div>Something went wrong</div>;
    }
    
}