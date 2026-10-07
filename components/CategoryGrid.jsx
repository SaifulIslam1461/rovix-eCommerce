import Link from 'next/link';

const categories = [
  { name: 'Shoes', icon: '👞', slug: 'shoes' },
  { name: 'Wallets', icon: '👛', slug: 'wallets' },
  { name: 'Leather Jackets', icon: '🧥', slug: 'leather-jackets' },
  { name: 'Leather Bags', icon: '👜', slug: 'leather-bags' },
  { name: 'Belts', icon: '👔', slug: 'belts' },
  { name: 'Socks', icon: '🧦', slug: 'socks' },
  { name: 'Accessories', icon: '⌚', slug: 'accessories' },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white text-rovix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase font-sans tracking-wider">Featured Categories</h2>
          <div className="w-16 h-1 bg-rovix-gold mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="group p-6 bg-rovix-bgLight border border-rovix-border flex flex-col items-center justify-center text-center transition-all hover:border-rovix-gold hover:shadow-xl">
              <span className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="mt-4 font-semibold text-xs uppercase tracking-wider group-hover:text-rovix-leather">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
