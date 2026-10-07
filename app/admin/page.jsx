'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SecretAdminPanel() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Royal Full-Grain Leather Jacket', price: '12,500', category: 'Jackets' },
    { id: 2, name: 'Executive Formal Leather Shoes', price: '6,800', category: 'Shoes' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCat, setNewCat] = useState('Shoes');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newTitle || !newPrice) return alert('সবগুলো ফিল্ড পূরণ করুন!');
    
    const newProduct = {
      id: Date.now(),
      name: newTitle,
      price: newPrice,
      category: newCat
    };

    setProducts([...products, newProduct]);
    setNewTitle('');
    setNewPrice('');
    alert('নতুন প্রোডাক্ট যুক্ত হয়েছে!');
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col md:flex-row font-sans">
      <aside className="w-full md:w-64 bg-black border-r border-amber-600/20 p-6">
        <h2 className="text-xl font-black text-amber-500 tracking-widest uppercase mb-8">
          ROVIX CONTROL
        </h2>
        <nav className="space-y-3 text-xs uppercase font-bold tracking-wider">
          <div className="py-2.5 px-4 rounded bg-amber-500 text-black">📊 Live Dashboard</div>
          <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300">📦 Add/Edit Products</div>
        </nav>
        <div className="mt-12 text-[10px] text-gray-500 border-t border-gray-900 pt-4">
          <Link href="/" className="text-amber-500 underline font-bold">&larr; Return To Main Store</Link>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-8">
        <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold">Admin Management Console</h1>
            <p className="text-xs text-gray-400">এখান থেকে ওয়েবসাইটের প্রোডাক্ট ও ডাটা এডিট করুন</p>
          </div>
        </header>

        <div className="bg-black p-6 rounded-lg border border-amber-600/30 mb-8">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">➕ Add New Product</h2>
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <input 
              type="text" 
              placeholder="Product Name" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-800 rounded text-white" 
            />
            <input 
              type="text" 
              placeholder="Price (BDT)" 
              value={newPrice} 
              onChange={(e) => setNewPrice(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-800 rounded text-white" 
            />
            <select 
              value={newCat} 
              onChange={(e) => setNewCat(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-800 rounded text-white"
            >
              <option value="Shoes">Shoes</option>
              <option value="Wallets">Wallets</option>
              <option value="Jackets">Jackets</option>
              <option value="Bags">Bags</option>
            </select>
            <button type="submit" className="bg-amber-500 text-black font-extrabold uppercase rounded p-3">
              Add Product
            </button>
          </form>
        </div>

        <div className="bg-black p-6 rounded-lg border border-gray-900">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">📦 Manage Active Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900 text-gray-400 uppercase text-[10px]">
                <tr>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {products.map((p) => (
                  <tr key={p.id}>
                    <td className="p-3 font-semibold text-white">{p.name}</td>
                    <td className="p-3 text-amber-400">{p.category}</td>
                    <td className="p-3 font-bold">৳ {p.price}</td>
                    <td className="p-3">
                      <button onClick={() => handleDelete(p.id)} className="bg-red-600/20 text-red-400 border border-red-600/30 px-3 py-1 rounded text-[10px]">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
