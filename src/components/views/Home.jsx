import React from "react";
import SearchAnime from "../SearchAnime";
import { CardApp } from "../CardApp";

export function Home() {
  const [searchResults, setSearchResults] = React.useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <SearchAnime onSearchResults={handleSearchResults} />
      {searchResults ? (
        <div>
          <h2>Resultados de la búsqueda:</h2>
          <div className="columns is-multiline pt-4">
            {searchResults?.map((item) => (
              <CardApp {...item} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
