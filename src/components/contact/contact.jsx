import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dm4q4is',
        'template_vglec6p',
        form.current,
        'gcbEB2wW1kLoICuTX'
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">¿Charlamos?</h2>
      <p className="text-text/70 mb-10">Estoy abierta a nuevas oportunidades, colaboraciones o simplemente charlar sobre código. ¡Escribime!</p>

      <div className="bg-surface/50 p-8 rounded-lg shadow-xl backdrop-blur-md text-left">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-text">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="w-full p-3 rounded bg-background/40 text-text border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-text">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="w-full p-3 rounded bg-background/40 text-text border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-text">Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              required
              placeholder="¿En qué puedo ayudarte?"
              className="w-full p-3 rounded bg-background/40 text-text border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-white px-6 py-2 rounded-md hover:bg-primary hover:scale-105 transition-transform shadow-md"
            >
              Enviar mensaje
            </button>
            {sent && (
              <p className="text-green-500 mt-4">¡Mensaje enviado correctamente!</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
