const products = [
  { id: 1, name: "Handmade Shirt", price: "₹1500" },
  { id: 2, name: "Minimal Kurta", price: "₹2200" },
  { id: 3, name: "Organic Wrap", price: "₹1800" },
];

export default function Products() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
