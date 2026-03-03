import React from 'react';

const projects = [
  {
    title: 'Dermalosophy Alvit Éclat',
    description:
      '🌿 Landing comercial desarrollada para marca de dermocosmética. Proyecto en producción real con identidad visual premium, optimización de rendimiento con Astro e integración de envío automático de emails. Diseño 100% responsive.',
    tech: ['Astro', 'TailwindCSS', 'JavaScript'],
    status: '🌿 En Producción',
    image: '/images/dermalosophy.jpg',
    repo: 'https://github.com/Paula-Osella/ecommerce-demo',
    demo: 'https://www.dermalosophyalviteclat.com/',
  },
  {
    title: 'Sistema Bechis',
    description:
      '🍔 Sitio demo desarrollado para emprendimiento gastronómico. Permite visualizar productos, filtrar categorías y gestionar precios dinámicamente. Interfaz moderna, clara y completamente responsive.',
    tech: ['Astro', 'TailwindCSS', 'JavaScript'],
    status: '🍔 Proyecto Freelance',
    image: '/images/bechis-freelance.jpg',
    repo: 'https://github.com/Paula-Osella/sistema-bechis',
    demo: 'https://sistema-bechis.vercel.app/',
  },
  {
    title: 'Calculadora Virtual',
    description:
      '💼 Aplicación desarrollada para cliente real que permite generar facturas en PDF a partir del registro de ventas. Incluye cálculo automático, almacenamiento en caché e interfaz optimizada para uso práctico.',
    tech: ['JavaScript', 'TailwindCSS'],
    status: '🌿 En Producción',
    image: '/images/calculadora.jpg',
    repo: 'https://github.com/Paula-Osella/Calculadora-Virtual',
    demo: 'https://calculadora-mc-negocios.vercel.app/',
  },
  {
    title: 'Ceramic Lovers Club',
    description:
      '🛍 E-commerce funcional desarrollado con React y Firebase. Incluye gestión de carrito, navegación por categorías, persistencia en base de datos NoSQL y experiencia de usuario dinámica.',
    tech: ['React', 'Firebase', 'React-Bootstrap'],
    status: '🛍 Fullstack',
    image: '/images/ceramic.jpg',
    repo: 'https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica',
    demo: 'https://ceramicc-lovers-club.netlify.app/',
  },
  {
    title: 'Mundo Manga E-commerce',
    description:
      '🛠 Backend completo para tienda online con autenticación de usuarios, validaciones, API REST y conexión a MongoDB. Arquitectura orientada a manejo de productos y control desde servidor.',
    tech: ['Node.js', 'MongoDB', 'Handlebars'],
    status: '🛠 Backend',
    image: '/images/manga.jpg',
    repo: 'https://github.com/Paula-Osella/MundoManga-ecommerce',
    demo: 'https://mundo-manga-7d3n.onrender.com/products',
  },
  {
    title: 'Aesthetic Pathetic E-commerce',
    description:
      '💄 E-commerce estático enfocado en maquetación y diseño visual. Desarrollado con HTML, CSS y SASS, priorizando estructura semántica y experiencia estética moderna.',
    tech: ['HTML', 'CSS', 'SASS'],
    status: '💄 Frontend',
    image: '/images/aesthetic.jpg',
    repo: 'https://github.com/Paula-Osella/Aesthetic-Pathetic-Ecomerce',
    demo: 'https://aesthetic-pathetic.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-primary">
        🚀 Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Imagen */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 space-y-4">
              {/* Status Badge */}
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                {project.status}
              </span>

              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-text/80">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-background px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 pt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  💻 Repositorio
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  🌐 Ver Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
