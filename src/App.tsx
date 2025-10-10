import { useState, useEffect } from "react";
import type { Lugar } from "./types";
import LeiaMais from "./LeiaMais";

import "./App.css";

const URL = "https://www.course-api.com/react-tours-project";

function App() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    const fetchViajens = async () => {
      const dados = await fetch(URL);
      const viajens = await dados.json();
      setLugares(viajens);
    };

    fetchViajens();
  }, []);

  return (
    <>
      <header>
        <h2>Our Tour</h2>
      </header>
      <div className="container" >
        {lugares.map((lugar: Lugar) => {
          const { id, image, name, info, price } = lugar;
          return (
            <div  key={id}>
              <section>
                <article className="single-tour">
                  <img src={image} alt="Lugares" />
                  <span className="tour-price">${price}</span>
                  <div>
                    <h5 className="tour-name">{name}</h5>
                    <LeiaMais texto={info} />
                    <button className="btn-one">Not interessed</button>
                  </div>
                </article>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
