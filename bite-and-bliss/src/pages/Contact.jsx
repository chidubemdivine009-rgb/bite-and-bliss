import React from "react";
import { useState } from "react";

const initialForm = { fullName: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.values(form).some(value => !value.trim())) {
      setFeedback("Please complete every field before submitting.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setFeedback("Please enter a valid email address.");
      return;
    }
    setFeedback(`Thank you, ${form.fullName}! Your message has been received in this demo.`);
    setForm(initialForm);
  }

  return (
    <main className="page-main">
      <section className="page-heading container"><span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span><h1>Let's talk <span>food.</span></h1><p>Questions, feedback or just saying hello? Send us a message.</p></section>
      <section className="container contact-layout">
        <div className="contact-details">
          <span className="eyebrow">GET IN TOUCH</span><h2>We're always happy to help.</h2>
          <p>Reach out using the details below or send a message through the form.</p>
          <div className="contact-detail"><span>✉</span><div><small>EMAIL</small><strong>hello@biteandbliss.example</strong></div></div>
          <div className="contact-detail"><span>☎</span><div><small>PHONE</small><strong>+234 800 000 0000</strong></div></div>
          <div className="contact-detail"><span>⌖</span><div><small>LOCATION</small><strong>Minna, Niger State, Nigeria</strong></div></div>
          <p className="sample-note">Sample contact details for this academic project.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a message</h2>
          <label>Full name<input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name" /></label>
          <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" /></label>
          <label>Subject<input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" /></label>
          <label>Message<textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Write your message..." /></label>
          <button className="button" type="submit">Send message <span>→</span></button>
          {feedback && <p className={feedback.startsWith("Thank") ? "form-feedback success" : "form-feedback error"} role="status">{feedback}</p>}
        </form>
      </section>
    </main>
  );
}
