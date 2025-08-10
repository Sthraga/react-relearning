import React, { useState } from "react";
import type { BoardValue } from "./TicTacToe";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

interface BoardProps {
  boardValue: BoardValue[][];
  setBoardValue: React.Dispatch<React.SetStateAction<BoardValue[][]>>;
  horizontalSquare: number;
  verticalSquare: number;
  checkWinner: (i: number, j: number, switchPlayer: boolean) => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({
  boardValue,
  setBoardValue,
  horizontalSquare,
  verticalSquare,
  checkWinner,
}: BoardProps) {
  const [switchPlayer, setSwitchPlayer] = useState(false);

  const handleClick = (i: number, j: number) => {
    if (boardValue[i][j] !== "") {
      console.log("already clicked");
      return;
    }
    setBoardValue((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[i][j] = switchPlayer ? "X" : "O";
      return newBoard;
    });

    checkWinner(i, j, switchPlayer);
    setSwitchPlayer(!switchPlayer);
  }

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg p-4 mb-6"
      style={{ display: "inline-block" }}
    >
      {Array.from({ length: verticalSquare }).map((_, i) => (
        <div
          key={i}
          className="flex flex-row"
          style={{ marginBottom: i !== verticalSquare - 1 ? "4px" : "0" }}
        >
          {Array.from({ length: horizontalSquare }).map((_, j) => (
            <Square
              key={`${i.toString()}${j.toString()}-square`}
              value={boardValue[i][j]}
              onSquareClick={() => {
                handleClick(i, j);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
