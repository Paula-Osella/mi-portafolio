import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);

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
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        setError(true);
        setTimeout(() => setError(false), 5000);
      });
  };

  return (
    <section id="contact">
      <p className="section-label">Contacto</p>

      <p className="contact-intro">
        Estoy abierta a <strong>nuevas oportunidades, colaboraciones</strong> o simplemente charlar sobre código. ¡Escribime y te respondo pronto!
      </p>

      <form ref={form} onSubmit={sendEmail}>

        {/* Campos ocultos para completar variables del template */}
        <input type="hidden" name="name" value="Portafolio de Paula" />
        <input type="hidden" name="title" value="Nuevo mensaje desde el portafolio" />

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
          {sent && (
            <span className="success-msg">
              ✓ ¡Mensaje enviado! Te respondo pronto.
            </span>
          )}
          {error && (
            <span style={{ color: '#f87171', fontSize: '0.85rem' }}>
              ✕ Hubo un error. Intentá de nuevo.
            </span>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
