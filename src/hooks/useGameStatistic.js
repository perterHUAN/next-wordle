import React from "react";
import useLocalStore from "./useLocalStore";
import { produce } from "immer";
import { guessTimes } from "@/constans";
function useGameStatistic() {
  const [gameStatistic, setGameStatistic] = React.useState({
    played: 0,
    win: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: Array(guessTimes).fill(0),
  });
  const initial = React.useCallback((state) => {
    setGameStatistic(state);
  }, []);
  useLocalStore(gameStatistic, "gameStatistic", initial);
  const statistic = React.useCallback(
    (rowIdx) => {
      const newState = produce(gameStatistic, (draft) => {
        const isWin = rowIdx < guessTimes;
        draft.played++;
        if (isWin) draft.guessDistribution[rowIdx]++;
        draft.win =
          draft.guessDistribution.reduce((acc, cur) => acc + cur, 0) /
          draft.played;
        if (isWin) {
          draft.currentStreak += 1;
          draft.maxStreak = Math.max(draft.currentStreak, draft.maxStreak);
        } else {
          draft.currentStreak = 0;
        }
      });
      setGameStatistic(newState);
    },
    [gameStatistic]
  );
  return [gameStatistic, statistic];
}
export default useGameStatistic;
