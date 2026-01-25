export default function Product({product}) {
    return <div className="h-full flex flex-col justify-center items-center w-1/2 p-6 ml-auto mr-auto shadow-lg shadow-slate-900 bg-slate-900/30">
            <img src = {product.image} alt = "product image"/>
            <p className="text-center font-bold text-base text-slate-100">{product.title}</p>
            <p className="text-center font-bold text-lg text-slate-300">₹{product.price}</p>
        </div>;
}