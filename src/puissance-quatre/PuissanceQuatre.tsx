import React, { useState } from "react";
import "./PuissanceQuatre.css";
import BoardPuissanceQuatre from "./BoardPuissanceQuatre";
import { Player } from "./player";
import ReplayP4 from "../shared-components/ReplayP4";

export type BoardValue = "player1" | "player2" | "";

const PuissanceQuatre = () => {
  const [player1] = useState(() => new Player("player1", "Joueur 1", "red"));
  const [player2] = useState(() => new Player("player2", "Joueur 2", "yellow"));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(player1);

  const [horizontalSquare] = useState(7);
  const [verticalSquare] = useState(6);

  const [boardValue, setBoardValue] = useState<BoardValue[][]>(
    Array.from({ length: verticalSquare }, () =>
      Array.from({ length: horizontalSquare }, () => "")
    )
  );
  const [victoryThreshold] = useState(4);

  function resetGame() {
    player1.reset();
    player2.reset();

  }

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <BoardPuissanceQuatre {...{
            boardValue
        }} />
      </div>
      <div className="flex flex-col items-center mb-6">
        <ReplayP4
          {...{
            horizontalSquare,
            verticalSquare,
            setBoardValue,
          }}
        />
      </div>
    </>
  );
};

export default PuissanceQuatre;
