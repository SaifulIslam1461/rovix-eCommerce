import Link from 'next/link';

// ১. হেডার কম্পোনেন্ট
function Header() {
  return (
    <header className="bg-rovix-black text-white py-4 px-6 sticky top-0 z-50 border-b border-rovix-gold/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* লোগো */}
        <Link href="/" className="text-2xl font-extrabold tracking-widest text-rovix-gold uppercase">
          ROVIX
        </Link>

        {/* নেভিগেশন লিংক */}
        <nav className="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-semibold">
          <Link href="/" className="hover:text-rovix-gold transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-rovix-gold transition-colors">Shop</Link>
          <Link href="/categories" className="hover:text-rovix-gold transition-colors">Categories</Link>
          <Link href="/about" className="hover:text-rovix-gold transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-rovix-gold transition-colors">Contact</Link>
        </nav>

        {/* অ্যাকশন আইকন/বাটন */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-xs uppercase font-bold text-rovix-gold hover:underline">
            Cart (0)
          </Link>
        </div>
      </div>
    </header>
  );
}

// ২. ক্যাটাগরি গ্রিড কম্পোনেন্ট
function CategoryGrid() {
  const categories = [
    {
      id: 1,
      title: 'Leather Shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=shoes',
    },
    {
      id: 2,
      title: 'Handcrafted Bags',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=bags',
    },
    {
      id: 3,
      title: 'Leather Jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=jackets',
    },
    {
      id: 4,
      title: 'Belts & Accessories',
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
      link: '/shop?category=accessories',
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-rovix-black tracking-wide uppercase">
          Shop By Category
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Discover our curated collections of premium full-grain leather products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.link}
            className="group relative h-96 overflow-hidden rounded-lg shadow-lg block"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white tracking-wider">
                {cat.title}
              </h3>
              <span className="text-xs text-rovix-gold font-bold uppercase tracking-widest mt-2 group-hover:underline">
                Explore Now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ৩. ফুটার কম্পোনেন্ট
function Footer() {
  return (
    <footer className="bg-rovix-black text-gray-400 py-12 px-6 mt-auto border-t border-rovix-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-4">
            ROVIX LEATHER
          </h3>
          <p className="text-xs leading-relaxed">
            Crafting luxury, high-quality, 100% full-grain leather goods tailored for elegance and durability.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/shop" className="hover:text-rovix-gold">Shop All</Link></li>
            <li><Link href="/categories" className="hover:text-rovix-gold">Categories</Link></li>
            <li><Link href="/about" className="hover:text-rovix-gold">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-rovix-gold">Contact Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
            Customer Care
          </h4>
          <p className="text-xs">Email: support@rovixleather.com</p>
          <p className="text-xs mt-1">Authentic Genuine Leather Guarantee</p>
        </div>
      </div>
      <div className="text-center text-xs mt-12 pt-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} ROVIX Leather. All rights reserved.
      </div>
    </footer>
  );
}

// ৪. মূল হোম পেজ (Main Export)
export default function HomePage() {
  return (
    <div className="bg-rovix-bgLight min-h-screen flex flex-col">
      {/* হেডার */}
      <Header />

      {/* হিরো ব্যানার */}
      <section className="relative h-[80vh] bg-rovix-black text-white flex items-center justify-center text-center px-4">
        <div className="z-10 max-w-3xl">
          <p className="text-rovix-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">
            Handcrafted Leather Excellence
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-wide">
            LUXURY IN EVERY DETAIL
          </h1>
          <p className="mt-4 text-gray-300 text-sm font-light">
            Explore handcrafted shoes, bags, jackets, and accessories made from 100% genuine full-grain leather.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-3 bg-rovix-gold text-rovix-black font-bold uppercase text-xs tracking-wider hover:bg-rovix-goldHover transition-all"
            >
              Shop Now
            </Link>
            <Link
              href="/categories"
              className="px-8 py-3 border border-rovix-gold text-rovix-gold font-bold uppercase text-xs tracking-wider hover:bg-rovix-gold hover:text-rovix-black transition-all"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ক্যাটাগরি সেকশন (ছবিসহ) */}
      <CategoryGrid />

      {/* ফুটার */}
      <Footer />
    </div>
  );
}
