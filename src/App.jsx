import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';

const App = () => {
  return (
    <div className="flex min-h-screen bg-background text-text font-sans scroll-smooth">
      {/* Lateral izquierdo fijo */}
      <aside className="w-1/3 fixed h-full flex flex-col justify-start px-8 py-12 space-y-16 overflow-y-auto">
        <Hero />
        <Navbar />
        <SocialSidebar />
      </aside>

      {/* Contenido desplazable a la derecha */}
      <main className="ml-[33.3333%] w-2/3 px-6 py-12 space-y-20">
        <About />
        <Projects />
        <Contact />
        <Footer />
        <CustomCursor />
      </main>
    </div>
  );
};

export default App;
