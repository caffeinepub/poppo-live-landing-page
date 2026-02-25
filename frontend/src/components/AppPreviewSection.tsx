export default function AppPreviewSection() {
  return (
    <section id="preview" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-app-dark to-brand-purple/20" />
      <div className="absolute inset-0 bg-app-dark/60" />

      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-pink/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
              App Preview
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Experience Live
              <br />
              <span className="gradient-text">Like Never Before</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A beautifully designed interface that puts the spotlight on creators. Discover streams, send gifts, and connect with your community — all from the palm of your hand.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4 mb-10">
              {[
                { emoji: '🎯', text: 'Personalized feed based on your interests' },
                { emoji: '💬', text: 'Real-time chat with emoji reactions' },
                { emoji: '🏆', text: 'Live leaderboards and rankings' },
                { emoji: '🎁', text: 'Animated gift effects in HD' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white/80 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Join CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <a
                href="https://invite-vone.com/Q8QN2D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-glow-lg hover:scale-105 transition-transform duration-200"
              >
                Join 55028198 LHT 💖
              </a>
            </div>

            {/* Download badges */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://invite-vone.com/Q8QN2D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 hover:bg-white/15 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-white/50 text-xs">Download on the</div>
                  <div className="text-white font-bold text-sm">App Store</div>
                </div>
              </a>
              <a
                href="https://invite-vone.com/Q8QN2D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 hover:bg-white/15 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 23.76c.3.17.64.22.98.14l12.76-7.37-2.82-2.82-10.92 10.05zM.54 1.18C.2 1.5 0 2.03 0 2.72v18.56c0 .69.2 1.22.55 1.54l.08.07 10.4-10.4v-.24L.62 1.11l-.08.07zM20.1 10.24l-2.72-1.57-3.14 3.14 3.14 3.14 2.74-1.58c.78-.45.78-1.18-.02-1.63v.5zM3.18.24L15.94 7.6l-2.82 2.82L2.2.37c.3-.17.66-.2.98-.13z"/>
                </svg>
                <div>
                  <div className="text-white/50 text-xs">Get it on</div>
                  <div className="text-white font-bold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="shrink-0 order-1 lg:order-2 relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/30 to-brand-orange/30 rounded-full blur-3xl scale-75" />
            <div className="relative">
              <img
                src="/assets/generated/phone-mockup.dim_600x900.png"
                alt="Poppo Live App Preview"
                className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl relative z-10"
              />
              {/* Floating badges */}
              <div className="absolute top-12 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 z-20 hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-semibold">12.4K Live</span>
                </div>
              </div>
              <div className="absolute bottom-24 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 z-20 hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎁</span>
                  <span className="text-white text-xs font-semibold">Gift Sent!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
