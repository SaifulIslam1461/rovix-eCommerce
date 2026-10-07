'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Search, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-rovix-black text-white border-b border-rovix-gold/30 shadow-2xl">
      <div className="bg-rovix-leather text-rovix-gold text-xs py-2 text-center tracking-widest uppercase font-semibold">
        Complimentary Express Worldwide Shipping on Orders Over ৳১০,০০০
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-extrabold tracking-widest text-rovix-gold font-sans uppercase">
              ROVIX<span className="text-xs font-light text-gray-400 block tracking-normal -mt-1">Luxury Leather</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium text-gray-300">
            <Link href="/" className="hover:text-rovix-gold transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-rovix-gold transition-colors">Shop</Link>
            <Link href="/categories" className="hover:text-rovix-gold transition-colors">Categories</Link>
            <Link href="/new-arrivals" className="hover:text-rovix-gold transition-colors">New Arrivals</Link>
            <Link href="/best-sellers" className="hover:text-rovix-gold transition-colors">Best Sellers</Link>
            <Link href="/blog" className="hover:text-rovix-gold transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-rovix-gold transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-rovix-gold transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <button className="hover:text-rovix-gold transition-colors"><Search className="w-5 h-5" /></button>
            <Link href="/wishlist" className="hover:text-rovix-gold transition-colors"><Heart className="w-5 h-5" /></Link>
            <Link href="/cart" className="relative hover:text-rovix-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-rovix-gold text-rovix-black font-bold text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
            <Link href="/account" className="hover:text-rovix-gold transition-colors"><User className="w-5 h-5" /></Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-rovix-gold">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-rovix-dark border-t border-rovix-gold/20 px-4 pt-4 pb-6 space-y-4">
          <Link href="/" className="block text-gray-200 hover:text-rovix-gold uppercase">Home</Link>
          <Link href="/shop" className="block text-gray-200 hover:text-rovix-gold uppercase">Shop</Link>
          <Link href="/categories" className="block text-gray-200 hover:text-rovix-gold uppercase">Categories</Link>
          <Link href="/new-arrivals" className="block text-gray-200 hover:text-rovix-gold uppercase">New Arrivals</Link>
          <Link href="/best-sellers" className="block text-gray-200 hover:text-rovix-gold uppercase">Best Sellers</Link>
          <Link href="/about" className="block text-gray-200 hover:text-rovix-gold uppercase">About Us</Link>
          <Link href="/contact" className="block text-gray-200 hover:text-rovix-gold uppercase">Contact</Link>
        </div>
      )}
    </header>
  );
}
