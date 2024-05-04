import ModalWrapper from "./ModalWrapper";
import { CircleX } from "lucide-react";
function StatisticInfo({ closeStatisticModal, show }) {
  return (
    <ModalWrapper show={show}>
      <div className="p-2 relative">
        <button
          className="absolute right-2 top-2"
          onClick={closeStatisticModal}
        >
          <CircleX />
        </button>
        <h2 className="text-center font-bold mb-4">STATISTIC</h2>

        <div className="flex flex-row gap-4 text-center mb-4 justify-center">
          <div className="max-w-16">
            <div className="text-4xl">2</div>
            <div className="text-sm">Played</div>
          </div>
          <div className="max-w-16">
            <div className="text-4xl">50</div>
            <div className="text-sm">Win %</div>
          </div>
          <div className="max-w-16">
            <div className="text-4xl">0</div>
            <div className="text-sm">Current Streak</div>
          </div>
          <div className="max-w-16">
            <div className="text-4xl">1</div>
            <div className="text-sm">Max Streak</div>
          </div>
        </div>
        <h3 className="font-bold mb-4 text-center">GUESS DISTRIBUTION</h3>
        <HorizontalBarChart data={[0, 0, 0, 0, 0, 6]} />
      </div>
    </ModalWrapper>
  );
}
// data [,,,,]
function HorizontalBarChart({ data }) {
  const total = data.reduce((a, b) => a + b, 0);
  return (
    <div className="flex flex-col gap-2">
      {data.map((cnt, idx) => {
        const percent = cnt === 0 ? cnt : ((cnt * 100) / total).toFixed(0);
        return (
          <div key={idx} className="flex flex-row gap-1">
            <div className="w-5 h-5 grid place-content-center">{idx}</div>
            <div
              className="w-72 h-5"
              style={{
                backgroundColor: "var(--color-tone-7)",
              }}
            >
              <div
                className={`h-full text-right flex flex-row items-center justify-end`}
                style={{
                  backgroundColor:
                    cnt == 0 ? "var(--color-tone-2)" : "var(--green)",
                  width: `max(calc(${percent}%), 1.25rem)`,
                }}
              >
                <span
                  className="w-5 h-5 grid font-bold place-content-center"
                  style={{
                    color: "var(--color-tone-7)",
                  }}
                >
                  {cnt}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default StatisticInfo;
