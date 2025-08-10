import React from "react";

interface MessageProps {
  playerState: {
    player: string;
    hasWon: boolean;
  };
}

const Message = ({ playerState: { player, hasWon } }: MessageProps) => {
  return (
    <div>
      <div>Au tour du joueur {player=='X' ? 'O' : 'X'}</div>
      <div>{hasWon && `Le joueur ${player} a gagné!`} </div>
    </div>
  );
};

export default Message;
