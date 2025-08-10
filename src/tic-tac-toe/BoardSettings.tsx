import type { ChangeEvent } from "react";
import type { BoardValue } from "./TicTacToe";
import "./TicTacToe.css";

interface BoardSettingsProps {
  horizontalSquare: number;
  setHorizontalSquare: React.Dispatch<React.SetStateAction<number>>;
  verticalSquare: number;
  setVerticalSquare: React.Dispatch<React.SetStateAction<number>>;
  setBoardValue: React.Dispatch<React.SetStateAction<BoardValue[][]>>;
  victoryThreshold: number;
  setVictoryThreshold: React.Dispatch<React.SetStateAction<number>>;
}
function BoardSettings({
  horizontalSquare,
  setHorizontalSquare,
  verticalSquare,
  setVerticalSquare,
  setBoardValue,
  victoryThreshold,
  setVictoryThreshold
}: BoardSettingsProps) {
  const handleChangeNumberSquare = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= 3 && +e.currentTarget.value <= 10) {
      switch (e.currentTarget.name) {
        case "horizontal":
          setBoardValue(
            Array.from({ length: verticalSquare }, () =>
              Array.from({ length: +e.currentTarget.value }, () => "")
            )
          );
          setHorizontalSquare(+e.currentTarget.value);
          break;
        case "vertical":
          setBoardValue(
            Array.from({ length: +e.currentTarget.value }, () =>
              Array.from({ length: horizontalSquare }, () => "")
            )
          );
          setVerticalSquare(+e.currentTarget.value);
          break;
      }
    }
  }

  const handleChangeVictoryThreshold = (e: ChangeEvent<HTMLInputElement>) => {
    if(+e.currentTarget.value >= 3 && +e.currentTarget.value <= 10) {
      setVictoryThreshold(+e.currentTarget.value);
      console.log(e.currentTarget.value);
    }
  }

  return (
    <div className="settings">
      <div className="flex flex-row md:flex-row gap-6 mb-6 items-center justify-center">
        <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 m-2">
          <label
            htmlFor="horizontal"
            className="mb-2 text-lg font-semibold text-gray-700"
          >
            Nombre de cases <span className="text-blue-600">horizontales</span>{" "}
            :
          </label>
          <input
            id="horizontal"
            className="inputSquare w-20 px-2 py-1 rounded border-2 border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
            type="number"
            name="horizontal"
            min={1}
            max={10}
            value={horizontalSquare}
            onChange={handleChangeNumberSquare}
          />
        </div>
        <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 m-2">
          <label
            htmlFor="vertical"
            className="mb-2 text-lg font-semibold text-gray-700"
          >
            Nombre de cases <span className="text-green-600">verticales</span> :
          </label>
          <input
            id="vertical"
            className="inputSquare w-20 px-2 py-1 rounded border-2 border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition"
            type="number"
            name="vertical"
            min={1}
            max={10}
            value={verticalSquare}
            onChange={handleChangeNumberSquare}
          />
        </div>
        <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 m-2">
          <label
            htmlFor="victoryThreshold"
            className="mb-2 text-lg font-semibold text-gray-700"
          >
            <span className="text-purple-600">Symboles alignés</span> pour gagner :
          </label>
          <input
            id="victoryThreshold"
            className="inputSquare w-20 px-2 py-1 rounded border-2 border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition"
            type="number"
            name="victoryThreshold"
            min={3}
            max={10}
            value={victoryThreshold}
            onChange={handleChangeVictoryThreshold}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardSettings;
