import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white' : 'bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-indigo-500 selection:text-white'}>
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {currentView === 'landing' ? (
        <main>
          <Hero onTryDashboard={() => setCurrentView('dashboard')} />
          <Features />
          <Pricing />
          <Testimonials />
        </main>
      ) : (
        <Dashboard onBackToHome={() => setCurrentView('landing')} />
      )}

      <Footer />
    </div>
  );
}