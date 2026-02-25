import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 40;

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Preview', href: '#preview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Community', href: '#stats' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-app-dark/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/generated/poppo-logo.dim_200x200.png"
              alt="Poppo Live Agency"
              className="h-10 md:h-12 w-auto object-contain rounded-xl"
            />
            <span className="text-white font-black text-lg md:text-xl tracking-tight leading-tight">
              Poppo Live{' '}
              <span className="gradient-text">Agency</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-brand-pink"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918000961803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white border border-white/20 bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-all duration-200 hover:scale-105"
            >
              <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
              WhatsApp
            </a>
            {/* Apply Now Button */}
            <a
              href="https://livehostingtalents.com/apply-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:scale-105 hover:shadow-glow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-app-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-brand-pink text-base font-medium text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/918000961803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-all duration-200 mt-1"
            >
              <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
              WhatsApp Us
            </a>
            {/* Mobile Apply Now Button */}
            <a
              href="https://livehostingtalents.com/apply-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-5 py-3 rounded-full text-sm font-semibold text-white mt-1 text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
