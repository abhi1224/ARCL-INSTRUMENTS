import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certs' },
    { name: 'Contact', href: '#contact' },
  ];

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", query);
    // You can redirect, filter, or fetch data here
  };
  return (
    <nav className="h-16">
      <div className="px-4 py-2 bg-white shadow-md fixed w-full top-0 left-0 z-50 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">ARCL</div>

        {/* Search bar (visible always) */}
       <form onSubmit={handleSearch} className="relative max-w-xs w-full mx-4 overflow-hidden">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-4 pr-10 py-2.5 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />
      <button type="submit" className="absolute right-0 bottom-0 top-0  px-3  bg-zinc-200  hover:bg-zinc-300">
        Search
      </button>
    </form>
        {/* Hamburger menu (visible only on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-zinc-100 hover:bg-zinc-200 font-semibold border-b-4 px-4 py-2 flex items-center justify-center gap-2.5 transition"
          >
            Request Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg z-50 p-4 flex flex-col items-start space-y-4">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-700 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-zinc-200 flex px-4 py-2 rounded-md hover:bg-zinc-300 transition text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
