const steps = [
  {
    number: '01',
    title: 'Download the App',
    description: 'Get Poppo Live free from the App Store or Google Play. Available on iOS and Android devices worldwide.',
    emoji: '📱',
  },
  {
    number: '02',
    title: 'Create Your Account',
    description: 'Sign up in seconds with your phone number or social account. Set up your profile and choose your interests.',
    emoji: '✨',
  },
  {
    number: '03',
    title: 'Go Live or Watch',
    description: 'Start your own live stream or explore thousands of live broadcasts from creators around the world.',
    emoji: '🎥',
  },
  {
    number: '04',
    title: 'Connect & Earn',
    description: 'Build your audience, receive virtual gifts, and convert them to real earnings. The more you engage, the more you earn.',
    emoji: '💰',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-app-dark-2">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-pink text-sm font-bold uppercase tracking-widest mb-3">
            Simple Steps
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Getting started with Poppo Live is quick and easy. Be live in under 2 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow opacity-30" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-pink to-brand-orange p-0.5 shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                  <div className="w-full h-full rounded-full bg-app-dark flex flex-col items-center justify-center">
                    <span className="text-2xl mb-0.5">{step.emoji}</span>
                    <span className="text-brand-pink text-xs font-black">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://livehostingtalents.com/apply-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-block px-10 py-4 rounded-full text-white font-bold text-lg shadow-glow-lg hover:scale-105 transition-transform duration-200"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
