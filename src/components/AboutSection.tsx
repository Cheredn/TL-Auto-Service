import { MapPin, Phone, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import shopBayImg from '../assets/images/automotive_garage_bay_1792353136188.jpg';

export function AboutSection() {
  const commitments = [
    'Thorough vehicle evaluations before undertaking repairs',
    'Clear explanations in plain English, never confusing jargon',
    'Practical recommendations focused on your safety and vehicle longevity',
    'Respect for your time and straightforward scheduling',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0E1117] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual workshop shot (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={shopBayImg}
                  alt="Modern clean automotive service bay with lifts and diagnostic equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Authentic Cut Out Circular Logo Badge Floating */}
              <div className="absolute top-4 right-4 z-20">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white shadow-2xl border-2 border-neutral-800 transition-transform hover:scale-105 duration-200">
                  <img
                    src="/tl_logo_badge.svg"
                    alt="T & L Auto Service Inc. official logo badge"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F0443E] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Moncton, New Brunswick</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Located at 57 Frontenac Drive, serving motorists across Greater Moncton and surrounding Westmorland County.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Editorial Story (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F0443E] mb-2">
              Our Approach
            </div>
            
            {/* Headline matching user requirements */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Local Automotive Service in Moncton
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              <p>
                In Atlantic Canada, keeping your vehicle in reliable operating condition is not just a matter of convenience—it is essential for navigating challenging winters, road salt corrosion, and shifting seasonal temperatures.
              </p>
              <p>
                At <span className="text-white font-semibold">T &amp; L Auto Service</span>, we believe that dependable automotive care starts with straightforward communication. Drivers deserve an automotive service shop where recommendations are honest, maintenance is handled thoroughly, and you can speak directly with the team working on your vehicle.
              </p>
              <p>
                Whether it is routine maintenance like fluid exchanges and seasonal tire swaps, or diagnosing a complex mechanical issue, our goal is to provide Greater Moncton drivers with dependable auto care they can rely on day after day.
              </p>
            </div>

            {/* Practical commitments */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                What You Can Expect
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-[#F0443E]/10 border border-[#F0443E]/20 text-[#F0443E] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#F0443E] hover:bg-[#D93832] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (506) 854-9708</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <span>Send a service inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
