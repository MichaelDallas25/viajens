import { useEffect, useState } from "react";
import "./profissoes.css";

import { type ProfissaoType } from "../../types";
import Profissao from "../Profissao/Profissao";
import CompanyTab from "../../CompanyTab/CompanyTab";

const URL = "https://www.course-api.com/react-tabs-project";

const Profissoes = () => {
  const [loading, setLoading] = useState(true);
  const [profissoes, setProfissoes] = useState([]);
  const [itemAtual, setIntemAtual]= useState(0)

  useEffect(() => {
    const fetchProfissoes = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setProfissoes(data);
      setLoading(false);
    };

    fetchProfissoes();
  }, []);
  if (loading) {
    return <p>Carregando os dados...</p>;
  }

  const companiesTransformed = profissoes.map(
    (item: ProfissaoType) => item.company
  );

  return (
    <>
      <CompanyTab companies={companiesTransformed}
      itemAtual={itemAtual} 
      setItemAtual={setIntemAtual}/>
      <ul>
      <Profissao {...profissoes}
          itemAtual={itemAtual} />;
      </ul>
    </>
  );
};

export default Profissoes;
