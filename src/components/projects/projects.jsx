import React from 'react';

const projects = [
  {
    title: 'Dermalosophy Alvit Éclat',
    description: 'Landing comercial para marca de dermocosmética. Proyecto en producción real con identidad visual premium, optimización con Astro e integración de envío automático de emails.',
    tech: ['Astro', 'TailwindCSS', 'JavaScript'],
    status: 'En Producción',
    statusColor: '#4ade80',
    repo: 'https://github.com/Paula-Osella/ecommerce-demo',
    demo: 'https://www.dermalosophyalviteclat.com/',
    number: '01',
  },
  {
    title: 'Sistema Bechis',
    description: 'Sitio para emprendimiento gastronómico. Visualización de productos, filtrado de categorías y gestión de precios dinámica. Interfaz moderna y completamente responsive.',
    tech: ['Astro', 'TailwindCSS', 'JavaScript'],
    status: 'Freelance',
    statusColor: '#f59e0b',
    repo: 'https://github.com/Paula-Osella/sistema-bechis',
    demo: 'https://sistema-bechis.vercel.app/',
    number: '02',
  },
  {
    title: 'Calculadora Virtual',
    description: 'App para cliente real que genera facturas en PDF a partir del registro de ventas. Incluye cálculo automático, almacenamiento en caché e interfaz optimizada para uso práctico.',
    tech: ['JavaScript', 'TailwindCSS'],
    status: 'En Producción',
    statusColor: '#4ade80',
    repo: 'https://github.com/Paula-Osella/Calculadora-Virtual',
    demo: 'https://calculadora-mc-negocios.vercel.app/',
    number: '03',
  },
  {
    title: 'Ceramic Lovers Club',
    description: 'E-commerce funcional con React y Firebase. Gestión de carrito, navegación por categorías, persistencia en base de datos NoSQL y experiencia de usuario dinámica.',
    tech: ['React', 'Firebase', 'React-Bootstrap'],
    status: 'Fullstack',
    statusColor: '#818cf8',
    repo: 'https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica',
    demo: 'https://ceramicc-lovers-club.netlify.app/',
    number: '04',
  },
  {
    title: 'Mundo Manga E-commerce',
    description: 'Backend completo con autenticación de usuarios, validaciones, API REST y conexión a MongoDB. Arquitectura orientada al manejo de productos y control desde servidor.',
    tech: ['Node.js', 'MongoDB', 'Handlebars'],
    status: 'Backend',
    statusColor: '#34d399',
    repo: 'https://github.com/Paula-Osella/MundoManga-ecommerce',
    demo: 'https://mundo-manga-7d3n.onrender.com/products',
    number: '05',
  },
  {
    title: 'Aesthetic Pathetic',
    description: 'E-commerce estático enfocado en maquetación y diseño visual. Desarrollado con HTML, CSS y SASS priorizando estructura semántica y experiencia estética moderna.',
    tech: ['HTML', 'CSS', 'SASS'],
    status: 'Frontend',
    statusColor: '#f472b6',
    repo: 'https://github.com/Paula-Osella/Aesthetic-Pathetic-Ecomerce',
    demo: 'https://aesthetic-pathetic.vercel.app/',
    number: '06',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-label">Proyectos</p>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-number">{project.number}</span>

            <div className="project-info">
              <div className="project-header">
                <span className="project-title">{project.title}</span>
                <span
                  className="project-status"
                  style={{
                    color: project.statusColor,
                    background: `${project.statusColor}18`,
                    border: `1px solid ${project.statusColor}30`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Links movidos adentro de project-info, fuera del ::before */}
              <div className="project-links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  ↗ GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  ↗ Demo
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
