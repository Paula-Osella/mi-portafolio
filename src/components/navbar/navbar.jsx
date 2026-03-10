import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      {navItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav-item${activeSection === id ? ' active' : ''}`}
        >
          <span className="nav-line" />
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
