// Navbar.js

import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Signup from "./signup";
import Login from "./login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    console.log("Mostrar formulario de inicio de sesión");
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    console.log("Mostrar formulario de registro");
  };

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Web Anime
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/series">
            Películas
          </a>
          <a className="navbar-item" href="/noticias">
            Noticias
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-primary"
                href="#"
                onClick={handleLoginClick}
              >
                Iniciar Sesión
              </a>
              <a
                className="button is-light"
                href="#"
                onClick={handleSignupClick}
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </nav>
  );
}

export default Navbar;
