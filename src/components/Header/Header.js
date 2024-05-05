import React from "react";
import { CircleHelp, Settings, BarChartBig, Pause, Play } from "lucide-react";
import HelpInfo from "./HelpInfo";
import SettingsInfo from "./SettingsInfo";
import StatisticInfo from "./StatisticInfo";
import useModalToggle from "@/hooks/useModalToggle";
function Header({ gameStatus, startGame, gameStatistic, toggleHardMode, hardMode }) {
  const [showHelp, closeHelpModal, openHelpModal] = useModalToggle(false);
  const [showSettings, closeSettingsModal, openSettingsModal] =
    useModalToggle(false);
  const [showStatistic, closeStatisticModal, openStatisticModal] =
    useModalToggle(false);

  return (
    <>
      <div
        className="flex flex-row items-center justify-between gap-2 py-2 border-b"
        style={{ color: "var(--color-tone-1)" }}
      >
        <div>
          <button aria-label="help" onClick={openHelpModal}>
            <CircleHelp />
          </button>
        </div>
        <p className="font-semibold text-4xl tracking-widest uppercase select-none">
          wordle
        </p>
        <div className="flex flex-row items-center gap-3">
          <button
            aria-label={gameStatus ? "game in progress" : "start a new game"}
            onClick={(event) => {
              startGame();
              event.currentTarget.blur();
            }}
          >
            {gameStatus ? <Pause /> : <Play />}
          </button>
          <button aria-label="statistic" onClick={openStatisticModal}>
            <BarChartBig />
          </button>
          <button onClick={openSettingsModal}>
            <Settings aria-label="preference settings" />
          </button>
        </div>
      </div>
      <HelpInfo closeHelpModal={closeHelpModal} show={showHelp} />
      <SettingsInfo
        closeSettingsModal={closeSettingsModal}
        show={showSettings}
        toggleHardMode={toggleHardMode}
        hardMode={hardMode}
      />
      <StatisticInfo
        closeStatisticModal={closeStatisticModal}
        show={showStatistic}
        gameStatistic={gameStatistic}
      />
    </>
  );
}

export default Header;
