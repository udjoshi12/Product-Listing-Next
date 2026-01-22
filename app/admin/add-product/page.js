"use client";

import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
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
    console.log(formData);
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
        id: null,
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
    <div className="h-screen flex justify-center items-center bg-slate-900 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-slate-700 p-6 rounded-xl w-96"
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
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
          type="number"
        />
        <label htmlFor="title" className="text-slate-200">
          Title:
        </label>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
        />
        <label htmlFor="description" className="text-slate-200">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
        />
        <label htmlFor="price" className="text-slate-200">
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
        />
        <label htmlFor="category" className="text-slate-200">
          Category:
        </label>
        <input
          id="category"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
        />
        <label htmlFor="image" className="text-slate-200">
          Image URL:
        </label>
        <input
          name="image"
          id="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-600"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 text-slate-70 py-2 border border-slate-600 bg-slate-800 hover:bg-slate-500 hover:text-slate-50 transition-all duration-300 rounded-lg"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>

        {success && (
          <p className="text-green-400 text-center ">
            Product added successfully!
          </p>
        )}
      </form>
    </div>
  );
}
