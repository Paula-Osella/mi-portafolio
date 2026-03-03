import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start px-0 text-text"
    >
<h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
  Paula Osella
</h1>
<h2 className="text-xl sm:text-2xl text-primary mb-6">
  Desarrolladora Full Stack con foco en el backend
</h2>
      <p className="text-base sm:text-lg max-w-xl text-text mb-10">
        Me especializo en crear sistemas robustos, eficientes y escalables.
        Apasionada por resolver problemas complejos con código limpio y estructurado.
      </p>
    </section>
  );
};

export default Hero;

