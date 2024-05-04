import { CircleHelp, Settings, BarChartBig, Pause, Play } from "lucide-react";

function Header({ gameStatus, startGame, notify }) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 py-2 border-b">
      <div>
        <button aria-label="help">
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
        <button>
          <Settings aria-label="preference settings" />
        </button>
      </div>
    </div>
  );
}

export default Header;
