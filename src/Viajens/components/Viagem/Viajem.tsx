import LeiaMais from "../LeiaMais/LeiaMais";
import type { Lugar } from "../../../types";
import './Viajem.css'

const Viajem = (lugar: Lugar) => {
  const { id, name, image, price, info } = lugar;
  return (
    <div key={id}>
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
};

export default Viajem;
