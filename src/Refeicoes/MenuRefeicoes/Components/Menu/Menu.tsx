import "./Menu.css";
import { NavLink } from "react-router-dom";
import Lunch from '../Lunch/Lunch';
import Shakes from '../Shakes/Shakes';


function Menu() {
  return (
    <>
      <h1>Our Menu</h1>
      <div>
        <header>
          <nav>
            <ul>
              <li><NavLink to={"/"}  className="nav-link">All</NavLink></li>
              <li><NavLink to={"/breakfast"}  className="nav-link">BreakFast</NavLink></li>
              <li><NavLink to={"/lunch"}  className="nav-link">Lunch</NavLink></li>
              <li><NavLink to={"/shakes"}  className="nav-link">Shakes</NavLink></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Menu;
