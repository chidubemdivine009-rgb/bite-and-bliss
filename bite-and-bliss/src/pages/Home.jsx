import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot"></span> GOOD FOOD, GOOD MOOD</span>
            <h1>Fresh flavours.<br /><span>Happy moments.</span></h1>
            <p>Discover delicious meals made with fresh ingredients, thoughtful recipes and a little extra love.</p>
            <div className="hero-actions"><Link to="/menu" className="button">Explore our menu <span>→</span></Link><Link to="/about" className="plain-link">Our story <span>↗</span></Link></div>
            <div className="hero-proof"><div className="proof-avatars"><span>👩🏽</span><span>👨🏾</span><span>👩🏾</span></div><div><strong>Made with care</strong><small>Freshly prepared every day</small></div></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=90" alt="A colourful fresh meal in a bowl" />
            <div className="hero-sticker"><span>✦</span><strong>Fresh<br />& tasty</strong></div>
            <div className="hero-caption"><span>01 / FRESHLY MADE</span><span>Every bite tells a story</span></div>
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="container benefits-grid">
          <div><span className="benefit-icon">🥬</span><div><strong>Fresh ingredients</strong><p>Quality ingredients, every time.</p></div></div>
          <div><span className="benefit-icon">👨🏽‍🍳</span><div><strong>Made with love</strong><p>Prepared with care by our team.</p></div></div>
          <div><span className="benefit-icon">🛵</span><div><strong>Easy ordering</strong><p>Choose your favourites with ease.</p></div></div>
        </div>
      </section>
      <section className="section container home-intro">
        <div><span className="eyebrow">A LITTLE ABOUT US</span><h2>Food that brings<br />people together.</h2></div>
        <div><p>At Bite & Bliss, we believe good food makes ordinary moments special. From comforting local favourites to satisfying classics, there is something for every craving.</p><Link to="/menu" className="underlined-link">Find your favourite meal <span>→</span></Link></div>
      </section>
    </>
  );
}
