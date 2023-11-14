import React from "react";
import "bulma/css/bulma.min.css";
import Searchanime from "./SearchAnime"; // Importa las hojas de estilo de Bulma

function Navbar() {
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
              <a className="button is-primary">Iniciar Sesión</a>
              <a className="button is-light">Registrarse</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
