import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand footer-brand"><span className="brand-mark">B</span><span>Bite <em>&</em> Bliss</span></Link>
          <p>Fresh food. Good mood. Every day.</p>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Bite & Bliss. Academic project demo.</p>
      </div>
    </footer>
  );
}
