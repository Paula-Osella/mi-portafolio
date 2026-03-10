import React, { useState } from 'react';

const navItems = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="mobile-nav">
        <span className="mobile-brand">Paula Osella</span>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileNav;
