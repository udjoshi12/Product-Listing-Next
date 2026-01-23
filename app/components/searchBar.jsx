"use client";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-4 flex w-1/2 sm:w-1/4 items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#e2e8f0"
        className="h-5 w-5 shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 115.196 5.196a7.5 7.5 0 0110.607 10.607z"
        />
      </svg>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search items"
        className="w-full bg-transparent px-2 py-1 text-slate-200 placeholder:text-slate-400 focus:outline-none"
      />
    </form>
  );
}
