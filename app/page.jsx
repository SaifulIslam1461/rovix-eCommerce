import Link from 'next/link';

// ১. হেডার মেনু ও নেভিগেশন
function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-amber-600/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-widest text-amber-500 uppercase">
          ROVIX
        </Link>
        <nav className="hidden md:flex space-x-6 text-xs uppercase tracking-widest font-semibold text-gray-300">
          <Link href="/" className="hover:text-amber-500 transition">Home</Link>
          <Link href="#shop" className="hover:text-amber-500 transition">Shop</Link>
          <Link href="#categories" className="hover:text-amber-500 transition">Categories</Link>
          <Link href="#story" className="hover:text-amber-500 transition">Brand Story</Link>
          <Link href="#contact" className="hover:text-amber-500 transition">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 text-xs font-bold">
          <span className="text-amber-500">CART (0)</span>
          <Link href="/admin" className="px-3 py-1 bg-amber-500 text-black rounded text-[10px] uppercase font-bold hover:bg-amber-400">
            Admin Panel
          </Link>
        </div>
      </div>
    </header>
  );
}

// ২. ফিচারড ক্যাটাগরি
function Categories() {
  const categories = [
    { name: '👞 Shoes', desc: 'Formal, Casual, Boots & Loafers', link: '#shop' },
    { name: '👛 Wallets', desc: 'Bi-Fold, Money Clips & Card Holders', link: '#shop' },
    { name: '🧥 Leather Jackets', desc: 'Biker, Casual & Premium Winter Wear', link: '#shop' },
    { name: '👜 Leather Bags', desc: 'Office, Travel & Messenger Bags', link: '#shop' },
    { name: '👔 Belts & Socks', desc: 'Formal & Casual Full-Grain Belts', link: '#shop' },
    { name: '⌚ Accessories', desc: 'Straps, Keychains, Pouches & Cases', link: '#shop' },
  ];

  return (
    <section id="categories" className="py-16 bg-gray-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-500 text-center uppercase tracking-wider mb-2">
          Featured Categories
        </h2>
        <p className="text-gray-400 text-center text-xs mb-10">Handcrafted Genuine Full-Grain Leather Collections</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="p-6 bg-black border border-gray-800 rounded-lg hover:border-amber-500/50 transition">
              <h3 className="text-xl font-bold text-amber-400">{cat.name}</h3>
              <p className="text-gray-400 text-xs mt-2">{cat.desc}</p>
              <a href={cat.link} className="inline-block mt-4 text-xs font-bold text-amber-500 uppercase tracking-widest hover:underline">
                Explore Items &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ৩. বেস্ট সেলিং প্রোডাক্টস (হোয়াটসঅ্যাপ অর্ডার বাটনসহ)
function Products() {
  const products = [
    { id: 1, name: 'Royal Full-Grain Leather Jacket', price: '12,500', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' },
    { id: 2, name: 'Executive Formal Leather Shoes', price: '6,800', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80' },
    { id: 3, name: 'Handcrafted Messenger Office Bag', price: '8,200', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80' },
    { id: 4, name: 'Classic Bi-Fold Gold Accent Wallet', price: '2,400', img: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80' },
  ];

  const whatsappNumber = "8801620839283";

  return (
    <section id="shop" className="py-16 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-500 text-center uppercase tracking-wider mb-2">
          Best Sellers & New Arrivals
        </h2>
        <p className="text-gray-400 text-center text-xs mb-10">Premium International Standard Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const waMessage = encodeURIComponent(`Hello ROVIX Leather! I want to order: ${p.name} (Price: BDT ${p.price}). Please share details.`);
            const waUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            return (
              <div key={p.id} className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-gray-200">{p.name}</h3>
                    <p className="text-amber-500 font-extrabold mt-1">৳ {p.price}</p>
                  </div>
                </div>
                <div className="p-4 pt-0 space-y-2">
                  <button className="w-full py-2 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400">
                    Add To Cart
                  </button>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-emerald-500"
                  >
                    <span>💬 Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ৪. ব্র্যান্ড স্টোরি ও কাস্টমার রিভিউ
function BrandStory() {
  return (
    <section id="story" className="py-16 bg-gray-950 text-white px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-amber-500 uppercase tracking-widest mb-4">
          ROVIX Brand Story
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          ROVIX represents timeless craftsmanship, pure luxury, and durability. Every leather piece is created with 100% genuine full-grain leather, combining traditional artistry with modern international aesthetics.
        </p>
        <div className="bg-black p-6 border border-amber-600/30 rounded-lg">
          <p className="text-amber-400 text-sm italic mb-2">
            "The jacket quality is top-notch! Genuine leather with incredible finishing. Highly recommended!"
          </p>
          <p className="text-xs text-gray-400 font-bold uppercase">— Verified Customer (Dhaka)</p>
        </div>
      </div>
    </section>
  );
}

// 🖐️ ৫. ফুটার
function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-400 py-12 px-4 border-t border-amber-600/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
        <div>
          <h3 className="text-amber-500 font-black text-lg tracking-widest uppercase mb-3">ROVIX LEATHER</h3>
          <p>Luxury In Every Detail. Crafting international standard full-grain leather goods.</p>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-3">Quick Support</h4>
          <p>WhatsApp: 01620839283</p>
          <p>Email: support@rovixleather.com</p>
          <p>Cash On Delivery & Order Tracking Available</p>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-3">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter Email" className="p-2 bg-gray-900 border border-gray-800 rounded w-full text-white" />
            <button className="px-4 py-2 bg-amber-500 text-black font-bold uppercase rounded">Join</button>
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] text-gray-600 mt-8 pt-4 border-t border-gray-900">
        &copy; {new Date().getFullYear()} ROVIX Luxury Leather. All rights reserved.
      </div>
    </footer>
  );
}

// 🏆 মূল হোমপেজ এক্সপোর্ট
export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[80vh] bg-black flex items-center justify-center text-center px-4 border-b border-gray-800">
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

      <Categories />
      <Products />
      <BrandStory />
      <Footer />
    </div>
  );
}
