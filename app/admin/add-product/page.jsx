"use client";

import { useState } from "react";
import Image from "next/image";

export async function getTillNowProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if(!res.ok){
    throw new Error("Failed to fetch products");
  }
  const resText = await res.text();
  if(!resText){
    return "No products added yet";
  }
  const data = JSON.parse(resText);
  return data;
}

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("../../api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        id: "",
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    }

    setLoading(false);
  }

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/bg-img.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full text-white bg-slate-900/50">
        <div className="h-screen flex justify-center items-center bg-transparent ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-slate-700/50 p-6 rounded-xl w-96"
          >
            <h1 className="text-xl font-bold text-white text-center">
              Add Product
            </h1>
            <label htmlFor="id" className="text-slate-200">
              ID:
            </label>
            <input
              id="id"
              name="id"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
              type="number"
            />
            <label htmlFor="title" className="text-slate-200">
              Title:
            </label>
            <input
              id="title"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
            />
            <label htmlFor="description" className="text-slate-200">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
            />
            <label htmlFor="price" className="text-slate-200">
              Price:
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
            />
            <label htmlFor="category" className="text-slate-200">
              Category:
            </label>
            <input
              id="category"
              name="category"
              placeholder="EnterCategory"
              value={formData.category}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
            />
            <label htmlFor="image" className="text-slate-200">
              Image URL:
            </label>
            <input
              name="image"
              id="image"
              placeholder="Enter Image URL"
              value={formData.image}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-slate-600 placeholder:text-slate-200"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 text-slate-200 py-2 border border-slate-600 bg-slate-800 hover:bg-slate-500 hover:text-slate-50 transition-all duration-300 rounded-lg"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>

            {success && (
              <p className="text-green-400 text-center ">
                Product added successfully!
              </p>
            )}
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
}
