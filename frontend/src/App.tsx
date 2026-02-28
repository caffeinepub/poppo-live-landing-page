import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AppPreviewSection from './components/AppPreviewSection';
import HowItWorksSection from './components/HowItWorksSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export type Page = 'home' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-app-dark text-white overflow-x-hidden">
        <PrivacyPolicy onNavigate={setCurrentPage} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <StatsSection />
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
