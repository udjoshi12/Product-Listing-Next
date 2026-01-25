"use client";

import { useState, useEffect, useMemo } from "react";
import SearchBar from "@/app/components/searchBar";
import CategoryFilter from "@/app/components/categoryFilter";
import Link from "next/link";
import Product from "@/app/components/product";
import toast from "react-hot-toast";

export default function ProductsClient({ products }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map((p) => p.category));
    return Array.from(uniqueCategories);
  }, [products]);

  const { filteredProducts, notFound } = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (query.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()),
      );
    }

    if (filtered.length === 0) {
      return { filteredProducts: products, notFound: true };
    }

    return { filteredProducts: filtered, notFound: false };
  }, [query, selectedCategory, products]);
  useEffect(() => {
    if (notFound) {
      toast.error("No products match the search query");
    }
  }, [notFound]);
  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <SearchBar onSubmit={setQuery} />
      <div className="flex justify-center items-center bg-transparent">
        {notFound && (
          <p className="text-red-500 font-bold text-xl">
            No products match the search query
          </p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 p-4">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
