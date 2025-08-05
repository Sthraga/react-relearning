import React, { useState, type ChangeEvent } from "react";
import "./TicTacToe.css";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

type BoardValue = "X" | "O" | "";

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [switchPlayer, setSwitchPlayer] = useState(false);
  const [horizontalSquare, setHorizontalSquare] = useState(3);
  const [verticalSquare, setVerticalSquare] = useState(3);
  const [boardValue, setBoardValue] = useState<BoardValue[][]>(
    Array.from({ length: verticalSquare }, () =>
      Array.from({ length: horizontalSquare }, () => "")
    )
  );

  function handleClick(i: number, j: number) {
    if (boardValue[i][j] !== "") {
      console.log("already clicked");
      return;
    }
    if (switchPlayer) {
      setBoardValue((boardValue) => {
        boardValue[i][j] = "X";
        return boardValue;
      });
    } else {
      setBoardValue((boardValue) => {
        boardValue[i][j] = "O";
        return boardValue;
      });
    }
    checkWinner(i, j, switchPlayer);
    setSwitchPlayer(!switchPlayer);
  }

  function checkWinner(vertical: number, horizontal: number, player: boolean) {
    const isWinner = checkDirection(vertical, horizontal, player);
    if (isWinner) console.log("WINNER!");
  }

  const directions = [
    { dx: 0, dy: 1 },
    { dx: 1, dy: 0 },
    { dx: 1, dy: 1 },
    { dx: 1, dy: -1 },
  ];

  function checkDirection(
    vertical: number,
    horizontal: number,
    player: boolean
  ): boolean {
    const playerSign: BoardValue = player ? "X" : "O";
    const numberToAlignWithTarget = 2;

    for (const direction of directions) {
      const count = countDirection(
        vertical,
        horizontal,
        direction.dx,
        direction.dy,
        playerSign
      );

      if (count >= numberToAlignWithTarget) return true;
    }

    return false;
  }

  function countDirection(
    vertical: number,
    horizontal: number,
    dx: number,
    dy: number,
    playerSign: string
  ): number {
    let count = 0;

    count += countInOneDirection(vertical, horizontal, dx, dy, playerSign);
    count += countInOneDirection(vertical, horizontal, -dx, -dy, playerSign);

    return count;
  }

  function countInOneDirection(
    vertical: number,
    horizontal: number,
    dx: number,
    dy: number,
    playerSign: string
  ): number {
    let count = 0
    while (
      horizontal + dx >= 0 &&
      vertical + dy >= 0 &&
      horizontal + dx < horizontalSquare &&
      vertical + dy < verticalSquare &&
      boardValue[vertical + dy][horizontal + dx] == playerSign
    ) {
      count++;
      dx += dx;
      dy += dy;
    }
    return count;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value > 0 && +e.currentTarget.value <= 10) {
      switch (e.currentTarget.name) {
        case "horizontal":
          setBoardValue(
            Array.from({ length: verticalSquare }, () =>
              Array.from({ length: +e.currentTarget.value }, () => "")
            )
          );
          setHorizontalSquare(+e.currentTarget.value);
          console.log("vertical" + horizontalSquare.toString());
          break;
        case "vertical":
          setBoardValue(
            Array.from({ length: +e.currentTarget.value }, () =>
              Array.from({ length: horizontalSquare }, () => "")
            )
          );
          setVerticalSquare(+e.currentTarget.value);
          console.log("vertical" + verticalSquare.toString());
          break;
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
          <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 m-2">
            <label
              htmlFor="horizontal"
              className="mb-2 text-lg font-semibold text-gray-700"
            >
              Nombre de cases{" "}
              <span className="text-blue-600">horizontales</span> :
            </label>
            <input
              id="horizontal"
              className="inputSquare w-20 px-2 py-1 rounded border-2 border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              type="number"
              name="horizontal"
              min={1}
              max={10}
              value={horizontalSquare}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 m-2">
            <label
              htmlFor="vertical"
              className="mb-2 text-lg font-semibold text-gray-700"
            >
              Nombre de cases <span className="text-green-600">verticales</span>{" "}
              :
            </label>
            <input
              id="vertical"
              className="inputSquare w-20 px-2 py-1 rounded border-2 border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition"
              type="number"
              name="vertical"
              min={1}
              max={10}
              value={verticalSquare}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-4 mb-6"
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
    </>
  );
}

const TicTacToe = () => {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </>
  );
};

export default TicTacToe;
