import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryGrid from '../components/CategoryGrid';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-rovix-bgLight min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[80vh] bg-rovix-black text-white flex items-center justify-center text-center px-4">
        <div className="z-10 max-w-3xl">
          <p className="text-rovix-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Handcrafted Leather Excellence</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-wide">LUXURY IN EVERY DETAIL</h1>
          <p className="mt-4 text-gray-300 text-sm font-light">Explore handcrafted shoes, bags, jackets, and accessories made from 100% genuine full-grain leather.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/shop" className="px-8 py-3 bg-rovix-gold text-rovix-black font-bold uppercase text-xs tracking-wider hover:bg-rovix-goldHover">Shop Now</Link>
            <Link href="/categories" className="px-8 py-3 border border-rovix-gold text-rovix-gold font-bold uppercase text-xs tracking-wider hover:bg-rovix-gold hover:text-rovix-black">Explore Collection</Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <CategoryGrid />

      <Footer />
    </div>
  );
}
