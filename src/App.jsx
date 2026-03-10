import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import MobileNav from './components/Mobilenav/MobileNav';

const App = () => {
  return (
    <>
      <CustomCursor />
      <MobileNav />

      <div className="layout">
        {/* Sidebar fijo */}
        <aside className="sidebar">
          <div className="sidebar-top">
            <Hero />
            <Navbar />
          </div>
          <SocialSidebar />
        </aside>

        {/* Contenido principal */}
        <main className="main">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
