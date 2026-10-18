import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export function ContactSection() {
  const steps = [
    {
      num: '1',
      title: 'Call Our Shop',
      desc: 'Call (506) 854-9708 to describe your vehicle symptoms or request routine maintenance.',
    },
    {
      num: '2',
      title: 'Drop Off on Frontenac Dr',
      desc: 'Bring your vehicle to 57 Frontenac Drive in Moncton at a scheduled time that suits you.',
    },
    {
      num: '3',
      title: 'Clear Quote & Reliable Work',
      desc: 'We inspect your vehicle, explain the required repair clearly, and get you safely back on the road.',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F0443E] mb-2">
            Visit &amp; Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Get in Touch with T &amp; L Auto Service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            For appointments, estimates, or questions about your vehicle, reach out to our team directly by phone or drop by our Moncton repair shop.
          </p>
        </div>

        {/* 3 Main Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Call Phone */}
          <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#F0443E] mb-6 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Direct Phone Line
              </div>
              <h3 className="text-2xl font-black text-white font-mono tabular-nums mb-3">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The fastest way to book vehicle maintenance, diagnostic scans, or speak directly with our team.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] active:bg-[#B92F2A] rounded-lg shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: Location & Directions */}
          <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#F0443E] mb-6 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Shop Location
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {BUSINESS_INFO.address.street}
              </h3>
              <div className="text-sm text-neutral-300 font-medium mb-3">
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.provinceShort} {BUSINESS_INFO.address.postalCode}
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Centrally located in Moncton, easily accessible for motorists across Greater Moncton and Dieppe.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 hover:text-white border border-neutral-700 rounded-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#F0443E]" />
                <span>Get Directions in Maps</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email & Inquiries */}
          <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#F0443E] mb-6 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Email Address
              </div>
              <h3 className="text-lg font-bold text-white break-all mb-3">
                {BUSINESS_INFO.email}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Send vehicle details, repair questions, or general correspondence directly to our shop email.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 hover:text-white border border-neutral-700 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Location Map Visual Card & Hours Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Map Preview Container (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F0443E] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps Location</span>
                </div>
                <span className="text-xs text-neutral-400">Greater Moncton, NB</span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">
                57 Frontenac Drive, Moncton
              </h4>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                Tap below to open Google Maps on your phone or computer for real-time traffic and turn-by-turn driving instructions directly to our bay.
              </p>
            </div>

            {/* Stylized Interactive Map Action Tile */}
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 block hover:border-neutral-700 group transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F0443E]/10 border border-[#F0443E]/30 flex items-center justify-center text-[#F0443E] shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#F0443E] transition-colors flex items-center gap-1.5">
                      <span>Navigate to 57 Frontenac Drive</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Moncton, NB · T &amp; L Auto Service Inc.
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-neutral-800 group-hover:bg-[#F0443E] rounded-md transition-colors whitespace-nowrap">
                  Open Route
                </span>
              </div>
            </a>
          </div>

          {/* Simple How to Book & Hours Strip (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between">
            <div>
              {/* Hours Notice */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <Clock className="w-4 h-4 text-[#F0443E]" />
                  <span>Business Hours Notice</span>
                </div>
                <div className="text-sm font-semibold text-neutral-200">
                  {BUSINESS_INFO.hoursNote}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white underline font-mono tabular-nums">{BUSINESS_INFO.phone}</a> to verify daily shop opening times and technician availability.
                </p>
              </div>

              {/* 3 Simple Steps to Book */}
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Simple 3-Step Process
              </div>
              <div className="space-y-3.5">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-xs font-bold text-[#F0443E] shrink-0 mt-0.5 font-mono">
                      {step.num}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{step.title}</div>
                      <div className="text-xs text-neutral-400 leading-snug">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Book: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
