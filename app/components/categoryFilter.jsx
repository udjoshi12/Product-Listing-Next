export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6 bg-slate-900 p-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
