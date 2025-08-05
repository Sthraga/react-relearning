import { useState } from "react";
import "./TicTacToe.css";
import BoardSettings from "./BoardSettings";
import Board from "./Board";

export type BoardValue = "X" | "O" | "";

const directions = [
  { dx: 0, dy: 1 },
  { dx: 1, dy: 0 },
  { dx: 1, dy: 1 },
  { dx: 1, dy: -1 },
];

const TicTacToe = () => {
  const [horizontalSquare, setHorizontalSquare] = useState(3);
  const [verticalSquare, setVerticalSquare] = useState(3);
  const [boardValue, setBoardValue] = useState<BoardValue[][]>(
    Array.from({ length: verticalSquare }, () =>
      Array.from({ length: horizontalSquare }, () => "")
    )
  );

  function checkWinner(vertical: number, horizontal: number, player: boolean) {
    const playerSign: BoardValue = player ? "X" : "O";
    const isWinner = checkAllDirection(vertical, horizontal, playerSign);
    if (isWinner) console.log("WINNER!");
  }

  function checkAllDirection(
    vertical: number,
    horizontal: number,
    player: string
  ): boolean {
    const numberToAlignWithTarget = 2;

    for (const direction of directions) {
      const count = countDirections(
        vertical,
        horizontal,
        direction.dx,
        direction.dy,
        player
      );

      if (count >= numberToAlignWithTarget) return true;
    }

    return false;
  }

  function countDirections(
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
    let count = 0;
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

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <BoardSettings
        {...{
          horizontalSquare,
          setHorizontalSquare,
          verticalSquare,
          setVerticalSquare,
          setBoardValue,
        }}
      />
      <Board {...{boardValue, setBoardValue, horizontalSquare, verticalSquare, checkWinner}} />
    </>
  );
};

export default TicTacToe;
