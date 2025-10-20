import {
  CirclePlus,
  CircleMinus,
} from "lucide-react";
import { useState } from "react";
import type { Question } from "../../types";


function SingleQuestion(item: Question) {
      const [ativo, setAtivo] = useState(false);
      const {id, title,info} = item;
  return (
      <div key={id}>
            <section>
              <article>
                <div className="container2">
                  <button className="btn" onClick={() => setAtivo(!ativo)}>
                    {ativo ? <CircleMinus /> : <CirclePlus />}
                  </button>
                  <h4 className="title">{title}</h4>
                  {ativo && <p>{info}</p>}
                </div>
              </article>
            </section>
          </div>
  )
}

export default SingleQuestion