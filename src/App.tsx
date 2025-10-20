import reviews from "./Reviews/dados";
import {
  ChevronLeft,
  ChevronRight,
  Import,
  Quote,
  CirclePlus,
  CircleMinus,
 
 
} from "lucide-react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Viajens from "./Viajens/components/Viajens/Viajens";
import Question from "./Questions/Components/questions/Questions";
import Menu from "./Refeicoes/MenuRefeicoes/Components/Menu/Menu";
import AllMenu from "./Refeicoes/MenuRefeicoes/Components/AllMenu/AllMenu";
import BreakFast from "./Refeicoes/MenuRefeicoes/Components/BreaKfast/BreakFast";
import Lunch from "./Refeicoes/MenuRefeicoes/Components/Lunch/Lunch";
import Shakes from "./Refeicoes/MenuRefeicoes/Components/Shakes/Shakes";
function App() {
  return (
    <div>
   
    <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path="/" element={<AllMenu />}/>
      <Route path="/breakfast" element={<BreakFast/>} />
      <Route path="/Lunch" element={<Lunch/>} />
       <Route path="/shakes" element={<Shakes/>} />

     </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
