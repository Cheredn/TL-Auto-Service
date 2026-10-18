import { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../config/businessInfo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-[#0B0D11]/80 backdrop-blur-sm border-b border-neutral-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
            aria-label="T & L Auto Service Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-8 decoration-neutral-500 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Location Hint (Desktop only) */}
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
              title="Get directions to 57 Frontenac Drive, Moncton"
            >
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>57 Frontenac Dr</span>
            </a>

            {/* Red Call CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] active:bg-[#B92F2A] rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-[#F0443E]/20"
              aria-label={`Call T & L Auto Service at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Call</span>
              <span className="font-mono tabular-nums">{BUSINESS_INFO.phone}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0E1117] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-neutral-800 space-y-2">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800/60 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#F0443E]" />
                <span>57 Frontenac Drive, Moncton, NB</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
