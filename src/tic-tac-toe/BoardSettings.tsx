import type { ChangeEvent } from "react";
import type { BoardValue } from "./TicTacToe";

interface BoardSettingsProps {
  horizontalSquare: number;
  setHorizontalSquare: React.Dispatch<React.SetStateAction<number>>;
  verticalSquare: number;
  setVerticalSquare: React.Dispatch<React.SetStateAction<number>>;
  setBoardValue: React.Dispatch<React.SetStateAction<BoardValue[][]>>;
}
function BoardSettings({
  horizontalSquare,
  setHorizontalSquare,
  verticalSquare,
  setVerticalSquare,
  setBoardValue,
}: BoardSettingsProps) {
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
    <div className="settings">
      <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardSettings;
