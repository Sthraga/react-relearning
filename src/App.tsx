import "./App.css";
import { Link } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <nav className="navBar">
        <ul className="listNavBar">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/tictactoe">Tic-tac-toe</Link></li>
          <li><Link to="/puissance-quatre">Puissance4</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
      <div className="navSpacer" />
      <AppRouter />
    </>
  );
}

export default App;
