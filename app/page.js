export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Brand</h1>
      <p className="text-lg text-gray-600 mb-8">
        Minimal. Handmade. Unique. Explore our latest collection below.
      </p>
      <a
        href="/products"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        View Products
      </a>
    </main>
  );
}
