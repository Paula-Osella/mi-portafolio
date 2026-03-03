import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'contact'];

    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labels = {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  };

  return (
    <nav className="flex flex-col gap-6 text-sm sm:text-base font-medium">
      {['about', 'projects', 'contact'].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`group relative inline-block transition-colors duration-300 ${
            activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <span
            className={`block transform transition-transform duration-300 ${
              activeSection === id
                ? 'translate-x-2'
                : 'group-hover:translate-x-2'
            }`}
          >
            {labels[id]}
          </span>
          <span
            className={`block h-[2px] w-6 bg-accent absolute -left-8 top-1/2 transform -translate-y-1/2 origin-left transition-transform duration-300 ${
              activeSection === id
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
