import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import { Services } from './sections/Services';
import { Team } from './sections/Team';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] antialiased">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Team />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}