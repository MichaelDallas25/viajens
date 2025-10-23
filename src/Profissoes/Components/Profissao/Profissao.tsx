import { ChevronsRight } from "lucide-react";
import "./profissao.css";
import type { ProfissaoType } from "../../types";

interface ProfissaoProps {
  itemAtual: number;
  profissoes: ProfissaoType[];
}

function Profissao({ profissoes, itemAtual }: ProfissaoProps) {
  const { title, dates, duties, order, id } = profissoes[itemAtual];

  return (
    <div className="container">
      <div className="info">
        <h3>{title}</h3>
      </div>
      <ul>
        {duties.map((duti, id) => (
          <li key={id}>
            <ChevronsRight /> {duti}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profissao;
