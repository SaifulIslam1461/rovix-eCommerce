'use client';
import { useState } from 'react';

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const whatsappNumber = "8801620839283";

  const products = [
    { id: 1, name: 'Royal Full-Grain Leather Jacket', price: '12,500', category: 'Jackets', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' },
    { id: 2, name: 'Executive Formal Leather Shoes', price: '6,800', category: 'Shoes', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80' },
    { id: 3, name: 'Handcrafted Messenger Office Bag', price: '8,200', category: 'Bags', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80' },
    { id: 4, name: 'Classic Bi-Fold Gold Accent Wallet', price: '2,400', category: 'Wallets', img: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} কার্টে যুক্ত হয়েছে!`);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-black tracking-widest text-amber-500 uppercase">
            ROVIX
          </span>
          <div className="flex items-center space-x-4 text-xs font-bold">
            <span className="text-amber-500 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
              🛒 CART ({cart.length})
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black flex items-center justify-center text-center px-4 border-b border-gray-800">
        <div className="max-w-3xl">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">Handcrafted Leather Excellence</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">LUXURY IN EVERY DETAIL</h1>
          <p className="text-gray-300 text-xs md:text-sm mb-8">Shoes, Bags, Jackets & Wallets Made From 100% Genuine Full-Grain Leather.</p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-amber-500 text-center uppercase tracking-wider mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => {
              const waMsg = encodeURIComponent(`Hello ROVIX! I want to order: ${p.name} (Price: BDT ${p.price}).`);
              const waUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

              return (
                <div key={p.id} className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between">
                  <div>
                    <img src={p.img} alt={p.name} className="w-full h-60 object-cover" />
                    <div className="p-4">
                      <span className="text-[10px] text-amber-500 uppercase font-bold">{p.category}</span>
                      <h3 className="font-bold text-sm text-gray-200 mt-1">{p.name}</h3>
                      <p className="text-amber-400 font-extrabold mt-1">৳ {p.price}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 space-y-2">
                    <button onClick={() => addToCart(p)} className="w-full py-2 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400">
                      Add To Cart
                    </button>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 text-center block">
                      💬 Order on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
