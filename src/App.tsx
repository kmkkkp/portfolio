import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GameSection from './components/GameSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  // Update title based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navHeight = 80;

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navHeight;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) {
        document.title = `Min Kyu Kim | ${current.charAt(0).toUpperCase() + current.slice(1)}`;
      } else {
        document.title = 'Min Kyu Kim | Frontend Developer';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 pb-20">
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <GameSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;