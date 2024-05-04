import React from "react";
import { range, boardStateToBgColorVariable } from "@/utils";

function Board({ gameState }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {range(6).map((row) => {
        return (
          <div key={row} className="flex flex-row items-center gap-2">
            {range(5).map((col) => {
              const value =
                col < gameState.boardState[row].length
                  ? gameState.boardState[row][col]
                  : "";
              const bg = boardStateToBgColorVariable(gameState.evaluation[row][col]);
              return (
                <div
                  key={col}
                  className={`${
                    value && "border"
                  } w-14 h-14 border select-none grid place-content-center uppercase font-bold text-2xl`}
                  style={{
                    backgroundColor: bg,
                  }}
                >
                  {value}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
