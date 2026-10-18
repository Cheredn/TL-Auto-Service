import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#E5E7EB] font-sans antialiased selection:bg-[#F0443E] selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Value & Trust Pillars */}
        <TrustSection />

        {/* Services & Maintenance Offerings */}
        <ServicesSection />

        {/* About Local Automotive Care */}
        <AboutSection />

        {/* Striking Call to Action Banner */}
        <CtaSection />

        {/* Clean Direct Contact, Location & Driving Route Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
