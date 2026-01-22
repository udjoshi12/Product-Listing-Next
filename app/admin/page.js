import Link from "next/link";

export default function Admin() {
  return (
    <div className="h-screen bg-slate-900 flex flex-col py-10 items-center">
      <h1>Admin</h1>
      <div className="w-1/8">
        <Link
          href="/admin/add-product"
          className="bg-slate-700 text-slate-100 px-6 py-2 rounded-lg "
        >
          Add Product
        </Link>
      </div>
    </div>
  );
}
