import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const linkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" aria-label="Bite and Bliss home">
          <span className="brand-mark">B</span>
          <span>Bite <em>&</em> Bliss</span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink end to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/menu" className={linkClass}>Our Menu</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <NavLink to="/menu" className="cart-link" aria-label={`Menu, ${cartCount} items in cart`}>
          <span aria-hidden="true">🛍️</span> <span className="cart-label">Your order</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </header>
  );
}
