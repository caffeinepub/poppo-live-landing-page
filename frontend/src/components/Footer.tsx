import { Heart } from 'lucide-react';
import { SiInstagram, SiX, SiFacebook, SiYoutube, SiTiktok } from 'react-icons/si';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Download', 'Pricing'],
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Support: ['Help Center', 'Community', 'Contact Us', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Guidelines'],
};

const socialLinks = [
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiX, label: 'X (Twitter)', href: '#' },
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiYoutube, label: 'YouTube', href: '#' },
  { icon: SiTiktok, label: 'TikTok', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'poppo-live-agency');

  return (
    <footer className="relative bg-app-dark border-t border-white/10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/poppo-logo.dim_200x200.png"
                alt="Poppo Live Agency"
                className="h-12 w-auto object-contain rounded-xl"
              />
              <span className="text-white font-black text-xl tracking-tight leading-tight">
                Poppo Live{' '}
                <span className="gradient-text">Agency</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              The world's most vibrant live streaming platform. Connect, create, and earn with millions of users across 180+ countries.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-pink hover:bg-brand-pink/20 hover:border-brand-pink/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {year} Poppo Live Agency. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1.5">
              Built with{' '}
              <Heart size={13} className="text-brand-pink fill-brand-pink" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-brand-orange transition-colors duration-200 font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
