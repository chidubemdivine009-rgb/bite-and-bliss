import React from "react";
export default function About() {
  return (
    <main className="page-main">
      <section className="page-heading container">
        <span className="eyebrow">OUR STORY</span><h1>More than a meal.<br /><span>A moment of bliss.</span></h1>
        <p>We are here to make every meal feel welcoming, fresh and memorable.</p>
      </section>
      <section className="container about-grid">
        <img className="about-image" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=85" alt="Restaurant table set for a meal" />
        <div className="about-copy"><span className="eyebrow">WHO WE ARE</span><h2>Good food should feel like home.</h2>
          <p>Bite & Bliss is a restaurant concept built around flavour, freshness and friendly service. Our menu brings together satisfying everyday meals and special treats, prepared to make customers feel welcome.</p>
          <p>Our goal is simple: serve enjoyable food, make ordering easy and create a place people are happy to return to.</p>
        </div>
      </section>
      <section className="values-section"><div className="container values-grid">
        <div><span className="eyebrow">WHAT GUIDES US</span><h2>Our purpose</h2></div>
        <article><span>01</span><h3>Our mission</h3><p>To serve fresh, tasty and affordable meals while giving every customer a pleasant experience.</p></article>
        <article><span>02</span><h3>Our vision</h3><p>To become a trusted food destination known for quality, consistency and warm hospitality.</p></article>
      </div></section>
    </main>
  );
}
