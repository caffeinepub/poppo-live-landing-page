interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: '/assets/generated/icon-flame.dim_64x64.png',
    title: 'Go Live Instantly',
    description: 'Start broadcasting to millions in seconds. High-quality streaming with real-time interactions, reactions, and live chat.',
    color: 'from-brand-orange to-brand-red',
  },
  {
    icon: '/assets/generated/icon-star.dim_64x64.png',
    title: 'Earn Real Rewards',
    description: 'Receive virtual gifts from fans that convert to real money. Top streamers earn thousands monthly through our generous reward system.',
    color: 'from-brand-yellow to-brand-orange',
  },
  {
    icon: '/assets/generated/icon-gift.dim_64x64.png',
    title: 'Send & Receive Gifts',
    description: 'Show your appreciation with stunning animated gifts. From roses to supercars — every gift lights up the stream.',
    color: 'from-brand-pink to-brand-red',
  },
  {
    icon: '/assets/generated/icon-mic.dim_64x64.png',
    title: 'Voice & Video Calls',
    description: 'Connect one-on-one or in group calls. Crystal-clear audio and video for intimate conversations with your favorite creators.',
    color: 'from-brand-purple to-brand-pink',
  },
  {
    title: 'PK Battles',
    icon: '/assets/generated/icon-flame.dim_64x64.png',
    description: 'Challenge other streamers to epic PK battles. Compete for audience support and climb the leaderboards in real time.',
    color: 'from-brand-red to-brand-orange',
  },
  {
    title: 'Global Community',
    icon: '/assets/generated/icon-star.dim_64x64.png',
    description: 'Connect with creators and fans from 180+ countries. Discover local talent or explore international content — all in one app.',
    color: 'from-brand-orange to-brand-yellow',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-app-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-pink text-sm font-bold uppercase tracking-widest mb-3">
            Why Poppo Live?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Shine</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Packed with powerful features designed to help you connect, create, and earn.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-pink/10"
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-5 shadow-lg`}>
                <div className="w-full h-full rounded-xl bg-app-dark/80 flex items-center justify-center overflow-hidden">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
