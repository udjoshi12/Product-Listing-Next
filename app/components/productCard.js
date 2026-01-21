export default function ProductCard({product}) {
    return <div className="h-full flex gap-4 flex-col justify-center items-center w-1/2 p-6 ml-auto mr-auto shadow-lg shadow-slate-700/50">
            <img src = {product.image} alt = "product image"/>
            <p className="text-center font-bold text-base text-slate-100">{product.title}</p>
            <p className="text-center font-bold text-lg text-slate-300">₹{product.price}</p>
            <p className="text-center font-bold text-base text-slate-300">About the product: <br/>{product.description}<br/></p>
            <p className="text-center font-bold text-base text-slate-300">Category: {product.category}<br/></p>
            <p className="text-center font-bold text-base text-slate-300">Rating: {product.rating.rate}<br/></p>
            <p className="text-center font-bold text-base text-slate-300">Number of ratings: {product.rating.count}<br/></p>
            <p></p>
        </div>;
}