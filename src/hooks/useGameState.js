import React from "react";
import { reducer, initialState } from "@/reducers/gameStatus";
import { keyboard } from "@/constans";
import useLocalStore from "./useLocalStore";
function useGameState(notify) {
  const [gameState, dispatch] = React.useReducer(reducer, initialState);
  const initial = React.useCallback(
    (state) => dispatch({ type: "load-state", state: state }),
    []
  );
  useLocalStore(gameState, "gameState", initial);
  const startGame = React.useCallback(() => {
    if (gameState.gameStatus) return false;
    dispatch({ type: "start-game" });
    return true;
  }, [gameState.gameStatus]);

  const endGame = React.useCallback(() => {
    dispatch({ type: "end-game" });
  }, []);

  const changeGameStateBasedOnKey = React.useCallback(
    (key) => {
      if (!keyboard.some((row) => row.some((e) => e === key))) return;
      if (key === "Enter") {
        dispatch({ type: "check", notify: notify, endGame: endGame });
      } else if (key === "Backspace") {
        dispatch({ type: "remove-letter" });
      } else {
        dispatch({ type: "add-letter", data: key });
      }
    },
    [notify, endGame]
  );

  React.useEffect(() => {
    if (gameState.gameStatus) {
      function handleKeydown(event) {
        changeGameStateBasedOnKey(event.key);
      }
      window.addEventListener("keydown", handleKeydown);
      return () => window.removeEventListener("keydown", handleKeydown);
    }
  }, [gameState.gameStatus, changeGameStateBasedOnKey]);
  return [gameState, startGame, changeGameStateBasedOnKey];
}

export default useGameState;
