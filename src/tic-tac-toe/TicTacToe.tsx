import { useState } from "react";
import "./TicTacToe.css";
import BoardSettings from "./BoardSettings";
import Board from "./Board";
import Replay from "../shared-components/Replay";
import Message from "../shared-components/Message";

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
  const [victoryThreshold, setVictoryThreshold] = useState(3);
  const [playerState, setPlayerState] = useState<{
    player: string;
    hasWon: boolean;
  }>({ player: "X", hasWon: false });

  function checkWinner(vertical: number, horizontal: number, player: boolean) {
    const playerSign = player ? "X" : "O";
    setPlayerState({
      player: playerSign,
      hasWon: checkAllDirection(vertical, horizontal, playerSign),
    });
  }

  function checkAllDirection(
    vertical: number,
    horizontal: number,
    player: string
  ): boolean {
    for (const direction of directions) {
      const count = countDirections(
        vertical,
        horizontal,
        direction.dx,
        direction.dy,
        player
      );

      if (count >= victoryThreshold) return true;
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
    let count = 1;

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
    const x: number = dx;
    const y: number = dy;
    while (
      horizontal + dx >= 0 &&
      vertical + dy >= 0 &&
      horizontal + dx < horizontalSquare &&
      vertical + dy < verticalSquare &&
      boardValue[vertical + dy][horizontal + dx] == playerSign
    ) {
      // console.log(
      //   "dx:" +
      //     dx.toString() +
      //     "  dy:" +
      //     dy.toString() +
      //     " count:" +
      //     count.toString()
      // );
      count++;
      dx += x;
      dy += y;
      // console.log(
      //   "dx:" +
      //     dx.toString() +
      //     "  dy:" +
      //     dy.toString() +
      //     " horizontal + dx:" +
      //     (horizontal + dx).toString() +
      //     "  vertical + dy:" +
      //     (vertical + dy).toString() +
      //     " count:" +
      //     count.toString()
      // );
    }
    return count;
  }

  return (
    <>
      <div className="flex flex-col items-center mt-4 mb-6">
        <h1 className="text-4xl font-bold">Tic-Tac-Toe</h1>
        <BoardSettings
          {...{
            horizontalSquare,
            setHorizontalSquare,
            verticalSquare,
            setVerticalSquare,
            setBoardValue,
            victoryThreshold,
            setVictoryThreshold,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-blue-200 rounded-lg shadow-lg pt-6">
        <Message {...{ playerState }} />
        <Board
          {...{
            boardValue,
            setBoardValue,
            horizontalSquare,
            verticalSquare,
            checkWinner,
          }}
        />
      </div>
      <div className="flex flex-col items-center mt-4 mb-6">
        <Replay
          {...{
            setBoardValue,
            verticalSquare,
            horizontalSquare,
            setPlayerState,
          }}
        />
      </div>
    </>
  );
};

export default TicTacToe;
