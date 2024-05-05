"use client";
import Header from "@/components/Header";
import Board from "@/components/Board";
import KeyBoard from "@/components/KeyBoard";
import Notification from "@/components/Notification";
import React from "react";
import useGameState from "@/hooks/useGameState";
import useNotification from "@/hooks/useNotification";

export default function Home() {
  const [message, notify] = useNotification();
  const [gameState, startGame, changeGameStateBasedOnKey] =
    useGameState(notify);

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
