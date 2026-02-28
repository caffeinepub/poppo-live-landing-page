import { ArrowLeft } from 'lucide-react';
import { Heart } from 'lucide-react';
import { SiInstagram, SiX, SiFacebook, SiYoutube, SiTiktok } from 'react-icons/si';
import type { Page } from '../App';

interface PrivacyPolicyProps {
  onNavigate: (page: Page) => void;
}

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to Poppo Live Agency ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect information about you in a variety of ways. The information we may collect includes:

• Personal Data: Name, email address, phone number, and other identifiers you voluntarily provide when registering or contacting us.
• Usage Data: Information automatically collected when you visit our site, such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.
• Device Data: Information about the device you use to access our services, including hardware model, operating system version, and unique device identifiers.
• Communications: Records of correspondence if you contact us directly.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect for purposes including:

• To provide, operate, and maintain our services.
• To process applications and registrations submitted through our platform.
• To communicate with you, including sending updates, promotional materials, and support responses.
• To improve, personalize, and expand our services.
• To understand and analyze how you use our website.
• To develop new products, services, features, and functionality.
• To comply with legal obligations and enforce our terms.`,
  },
  {
    title: '4. Data Sharing and Disclosure',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• Service Providers: We may share data with trusted third-party vendors who assist us in operating our website and conducting our business, subject to confidentiality agreements.
• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
• Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.
• Protection of Rights: We may disclose information to protect the rights, property, or safety of Poppo Live Agency, our users, or others.`,
  },
  {
    title: '5. Cookies',
    content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.

Types of cookies we use:
• Essential Cookies: Necessary for the website to function properly.
• Analytics Cookies: Help us understand how visitors interact with our website.
• Preference Cookies: Allow the website to remember choices you make.`,
  },
  {
    title: '6. Data Retention',
    content: `We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

When we no longer need your personal data, we will securely delete or anonymize it in accordance with applicable laws and regulations.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: The right to request copies of your personal data.
• Rectification: The right to request correction of inaccurate or incomplete data.
• Erasure: The right to request deletion of your personal data under certain conditions.
• Restriction: The right to request restriction of processing of your personal data.
• Portability: The right to request transfer of your data to another organization or directly to you.
• Objection: The right to object to our processing of your personal data.

To exercise any of these rights, please contact us using the details provided in the Contact section below.`,
  },
  {
    title: '8. Security',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure server infrastructure, and access controls.

However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us immediately.

If we become aware that we have collected personal data from children without verification of parental consent, we will take steps to remove that information from our servers.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our services after any changes constitutes your acceptance of the new Privacy Policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

Poppo Live Agency
Website: livehostingtalents.com
WhatsApp: +91 80009 61803

We will respond to your inquiry as promptly as possible and within the timeframe required by applicable law.`,
  },
];

const socialLinks = [
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiX, label: 'X (Twitter)', href: '#' },
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiYoutube, label: 'YouTube', href: '#' },
  { icon: SiTiktok, label: 'TikTok', href: '#' },
];

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'poppo-live-agency');

  return (
    <div className="min-h-screen bg-app-dark flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-app-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white/70 hover:text-brand-pink transition-colors duration-200 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/poppo-logo.dim_200x200.png"
              alt="Poppo Live Agency"
              className="h-8 w-auto object-contain rounded-lg"
            />
            <span className="text-white font-black text-base tracking-tight hidden sm:block">
              Poppo Live <span className="gradient-text">Agency</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-pink text-xs font-semibold uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Policy content */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
              <p className="text-white/70 text-sm leading-relaxed">
                At <span className="text-brand-pink font-semibold">Poppo Live Agency</span>, your privacy matters to us. This policy describes how we handle your personal information when you use our website and services. We encourage you to read it carefully.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="group">
                  <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-gradient-to-b from-brand-pink to-brand-orange inline-block flex-shrink-0" />
                    {section.title}
                  </h2>
                  <div className="pl-3 border-l border-white/10">
                    {section.content.split('\n').map((paragraph, i) => (
                      paragraph.trim() ? (
                        <p key={i} className="text-white/60 text-sm leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ) : null
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-16 text-center">
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 gradient-btn px-8 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-app-dark border-t border-white/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-white/40 text-sm">
                © {year} Poppo Live Agency. All rights reserved.
              </p>
              <span className="text-white/20 hidden sm:inline">|</span>
              <button
                onClick={() => onNavigate('privacy')}
                className="text-brand-pink text-sm font-medium"
              >
                Privacy Policy
              </button>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-pink hover:bg-brand-pink/20 hover:border-brand-pink/40 transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center sm:justify-end">
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
      </footer>
    </div>
  );
}
