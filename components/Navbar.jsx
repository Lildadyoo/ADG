import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-adg-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ADG</span>
              </div>
              <span className="font-bold text-adg-blue hidden sm:block">Action for Development Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-adg-blue transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-adg-blue transition-colors">About</Link>
            <Link href="/programs" className="text-gray-700 hover:text-adg-blue transition-colors">Programs</Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-adg-blue transition-colors">Get Involved</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-adg-blue transition-colors">Gallery</Link>
            <Link href="/news" className="text-gray-700 hover:text-adg-blue transition-colors">News</Link>
            <Link href="/contact" className="text-gray-700 hover:text-adg-blue transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/programs" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>Programs</Link>
            <Link href="/get-involved" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>Get Involved</Link>
            <Link href="/gallery" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/news" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>News</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-adg-blue transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

