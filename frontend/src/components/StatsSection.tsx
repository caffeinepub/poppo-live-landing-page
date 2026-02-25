import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  emoji: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: 'M+', label: 'Active Users', emoji: '👥' },
  { value: 180, suffix: '+', label: 'Countries', emoji: '🌍' },
  { value: 50, suffix: 'M+', label: 'Streams Hosted', emoji: '📡' },
  { value: 500, suffix: 'K+', label: 'Daily Creators', emoji: '🎬' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-pink to-brand-orange" />
      <div className="absolute inset-0 bg-app-dark/70" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-widest mb-3">
            Our Community
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Millions Are Already{' '}
            <span className="text-brand-yellow">Live</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Join the fastest-growing live streaming community in the world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{stat.emoji}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial / Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="text-5xl mb-4">💬</div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
              "Poppo Live changed my life. I went from a regular person to earning a full-time income doing what I love — connecting with people around the world."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Sarah K.</div>
                <div className="text-white/60 text-xs">Top Creator, 2.1M Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
