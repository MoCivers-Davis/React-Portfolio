import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Mo's Portfolio</span>

        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header >
  );
}

export default header;