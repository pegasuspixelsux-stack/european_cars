"use client";

import { useState } from "react";

export function ContactForm({ defaultTopic = "general", defaultMessage = "" }: { defaultTopic?: string; defaultMessage?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="trade-thanks" role="status">
        <h3>Gracias.</h3>
        <p>Recibimos tu mensaje. Te responderemos a la brevedad.</p>
        <button type="button" className="btn-secondary-dark" onClick={() => setSent(false)}>
          Enviar otro
        </button>
      </div>
    );
  }

  return (
    <form
      className="trade-form"
      onSubmit={(e) => {
        // Demo only: nothing is sent anywhere yet. Wire to email/CRM before launch.
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-row">
        <label>Nombre completo<input name="name" required autoComplete="name" /></label>
        <label>Teléfono<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Correo electrónico<input name="email" type="email" required autoComplete="email" /></label>
      <label>
        Tema
        <select name="topic" defaultValue={defaultTopic}>
          <option value="general">Consulta general</option>
          <option value="test-drive">Agendar una prueba de manejo</option>
          <option value="financing">Financiación</option>
          <option value="trade-in">Permuta</option>
          <option value="service">Servicio</option>
        </select>
      </label>
      <label>
        Mensaje
        <textarea name="message" rows={5} required defaultValue={defaultMessage} />
      </label>
      <button type="submit" className="btn-primary">Enviar mensaje</button>
    </form>
  );
}
