import React from "react";
import { reducer, initialState } from "@/reducers/gameState";
import { keyboard } from "@/constans";
import useLocalStore from "./useLocalStore";
function useGameState(notify, statistic) {
  const [gameState, dispatch] = React.useReducer(reducer, initialState);
  const initial = React.useCallback(
    (state) => dispatch({ type: "load-state", state: state }),
    []
  );
  useLocalStore(gameState, "gameState", initial);
  const startGame = React.useCallback(() => {
    dispatch({ type: "start-game", notify: notify });
  }, [notify]);

  const endGame = React.useCallback(() => {
    dispatch({ type: "end-game" });
  }, []);

  const changeGameStateBasedOnKey = React.useCallback(
    (key) => {
      if (!keyboard.some((row) => row.some((e) => e === key))) return;
      if (key === "Enter") {
        dispatch({
          type: "check",
          notify: notify,
          endGame: endGame,
          statistic: statistic,
        });
      } else if (key === "Backspace") {
        dispatch({ type: "remove-letter" });
      } else {
        dispatch({ type: "add-letter", data: key });
      }
    },
    [notify, endGame, statistic]
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
