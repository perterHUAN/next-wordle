import React from "react";
import { CircleHelp, Settings, BarChartBig, Pause, Play } from "lucide-react";
import HelpInfo from "./HelpInfo";
import SettingsInfo from "./SettingsInfo";
import StatisticInfo from "./StatisticInfo";
function Header({ gameStatus, startGame, notify }) {
  const [showHelp, setShowHelp] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showStatistic, setShowStatistic] = React.useState(false);

  const closeHelpModal = React.useCallback(() => {
    setShowHelp(false);
  }, []);
  const openHelpModal = React.useCallback(() => {
    setShowHelp(true);
  }, []);

  const closeSettingsModal = React.useCallback(() => {
    setShowSettings(false);
  }, []);
  const openSettingsModal = React.useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeStatisticModal = React.useCallback(() => {
    setShowStatistic(false);
  }, []);
  const openStatisticModal = React.useCallback(() => {
    setShowStatistic(true);
  }, []);
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
              if (!startGame())
                notify(
                  "A game is currently in progress, you cannot start a new round."
                );
              else {
                event.currentTarget.blur();
              }
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
      />
      <StatisticInfo
        closeStatisticModal={closeStatisticModal}
        show={showStatistic}
      />
    </>
  );
}

export default Header;
