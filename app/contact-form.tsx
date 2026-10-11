"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="trade-thanks" role="status">
        <h3>Thank you.</h3>
        <p>Your message has been received. We will get back to you shortly.</p>
        <button type="button" className="btn-secondary-dark" onClick={() => setSent(false)}>
          Send another
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
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>
        Topic
        <select name="topic" defaultValue="general">
          <option value="general">General question</option>
          <option value="test-drive">Book a test drive</option>
          <option value="financing">Financing</option>
          <option value="trade-in">Trade-in</option>
          <option value="service">Service</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn-primary">Send message</button>
    </form>
  );
}
