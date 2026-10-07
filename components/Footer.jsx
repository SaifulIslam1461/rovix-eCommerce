import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rovix-black text-gray-300 border-t border-rovix-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-rovix-gold tracking-widest font-sans uppercase">ROVIX</h2>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            International standard premium handcrafted leather products engineered for ultimate durability, elegance, and distinction.
          </p>
          <div className="mt-6 flex space-x-4 text-rovix-gold">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="w-5 h-5 hover:text-white" /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-rovix-gold uppercase tracking-wider mb-4">Customer Care</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-rovix-gold">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-rovix-gold">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-rovix-gold">Privacy Policy</Link></li>
            <li><Link href="/return-policy" className="hover:text-rovix-gold">Return Policy</Link></li>
            <li><Link href="/shipping-policy" className="hover:text-rovix-gold">Shipping Policy</Link></li>
            <li><Link href="/terms" className="hover:text-rovix-gold">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-rovix-gold uppercase tracking-wider mb-4">Direct Contact</h3>
          <div className="space-y-3 text-xs">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-rovix-gold" /> +880 1620839283</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-rovix-gold" /> support@rovix.com</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rovix-gold" /> Dhaka, Bangladesh</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-rovix-gold uppercase tracking-wider mb-4">Newsletter</h3>
          <p className="text-xs text-gray-400 mb-3">Subscribe to receive exclusive leather care guides & private discounts.</p>
          <form className="flex">
            <input type="email" placeholder="Enter your email" className="bg-rovix-dark text-xs px-3 py-2 border border-gray-700 text-white focus:outline-none focus:border-rovix-gold w-full" />
            <button type="submit" className="bg-rovix-gold text-rovix-black font-bold px-4 text-xs uppercase hover:bg-rovix-goldHover">Join</button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ROVIX Premium Leather. All Rights Reserved.
      </div>
    </footer>
  );
}
