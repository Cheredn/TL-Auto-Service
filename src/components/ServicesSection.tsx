import { useState } from 'react';
import {
  Wrench,
  Droplet,
  ShieldAlert,
  Disc,
  Cpu,
  ThermometerSnowflake,
  Activity,
  CheckCircle2,
  Phone,
  Info,
  CalendarCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import brakeImg from '../assets/images/brake_wheel_service_1792353135055.jpg';
import engineImg from '../assets/images/engine_diagnostics_service_1792353135522.jpg';

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return Wrench;
      case 'Droplet':
        return Droplet;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Disc':
        return Disc;
      case 'Cpu':
        return Cpu;
      case 'ThermometerSnowflake':
        return ThermometerSnowflake;
      case 'Activity':
        return Activity;
      case 'CheckCircle2':
      default:
        return CheckCircle2;
    }
  };

  const categories = ['all', 'Mechanical', 'Safety', 'Diagnostic', 'Preventative', 'Comfort'];

  const filteredServices =
    activeCategory === 'all'
      ? BUSINESS_INFO.services
      : BUSINESS_INFO.services.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F0443E] mb-2">
              Capabilities &amp; Care
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Automotive Services
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-300">
              Reliable diagnostics, routine mechanical upkeep, and safety-critical repairs to keep your vehicle running smoothly in Greater Moncton.
            </p>
          </div>

          {/* Quick Direct Call Button */}
          <div className="shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#F0443E]" />
              <span>Book by Phone: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Category Tabs (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>

        {/* Featured Visual Spotlights (Brake Service & Engine Diagnostics) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          
          {/* Spotlight 1: Brake Service */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group flex flex-col justify-between">
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src={brakeImg}
                alt="Close-up of vehicle disc brake rotor and caliper replacement"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0B0D11]/90 text-white border border-neutral-700/80 backdrop-blur-sm">
                  Safety System Focus
                </span>
              </div>
            </div>

            <div className="p-6 -mt-8 relative z-10 bg-gradient-to-b from-neutral-950/90 to-neutral-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">Brake Service &amp; Safety Checks</h3>
                <span className="text-xs text-neutral-400 font-mono">Brake Pads · Rotors · Fluid</span>
              </div>
              <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                Critical stopping power is vital during Moncton winter thaws, slush, and rainy spells. We inspect pad thickness, caliper sliding pins, and rotor wear to ensure smooth, noise-free braking.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400">Frontenac Dr Bay</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] px-3.5 py-1.5 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Engine Diagnostics */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group flex flex-col justify-between">
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src={engineImg}
                alt="Automotive technician scanning engine diagnostics in bay"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0B0D11]/90 text-white border border-neutral-700/80 backdrop-blur-sm">
                  Precision Troubleshooting
                </span>
              </div>
            </div>

            <div className="p-6 -mt-8 relative z-10 bg-gradient-to-b from-neutral-950/90 to-neutral-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">Engine Diagnostics &amp; Electronics</h3>
                <span className="text-xs text-neutral-400 font-mono">OBD-II · Sensors · Electrical</span>
              </div>
              <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                Check engine light flashing or idling rough? Our diagnostic equipment pinpoints sensor anomalies, ignition timing faults, and electrical gremlins with accurate fault reporting.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400">Diagnostic Scans</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] px-3.5 py-1.5 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 8 Full Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            const isSelected = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#F0443E] group-hover:bg-[#F0443E]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Detailed note on expand */}
                  {isSelected && (
                    <div className="p-3 mb-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 leading-relaxed animate-in fade-in duration-150">
                      {service.detail}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedService(isSelected ? null : service.id)}
                    className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <span>{isSelected ? 'Less' : 'Details'}</span>
                    {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F0443E] hover:text-[#ff5c56] transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call to Book</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom assistance callout */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F0443E]/10 border border-[#F0443E]/20 text-[#F0443E] shrink-0">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have questions about your vehicle's condition?</div>
              <div className="text-xs text-neutral-400">Speak directly with our technician team to describe any noises, warning lights, or maintenance questions.</div>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] rounded-lg transition-colors whitespace-nowrap shadow-md"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
