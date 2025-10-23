import "./Menu.css";
import menuData from "../../../dadosMenu";
import { useState } from "react"; // Importado useState
import AllMenu from "../AllMenu/AllMenu"; //  Important os componentes de página

function Menu() {
  const [selecionar, setSelecionar] = useState("All"); // Estado para armazenar a aba/categoria atual

  const filterMenu =
    selecionar === "All"
      ? menuData
      : menuData.filter(
          (item) => item.category.toLowerCase() === selecionar.toLowerCase()
        );

  return (
    <>
      <h1>Our Menu</h1>
      <div>
        <header>
          <nav>
            <ul>
              <li onClick={() => setSelecionar("All")}>All</li>
              <li onClick={() => setSelecionar("Breakfast")}>BreakFast</li>
              <li onClick={() => setSelecionar("Lunch")}>Lunch</li>
              <li onClick={() => setSelecionar("Shakes")}>Shakes</li>
            </ul>
          </nav>
        </header>
      </div>
      <AllMenu menuData={filterMenu} />
    </>
  );
}

export default Menu;
