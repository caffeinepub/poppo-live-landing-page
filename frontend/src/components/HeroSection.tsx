import { Play } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1440x900.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-app-dark/60 via-app-dark/40 to-app-dark" />
      </div>

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
          <span className="text-sm text-white/90 font-medium">🔴 Live Now — Join Millions Worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
          <span className="text-white">Go Live.</span>
          <br />
          <span className="gradient-text">Make Friends.</span>
          <br />
          <span className="text-white">Feel the Fun.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join over <span className="text-brand-pink font-semibold">20 million users</span> across 180+ countries on{' '}
          <span className="text-white font-semibold">Poppo Live Agency</span> — the world's most vibrant live streaming platform.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* Become Poppo Agent Button */}
          <a
            href="https://invite-vone.com/zearDh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg shadow-glow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto justify-center"
          >
            ✨ Become Poppo Agent
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918000961803"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center border border-white/20 bg-[#25D366]/20 hover:bg-[#25D366]/30 backdrop-blur-sm"
          >
            <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>

        {/* Store Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://invite-vone.com/Q8QN2D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold text-base border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="https://invite-vone.com/Q8QN2D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold text-base border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76c.3.17.64.22.98.14l12.76-7.37-2.82-2.82-10.92 10.05zM.54 1.18C.2 1.5 0 2.03 0 2.72v18.56c0 .69.2 1.22.55 1.54l.08.07 10.4-10.4v-.24L.62 1.11l-.08.07zM20.1 10.24l-2.72-1.57-3.14 3.14 3.14 3.14 2.74-1.58c.78-.45.78-1.18-.02-1.63v.5zM3.18.24L15.94 7.6l-2.82 2.82L2.2.37c.3-.17.66-.2.98-.13z"/>
            </svg>
            Google Play
          </a>
        </div>

        {/* Watch Demo */}
        <button
          onClick={() => scrollToSection('#preview')}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 group"
        >
          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink/10 transition-all duration-200">
            <Play size={16} className="ml-0.5" />
          </span>
          <span className="text-sm font-medium">See App Preview</span>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/0 to-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
