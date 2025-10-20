import { useState } from "react";
import reviews from '../dados' 
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import './reviews.css'




function Reviewns() {

  const [indice, setIndice] = useState(0);

  const { name, image, job, text } = reviews[indice];

  const handleNext = () => {
    setIndice((indice) => {
      let novoIndice = indice + 1;
      if (novoIndice > reviews.length - 1) {
        return 0;
      }

      return novoIndice;
    });
  };

  const handleBack = () => {
    setIndice((indice) => {
      let novoIndice = indice - 1;
      if (novoIndice < 0) {
        return reviews.length - 1;
      }

      return novoIndice;
    });
  };


  
  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    setIndice(randomIndex);
  };


  return (

    <div>
         <main>
        <section className="review">
          <div></div>
          <Quote className="quotes" />
          <img className="image-review" src={image} alt="perfil" />
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{text}</p>
          <button className="button-left" onClick={handleBack}>
            <ChevronLeft />
          </button>
          <button className="button-right" onClick={handleNext}>
            <ChevronRight />
          </button>

          <br></br>
          <button className="btn" onClick={handleRandom}>
            Surprise Me
          </button>
        </section>
      </main>
    </div>
  )
}

export default Reviewns