// import Navigation from "../../components/navigation";
import ProductCard from "../../components/productCard";
import Image from "next/image";

export async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (res.ok) {
    const text = await res.text();
    if (text) {
      return JSON.parse(text);
    }
  }
  const resLocal = await fetch(`http://localhost:3000/api/products`);

  if (!resLocal.ok) {
    throw new Error("Failed to fetch local products");
  }

  const localText = await resLocal.text();

  if (!localText) {
    throw new Error("Local products API returned empty response");
  }

  const localProducts = JSON.parse(localText);

  const product = localProducts.find((p) => p.id.toString() === id);

  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  return product;
}

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const resLocal = await fetch("http://localhost:3000/api/products");
  const localProducts = await resLocal.json();
  localProducts.map((item) => products.push(item));
  // console.log("this is the product thing in the page[id] page", products);
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div className="bg-transparent min-h-full">
      <div className="relative h-screen w-full">
        <Image
          src="/bg-img.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center justify-center h-full text-white backdrop-blur-sm">
          <ProductCard
            product={await getProduct(id)}
            className="ml-auto mr-auto"
          />
        </div>
      </div>
    </div>
  );
}
