import { Phone, Navigation, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0B0D11] overflow-hidden">
      {/* Background visual accents */}
      <div
        className="absolute inset-0 bg-radial-at-c from-[#F0443E]/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0443E]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Location kicker */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#F0443E]" />
          <span>57 Frontenac Drive · Moncton, New Brunswick</span>
        </div>

        {/* Required Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          Need Service for Your Vehicle?
        </h2>

        {/* Required Supporting Text */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
          Get in touch with our team to discuss your vehicle and ask about availability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] active:bg-[#B92F2A] rounded-lg shadow-xl shadow-[#F0443E]/25 transition-colors whitespace-nowrap"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap"
          >
            <Navigation className="w-4 h-4 text-neutral-400" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </section>
  );
}
