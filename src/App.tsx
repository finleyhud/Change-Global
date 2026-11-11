import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlobalExpertise } from './components/GlobalExpertise';
import { BeyondTheIndex } from './components/BeyondTheIndex';
import { ActiveManagementPillars } from './components/ActiveManagementPillars';
import { MediaInsights } from './components/MediaInsights';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToOverview = () => {
    const el = document.getElementById('global-expertise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero onWhatWeDoClick={scrollToOverview} />
        <GlobalExpertise />
        <BeyondTheIndex />
        <ActiveManagementPillars />
        <MediaInsights />
      </main>

      <Footer />
    </div>
  );
}
