import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";

const SearchAnime = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:80/php/search.php?searchTerm=${searchTerm}`
      );

      if (status === 200) {
        if (data.length > 0) {
          onSearchResults(data);
          setError(null);
          setNoResults(false);
        } else {
          // Mostrar mensaje de error si no hay resultados
          setError(null);
          setNoResults(true);
        }
      } else {
        setError("La solicitud no pudo completarse");
        setNoResults(false);
      }
    } catch (error) {
      setError("Error al realizar la búsqueda");
      setNoResults(false);
    }
  };

  return (
    <div>
      <div className="field has-addons pt-3">
        <div className="control">
          <input
            className="input"
            type="search"
            placeholder="Buscar un Anime"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>

      {/* Mostrar mensaje de error si hay un error */}
      {error && <p className="has-text-danger">{error}</p>}

      {/* Mostrar mensaje si no hay resultados */}
      {noResults && (
        <p className="has-text-warning">
          No se encontraron resultados para "{searchTerm}".
        </p>
      )}
    </div>
  );
};

export default SearchAnime;
