"use client";
export default async function Page({id}){
    try{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        return <div>
            <Product product={data} />
        </div>
    }
    catch(error){
        console.log(error);
    }
    return <div>
        
    </div>
}