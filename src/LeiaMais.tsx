import { useState } from "react";
import "./App.css";


interface LeiaMaisProps {
  texto: string;
}

const LeiaMais: React.FC<LeiaMaisProps> = ({ texto }) => {
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const LIMITE = 500;

  const textoExibido =
    mostrarTudo || texto.length <= LIMITE
      ? texto
      : texto.slice(0, LIMITE) + "...";

  return (
    <p>
      {textoExibido}
      {!mostrarTudo && texto.length > LIMITE && (
        <button
          className="btn"
          onClick={() => setMostrarTudo(true)}
          style={{ marginLeft: "8px" }}
        >
          Leia mais
        </button>
      )}
    </p>
  );
};

export default LeiaMais;