import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import PuissanceQuatre from "./puissance-quatre/PuissanceQuatre";

const AppRouter = () => (
    <Routes>
      <Route index element={<Home />} />
      <Route path="tictactoe" element={<TicTacToe />} />
      <Route path="puissance-quatre" element={<PuissanceQuatre />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
  
  export default AppRouter;