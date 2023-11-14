import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const [animesData, setAnimesData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetchAnimes();
  }, []);

  const fetchAnimes = async () => {
    try {
      let { data, status } = await axios.get(
        `http://localhost:80/php/main.php`
      );

      if (status !== 200) {
        setError([...error, "La solicitud no pudo completarse"]);
        return;
      }

      setAnimesData(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="columns is-multiline pt-4">
      {animesData?.map((anime, index) => (
        <div className="column is-one-quarter" key={index}>
          <Link to={`/anime/${anime.id}`}>
            <div className="card" style={{ width: "400px" }}>
              <figure className="image is-4by5">
                <img src={anime.imagen} alt={anime.nombre} />
              </figure>
            </div>
          </Link>
          <h1 className="has-text-centered pt-2 pr-5">{anime.nombre}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
