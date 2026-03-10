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
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
      });
  };

  return (
    <section id="contact">
      <p className="section-label">Contacto</p>

      <p className="contact-intro">
        Estoy abierta a <strong>nuevas oportunidades, colaboraciones</strong> o simplemente charlar sobre código. ¡Escribime y te respondo pronto!
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            placeholder="tu@email.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            rows="5"
            required
            placeholder="¿En qué puedo ayudarte?"
            className="form-input"
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button type="submit" className="btn-submit">
            Enviar mensaje ↗
          </button>
          {sent && <span className="success-msg">¡Mensaje enviado correctamente!</span>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
