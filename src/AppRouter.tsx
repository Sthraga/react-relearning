import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import TicTacToe from "./tic-tac-toe/TicTacToe";

const AppRouter = () => (
    <Routes>
      <Route index element={<Home />} />
      <Route path="tictactoe" element={<TicTacToe />} />
      <Route path="puissance-quatre" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
  
  export default AppRouter;