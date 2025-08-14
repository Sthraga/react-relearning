import React from "react";
import "./Replay.css";
import type { BoardValue } from "../tic-tac-toe/TicTacToe";

interface ReplayP4Props {
  setBoardValue: React.Dispatch<React.SetStateAction<BoardValue[][]>>;
  horizontalSquare: number;
  verticalSquare: number;
  setPlayerState: React.Dispatch<
    React.SetStateAction<{
      player: string;
      hasWon: boolean;
    }>
  >;
}

const ReplayP4 = ({
  setBoardValue,
  verticalSquare,
  horizontalSquare,
}: ReplayP4Props) => {
  const handleReplay = () => {
    setBoardValue(
      Array.from({ length: verticalSquare }, () =>
        Array.from({ length: horizontalSquare }, () => "")
      )
    );
    setPlayerState((ancPlayerState) => ({ ...ancPlayerState, hasWon: false }));
  };

  return (
    <>
      <button className="replay" onClick={handleReplay}>
        Relancer
      </button>
    </>
  );
};

export default ReplayP4;
