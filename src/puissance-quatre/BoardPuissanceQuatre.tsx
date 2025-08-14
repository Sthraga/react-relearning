import type { BoardValue } from "./PuissanceQuatre";

interface CircleProps {
  value: string;
  onCircleClick: () => void;
}

interface BoardPuissanceQuatreProps {
  boardValue: BoardValue[][];
}

function Circle({ value, onCircleClick: onSquareClick }: CircleProps) {
  return (
    <button className="circle" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function BoardPuissanceQuatre() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-blue-600 rounded-lg shadow-lg p-4 mb-6"
      style={{ display: "inline-block" }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-row"
          style={{ marginBottom: i !== 6 - 1 ? "4px" : "0" }}
        >
          {Array.from({ length: 7 }).map((_, j) => (
            <Circle
              key={`${i.toString()}${j.toString()}-square`}
              value={""}
              onCircleClick={() => null}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardPuissanceQuatre;
