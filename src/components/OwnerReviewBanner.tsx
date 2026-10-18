import { useState } from 'react';
import {
  Briefcase,
  CheckSquare,
  Server,
  Cloud,
  X,
  ChevronUp,
  ChevronDown,
  Info,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export function OwnerReviewBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        type="button"
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 shadow-xl text-xs flex items-center gap-2 backdrop-blur-md transition-all"
        title="Open Developer Proposal & Launch Checklist"
      >
        <Briefcase className="w-4 h-4 text-[#F0443E]" />
        <span className="hidden sm:inline font-medium">Owner Pitch Notes</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-lg w-[calc(100vw-2rem)] sm:w-auto">
      {/* Collapsed Pill Button */}
      {!isOpen ? (
        <div className="flex items-center gap-2 p-2 rounded-xl bg-neutral-950/95 border border-neutral-800 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 px-2 text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#F0443E]" />
            <span className="font-semibold text-white">Developer Concept Presentation Mode</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span>Review Checklist</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            title="Hide presentation badge"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Expanded Drawer */
        <div className="rounded-2xl bg-neutral-950/98 border border-neutral-800 p-5 shadow-2xl backdrop-blur-lg text-xs text-neutral-300 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-neutral-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#F0443E]" />
                <h4 className="font-bold text-white text-sm">
                  Client Pitch &amp; Pre-Launch Checklist
                </h4>
              </div>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Ready to deliver to the owner of {BUSINESS_INFO.legalName}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
                aria-label="Collapse"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 1: Business Details To Confirm */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-white mb-2">
              <CheckSquare className="w-3.5 h-3.5 text-[#F0443E]" />
              <span>Details to Confirm with Owner Before Launch:</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-neutral-300 pl-5 list-disc marker:text-[#F0443E]">
              <li><strong>Exact Operating Hours:</strong> Confirm weekday open/close times and Saturday availability.</li>
              <li><strong>Certified Inspection Station:</strong> Confirm if shop holds New Brunswick Motor Vehicle Inspection license.</li>
              <li><strong>Final Service List:</strong> Review the 8 featured categories in <code className="text-neutral-400">src/config/businessInfo.ts</code> and adjust any specialties.</li>
              <li><strong>Warranty Policy:</strong> Add any parts/labour warranty statements the owner wishes to highlight.</li>
              <li><strong>Social Media Links:</strong> Insert verified Facebook page or Google Business link.</li>
            </ul>
          </div>

          {/* Section 2: Backend Integration Status */}
          <div className="pt-2 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5 font-semibold text-white mb-2">
              <Server className="w-3.5 h-3.5 text-[#F0443E]" />
              <span>Inquiry Form Backend (Production Delivery):</span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Currently, the form formats and sends inquiries directly to <strong className="text-neutral-300">{BUSINESS_INFO.email}</strong> via client email dispatch. For fully automated background delivery, connect Formspree (free tier 50 submissions/mo), Resend, or Netlify Forms by dropping the endpoint into the form handler in <code className="text-neutral-400">ContactSection.tsx</code>.
            </p>
          </div>

          {/* Section 3: Free Static Hosting Instructions */}
          <div className="pt-2 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5 font-semibold text-white mb-2">
              <Cloud className="w-3.5 h-3.5 text-[#F0443E]" />
              <span>Free Static Hosting Options:</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                <div className="font-semibold text-white">Netlify / Vercel</div>
                <div className="text-neutral-400">Run <code className="text-white">npm run build</code>, push to GitHub, instant custom domain.</div>
              </div>
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                <div className="font-semibold text-white">Cloudflare Pages</div>
                <div className="text-neutral-400">Free SSL, unlimited bandwidth, fast Canadian CDN nodes.</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="text-[11px] text-neutral-400 hover:text-white"
            >
              Hide badge for client walkthrough
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs font-semibold"
            >
              Done Reading
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
