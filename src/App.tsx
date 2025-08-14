import "./App.css";
import { Link } from "react-router-dom";
import AppRouter from "./AppRouter";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  return (
    <>
      <nav className="navBar">
        <ul className="listNavBar">
          <li
            onClick={() => {
              setTitle("Accueil");
            }}
          >
            <Link to="/">Accueil</Link>
          </li>
          <li
            onClick={() => {
              setTitle("Tic-tac-toe");
            }}
          >
            <Link to="/tictactoe">Tic-tac-toe</Link>
          </li>
          <li
            onClick={() => {
              setTitle("Puissance 4");
            }}
          >
            <Link to="/puissance-quatre">Puissance4</Link>
          </li>
        </ul>
        <h1 className="">{title}</h1>
        <ul className="listNavBar right">
          <li
            onClick={() => {
              setTitle("À propos");
            }}
          >
            <Link to="/about">À propos</Link>
          </li>
          <li
            onClick={() => {
              setTitle("Connexion");
            }}
          >
            <Link to="/login">Connexion</Link>
          </li>
        </ul>
      </nav>
      <div className="navSpacer" />
      <AppRouter />
    </>
  );
}

export default App;
