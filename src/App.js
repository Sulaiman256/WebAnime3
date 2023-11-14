import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Card from "./components/card";
import AnimeDetail from "./components/AnimeDetail";
import SearchAnime from "./components/SearchAnime";

function App() {
  const [searchResults, setSearchResults] = React.useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchAnime onSearchResults={handleSearchResults} />
                  {searchResults ? (
                    <div>
                      <h2>Resultados de la búsqueda:</h2>
                      <div className="columns is-multiline pt-4">
                        {searchResults?.map((result) => (
                          <div
                            className="column is-one-quarter"
                            key={result.id}
                          >
                            {console.log("Imagen URL:", result.imagen)}
                            <Link to={`/anime/${result.id}`}>
                              <div className="card" style={{ width: "400px" }}>
                                <figure className="image is-4by5">
                                  <img
                                    src={result.imagen}
                                    alt={result.nombre}
                                  />
                                </figure>
                              </div>
                            </Link>
                            <h1 className="has-text-centered pt-2 pr-5">
                              {result.nombre}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Card />
                  )}
                </>
              }
            />
            <Route path="/anime/:id" element={<AnimeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
