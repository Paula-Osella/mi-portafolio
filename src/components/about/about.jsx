import React from 'react';

const skills = [
  'React', 'Node.js', 'MongoDB', 'Astro',
  'TailwindCSS', 'JavaScript', 'Firebase',
  'PostgreSQL', 'Git', 'REST APIs',
];

const About = () => {
  return (
    <section id="about">
      <p className="section-label">Sobre mí</p>

      <p className="about-text">
        Soy desarrolladora <strong>Full Stack con foco en el backend</strong>. Aunque disfruto creando interfaces, mi verdadero interés está en construir sistemas robustos, conectar bases de datos, estructurar lógicas complejas y asegurarme de que todo funcione como debe.
      </p>
      <p className="about-text">
        Actualmente trabajo en atención al cliente en redes sociales, mientras desarrollo proyectos como <strong>freelance</strong>. Me gradué de un bootcamp Full Stack y sigo formándome constantemente, porque amo aprender y sé que la programación evoluciona sin pausa.
      </p>
      <p className="about-text">
        Me gusta escribir código <strong>limpio, modular y preparado para escalar</strong>. Disfruto particularmente desarrollando autenticaciones, validaciones, sistemas de cobro con generación de PDFs y realizando pruebas que aseguren la calidad del software.
      </p>
      <p className="about-text">
        En mi tiempo libre suelo programar por gusto, explorar nuevas ideas, diseñar, estudiar, hacer trekking o perderme en mapas. Me motiva la curiosidad y el deseo constante de mejorar.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
