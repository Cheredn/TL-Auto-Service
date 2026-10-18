import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../config/businessInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07090C] border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block" aria-label="T & L Auto Service">
              <Logo size="md" />
            </a>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your dependable destination for automotive maintenance, diagnostics, and mechanical care in Greater Moncton, New Brunswick.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F0443E]" />
                <span>57 Frontenac Drive, Moncton, NB</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Automotive Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Shop Contact
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F0443E] shrink-0 mt-0.5" />
                <span>57 Frontenac Drive, Moncton, NB, E1A 4N5</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F0443E] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-white font-mono tabular-nums transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F0443E] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Official Social Media Slot (Verified presence note) */}
            <div className="pt-2 text-[11px] text-neutral-400">
              <span>Official social profiles can be linked here upon owner confirmation.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Location Notice (Strictly no developer credit on customer-facing view) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {currentYear} {BUSINESS_INFO.legalName}. All rights reserved. Moncton, New Brunswick.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Canadian Automotive Service Standard</span>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-neutral-300 transition-colors">
              Book Inquiries
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
