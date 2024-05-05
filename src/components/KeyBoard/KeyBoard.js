"use client";
import { Delete } from "lucide-react";
import { keyboard } from "@/constans";
import { keyBoardStateToBgColorVariable } from "@/utils";
import React from "react";
function KeyBoard({ gameState, changeGameStateBasedOnKey }) {
  const handleClick = React.useCallback(
    (event) => {
      if (!gameState.gameStatus) return;
      let target = event.target;
      if (target.dataset.key === undefined)
        target = target.closest("[data-key]");
      if (!target) return;

      // console.log(target);
      const key = target.dataset.key;
      changeGameStateBasedOnKey(key);
    },
    [gameState.gameStatus, changeGameStateBasedOnKey]
  );
  return (
    <div
      className="flex flex-col items-center gap-2 pb-2"
      onClick={handleClick}
    >
      {keyboard.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="flex flex-row items-center gap-2">
            {row.map((col, colIdx) => {
              const evaluation = gameState.keyboardState[col];
              return (
                <div
                  key={colIdx}
                  className="px-4 py-4 grid place-content-center uppercase font-semibold bg-gray-400 rounded select-none cursor-pointer transition-colors delay-1000"
                  data-key={col}
                  style={{
                    color:
                      evaluation !== 3
                        ? "var(--key-evaluated-text-color)"
                        : "var(--key-text-color)",
                    backgroundColor: keyBoardStateToBgColorVariable(evaluation),
                  }}
                >
                  {col === "Backspace" ? <Delete /> : col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default KeyBoard;
