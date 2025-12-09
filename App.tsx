/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { MapPinIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'alloystudio') {
        setIsAuthenticated(true);
    } else {
        setError(true);
        setTimeout(() => setError(false), 500);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  if (!isAuthenticated) {
    return (
        <div className="h-full bg-[#050505] flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-xs flex flex-col items-center animate-in fade-in duration-1000">
                <div className="w-64 mb-12 opacity-100">
                   <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/alloy2.svg" alt="ALLOY." className="w-full h-auto" />
                </div>
                <form onSubmit={handleLogin} className="w-full">
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full bg-transparent border-b text-center text-xs tracking-[0.3em] py-3 outline-none transition-all duration-300 font-medium ${error ? 'border-red-900 text-red-500 animate-shake' : 'border-zinc-800 focus:border-zinc-500 text-zinc-300 placeholder-zinc-800'}`}
                      placeholder="ACCESS CODE"
                      autoFocus
                    />
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 animate-in fade-in duration-1000">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="cursor-pointer h-5 md:h-6" onClick={() => scrollToSection('hero')}>
            <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/alloy2.svg" alt="ALLOY." className="h-full w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 text-xs tracking-[0.15em] font-medium uppercase">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Studio</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Visuals</button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-white text-black px-6 py-2.5 hover:bg-zinc-200 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
                 <div className="h-6">
                    <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/alloy1.svg" alt="ALLOY." className="h-full w-auto" />
                 </div>
                 <button onClick={() => setMobileMenuOpen(false)}><XMarkIcon className="w-8 h-8 text-white" /></button>
            </div>
            <div className="flex flex-col space-y-8 text-2xl font-serif italic">
                <button onClick={() => scrollToSection('about')} className="text-left text-zinc-400 hover:text-white transition-colors">The Studio</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-zinc-400 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-zinc-400 hover:text-white transition-colors">Visuals</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-white mt-8">Book Appointment</button>
            </div>
        </div>
      </div>

      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="gallery"><Gallery /></div>
        <div id="contact"><Contact /></div>
      </main>

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <div className="h-5 mb-4">
                <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/alloy2.svg" alt="ALLOY." className="h-full w-auto opacity-100" />
             </div>
             <p className="text-xs text-zinc-500 tracking-widest uppercase">Hair Studio • Lisbon</p>
          </div>
          <div className="flex items-center space-x-2 text-zinc-500 text-sm">
            <MapPinIcon className="w-4 h-4" />
            <span>R. António Maria Cardoso 64, 1200-310 Lisboa</span>
          </div>
          <div className="mt-6 md:mt-0 text-zinc-600 text-xs">
            © {new Date().getFullYear()} Alloy Hair Studio.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
