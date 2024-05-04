"use client";
import Header from "@/components/Header";
import Board from "@/components/Board";
import KeyBoard from "@/components/KeyBoard";
import Notification from "@/components/Notification";
import React from "react";
import { keyboard } from "@/constans";
import { reducer, initialState } from "@/reducers/gameStatus";

export default function Home() {
  const [gameState, dispatch] = React.useReducer(
    reducer,
    initialState,
    (initialState) => {
      let state =
        typeof window !== "undefined" &&
        window.localStorage.getItem("gameState");
      if (state) return JSON.parse(state);
      return initialState;
    }
  );
  const [message, setMessge] = React.useState("");
  React.useEffect(() => {
    window.localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  const startGame = React.useCallback(() => {
    if (gameState.gameStatus) return false;
    dispatch({ type: "start-game" });
    return true;
  }, [gameState.gameStatus]);

  const endGame = React.useCallback(() => {
    dispatch({ type: "end-game" });
  }, []);

  const notify = React.useCallback((messge) => {
    setMessge(messge);
    setTimeout(() => setMessge(""), 1000);
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

  return (
    <>
      <main
        className={`h-screen ${
          message ? "blur-[1px]" : ""
        } grid justify-center content-between`}
      >
        <Header
          gameStatus={gameState.gameStatus}
          startGame={startGame}
          notify={notify}
        />
        <Board gameState={gameState} />
        <KeyBoard
          gameState={gameState}
          changeGameStateBasedOnKey={changeGameStateBasedOnKey}
        />
      </main>
      {message && <Notification message={message} />}
    </>
  );
}
