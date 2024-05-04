import React from "react";
import { CircleHelp, Settings, BarChartBig, Pause, Play } from "lucide-react";
import HelpInfo from "./HelpInfo";
import SettingsInfo from "./SettingsInfo";
function Header({ gameStatus, startGame, notify }) {
  const [showHelp, setShowHelp] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);

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

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 py-2 border-b">
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
          <button aria-label="statistic">
            <BarChartBig />
          </button>
          <button onClick={openSettingsModal}>
            <Settings aria-label="preference settings" />
          </button>
        </div>
      </div>
      {showHelp && <HelpInfo closeHelpModal={closeHelpModal} />}
      {showSettings && <SettingsInfo closeSettingsModal={closeSettingsModal} />}
    </>
  );
}

export default Header;
