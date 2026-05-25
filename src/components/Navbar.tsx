import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Tentang', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Persyaratan', href: '#requirements' },
    { name: 'Mengapa Kami', href: '#reasons' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-12 flex items-center justify-between h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2c060b]/70 backdrop-blur-xl shadow-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative">
            <img
              src="https://studitimurtengah.com/wp-content/uploads/2022/03/FAV.png"
              alt="Markaz Qur'an Logo"
              referrerPolicy="no-referrer"
              className="h-11 w-11 rounded-full object-contain border-2 border-gold-400 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-ping -z-10 opacity-75 hidden group-hover:block" />
          </div>
          <div className="text-left">
            <h1 className="text-white font-serif text-lg font-bold tracking-tight leading-none group-hover:text-gold-400 transition-colors">
              Markaz Qur'an
            </h1>
            <span className="block text-[0.6rem] font-sans font-semibold tracking-widest text-gold-400 uppercase mt-1">
              School of Qur'an
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-white/85 hover:text-gold-400 font-sans text-sm font-medium transition-colors relative py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-maroon-950 px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-gold-900/10 hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Daftar Sekarang
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-gold-400 p-2 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full bg-[#2c060b]/95 backdrop-blur-2xl z-40 border-t border-white/10 px-6 py-8 flex flex-col gap-5 shadow-2xl lg:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-white/80 hover:text-gold-400 font-medium text-base py-3 border-b border-white/5 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold py-3.5 rounded-xl mt-4"
            >
              <MessageSquare className="w-5 h-5" />
              Daftar Sekarang via Form
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
