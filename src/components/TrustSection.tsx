import { Shield, Sparkles, Navigation, CheckCircle2, MessageSquare, Gauge } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export function TrustSection() {
  const pillars = [
    {
      icon: MessageSquare,
      title: 'Direct, Clear Communication',
      description:
        'No guesswork or aggressive upselling. We walk you through what your vehicle needs today, what can wait, and discuss repair options openly before turning a wrench.',
    },
    {
      icon: Gauge,
      title: 'Built for Maritime Driving Conditions',
      description:
        'New Brunswick roads test every component. From road salt corrosion and freezing morning starts to spring frost heaves, our care is tailored to Moncton driving.',
    },
    {
      icon: Shield,
      title: 'Practical Vehicle Maintenance',
      description:
        'Regular maintenance keeps small mechanical problems from becoming costly towing emergencies. We prioritize reliable, dependable vehicle care.',
    },
    {
      icon: Navigation,
      title: 'Accessible Central Location',
      description:
        'Conveniently situated on Frontenac Drive in Moncton, making vehicle drop-offs, diagnostic scans, and scheduled maintenance straightforward.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0E1117] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F0443E] mb-2">
            Why Local Drivers Choose T &amp; L
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Automotive Service Grounded in Practical Trust and Convenience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Whether you need a seasonal tire change, brake maintenance, or an unexpected check engine light inspected, our Moncton shop provides dependable automotive solutions built around your schedule.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 text-[#F0443E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-800/60 flex items-center gap-1.5 text-xs text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F0443E]" />
                  <span>Verified local standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
