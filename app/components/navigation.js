import Link from "next/link";   

export default function Navigation() {
    return <div  className="flex direction-row justify-between bg-slate-900 ">
        <Link href="/" className="w-1/2 px-2 py-2">Home</Link>
        <Link href="/products" className="w-1/2 px-2 py-2">Products</Link>
    </div>;
}