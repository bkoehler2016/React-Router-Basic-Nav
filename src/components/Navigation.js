import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className="Nav-link">
          <Link className="nav-item" to="/">
            Home
          </Link>
        </div>
        <div className="Nav-link">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </div>
        <div className="Nav-link">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
