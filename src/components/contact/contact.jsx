import React, { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <p className="section-label">Contacto</p>

      <p className="contact-intro">
        Estoy abierta a <strong>nuevas oportunidades, colaboraciones</strong> o simplemente charlar sobre código. ¡Escribime y te respondo pronto!
      </p>

      <form ref={form} onSubmit={sendEmail}>

        {/* Web3Forms access key */}
        <input type="hidden" name="access_key" value="62429d1c-7055-4504-9b8b-e4643a24f2b6" />
        <input type="hidden" name="subject" value="Nuevo mensaje desde tu portafolio" />

        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
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
            name="message"
            rows="5"
            required
            placeholder="¿En qué puedo ayudarte?"
            className="form-input"
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar mensaje ↗'}
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
