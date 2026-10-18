import { useState } from 'react';
import { Phone, ArrowRight, MapPin, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import heroImage from '../assets/images/hero_automotive_workshop_1792353134377.jpg';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0B0D11]">
      {/* Background architectural glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F0443E]/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location & Moncton Identity (Clean Unboxed Text with typographic separator) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 mb-4 tracking-wide uppercase">
              <span className="text-[#F0443E] font-semibold">Greater Moncton, NB</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#F0443E]" />
                57 Frontenac Drive
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance mb-6">
              Reliable Auto Care.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Built Around You.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {BUSINESS_INFO.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] active:bg-[#B92F2A] rounded-lg shadow-lg shadow-[#F0443E]/20 transition-colors whitespace-nowrap"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call Our Shop</span>
                <span className="text-white/80 font-mono text-sm ml-1 tabular-nums">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Quick trust attributes - Honest, factual indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 text-neutral-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4 text-[#F0443E]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Full-Service Care</div>
                  <div className="text-xs text-neutral-400">Maintenance to mechanical diagnostics</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#F0443E]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Local Convenience</div>
                  <div className="text-xs text-neutral-400">Centrally located on Frontenac Dr</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#F0443E]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Clear Communication</div>
                  <div className="text-xs text-neutral-400">Straight answers before repairs begin</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/60 group">
              
              {!imgError ? (
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Modern vehicle on hydraulic lift inside clean automotive workshop"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11]/90 via-black/20 to-transparent" />
                  
                  {/* Authentic Shop Badge Pill in Top Corner */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-800 shadow-xl">
                      <img
                        src="/tl_logo_badge.svg"
                        alt="T & L Auto Service Inc."
                        className="w-5 h-5 rounded-full object-contain shrink-0"
                      />
                      <span className="text-[11px] font-bold text-white tracking-wide">
                        T &amp; L Auto Service Inc.
                      </span>
                    </div>
                  </div>
                  
                  {/* Subtle caption banner at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">T &amp; L Auto Service</div>
                      <div className="text-[11px] text-neutral-400">57 Frontenac Dr, Moncton, NB</div>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs font-semibold text-[#F0443E] hover:text-white transition-colors"
                    >
                      (506) 854-9708
                    </a>
                  </div>
                </div>
              ) : (
                /* Fallback styled container if image fails */
                <div className="aspect-[4/3] w-full flex flex-col items-center justify-center p-8 bg-neutral-900 text-center">
                  <Wrench className="w-12 h-12 text-[#F0443E] mb-3" />
                  <div className="text-lg font-bold text-white mb-1">T &amp; L Auto Service</div>
                  <div className="text-sm text-neutral-400">57 Frontenac Drive · Moncton, NB</div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
