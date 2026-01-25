export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6 p-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 mt-4 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-slate-900 text-slate-100"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-slate-100"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
