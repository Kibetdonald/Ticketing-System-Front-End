import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "../assets/Style/navbar.scss";
import "../assets/Style/mediaqueries.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="Navbar">
       
        <a href="/" className="nav-logo">
          ResolveNow
        </a>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavHashLink to="/#about">About </NavHashLink>
          <NavHashLink to="/#features">Explore Features</NavHashLink>
          <NavHashLink to="/#works"> How it works </NavHashLink>
          <NavHashLink to="/#faq">FAQ </NavHashLink>
          <NavHashLink to="/#contact">Contact Us </NavHashLink>
          <a href="login" style={{ textDecoration: "none", color: "#000" }}>
            Login
          </a>

          <a href="/register" className="register">
            Request Demo
          </a>
        </div>
        
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;