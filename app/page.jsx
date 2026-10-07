'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [products] = useState([
    { id: 1, name: 'Royal Full-Grain Leather Jacket', price: '12,500', category: 'Jackets', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' },
    { id: 2, name: 'Executive Formal Leather Shoes', price: '6,800', category: 'Shoes', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80' },
    { id: 3, name: 'Handcrafted Messenger Office Bag', price: '8,200', category: 'Bags', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80' },
    { id: 4, name: 'Classic Bi-Fold Gold Accent Wallet', price: '2,400', category: 'Wallets', img: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80' },
  ]);

  const [cart, setCart] = useState([]);
  const whatsappNumber = "8801620839283";

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} কার্টে যুক্ত হয়েছে!`);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* হেডার */}
      <header className="bg-black text-white sticky top-0 z-50 border-b border-amber-600/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-widest text-amber-500 uppercase">
            ROVIX
          </Link>
          <nav className="hidden md:flex space-x-6 text-xs uppercase tracking-widest font-semibold text-gray-300">
            <a href="#home" className="hover:text-amber-500">Home</a>
            <a href="#shop" className="hover:text-amber-500">Shop</a>
            <a href="#categories" className="hover:text-amber-500">Categories</a>
            <a href="#story" className="hover:text-amber-500">Brand Story</a>
            <a href="#contact" className="hover:text-amber-500">Contact</a>
          </nav>
          <div className="flex items-center space-x-4 text-xs font-bold">
            <span className="text-amber-500 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
              🛒 CART ({cart.length})
            </span>
          </div>
        </div>
      </header>

      {/* হিরো ব্যানার */}
      <section id="home" className="relative h-[75vh] bg-black flex items-center justify-center text-center px-4 border-b border-gray-800">
        <div className="max-w-3xl">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">Handcrafted Leather Excellence</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">LUXURY IN EVERY DETAIL</h1>
          <p className="text-gray-300 text-xs md:text-sm mb-8">Shoes, Bags, Jackets, Wallets & Accessories Made From 100% Genuine Full-Grain Leather.</p>
          <div className="flex justify-center gap-4">
            <a href="#shop" className="px-8 py-3 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400">
              Shop Now
            </a>
            <a href="#categories" className="px-8 py-3 border border-amber-500 text-amber-500 font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-500 hover:text-black">
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* ক্যাটাগরি সেকশন */}
      <section id="categories" className="py-16 bg-gray-950 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-amber-500 text-center uppercase tracking-wider mb-2">Featured Categories</h2>
          <p className="text-gray-400 text-center text-xs mb-10">Handcrafted Genuine Full-Grain Leather Collections</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['👞 Shoes', '👛 Wallets', '🧥 Jackets', '👜 Bags', '👔 Belts', '⌚ Accessories'].map((cat, i) => (
              <div key={i} className="p-4 bg-black border border-gray-800 rounded-lg hover:border-amber-500/50 transition">
                <p className="font-bold text-amber-400 text-sm">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* প্রোডাক্ট গ্রিড ও হোয়াটসঅ্যাপ অর্ডার */}
      <section id="shop" className="py-16 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-amber-500 text-center uppercase tracking-wider mb-2">Best Sellers</h2>
          <p className="text-gray-400 text-center text-xs mb-10">Select Your Luxury Leather Product</p>
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
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-emerald-500">
                      💬 Order on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ব্র্যান্ড স্টোরি */}
      <section id="story" className="py-16 bg-gray-950 text-white px-4 border-t border-gray-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-amber-500 uppercase tracking-widest mb-4">ROVIX Brand Story</h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            ROVIX represents timeless craftsmanship, pure luxury, and durability. Every leather piece is created with 100% genuine full-grain leather, combining traditional artistry with modern international aesthetics.
          </p>
        </div>
      </section>

      {/* ফুটার */}
      <footer id="contact" className="bg-black text-gray-400 py-10 px-4 border-t border-amber-600/20 text-xs text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-amber-500 font-black text-lg tracking-widest uppercase mb-2">ROVIX LEATHER</h3>
            <p>Luxury In Every Detail. Crafting international standard full-grain leather goods.</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-2">Contact & Support</h4>
            <p>WhatsApp: 01620839283</p>
            <p>Email: support@rovixleather.com</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-2">Delivery</h4>
            <p>Cash On Delivery Available Nationwide</p>
          </div>
        </div>
        <div className="text-center text-[10px] text-gray-600 mt-8 pt-4 border-t border-gray-900">
          &copy; {new Date().getFullYear()} ROVIX Luxury Leather. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
