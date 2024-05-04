import { CircleX } from "lucide-react";
function HelpInfo({ closeHelpModal }) {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-row justify-center p-2 bg-white">
      <div className="max-w-md flex flex-col gap-2 relative">
        <button className="absolute right-2 top-2" onClick={closeHelpModal}>
          <CircleX />
        </button>
        <h2 className="text-center text-xl mb-2">How to play</h2>
        <p>
          Guess the <b>WORDLE </b>in 6 tries.
        </p>
        <p>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <hr />
        <h3 className="font-bold pt-4">Examples</h3>
        <Examples>
          <Example
            word="WEARY"
            sidx={0}
            style1={{
              backgroundColor: "var(--key-bg-correct)",
              color: "var(--color-tone-7)",
            }}
            style2={{
              backgroundColor: "var(--color-tone-7)",
              color: "var(--color-tone-1)",
              border: "2px solid var(--color-tone-4)",
            }}
            type={0}
          />
          <Example
            word="PILLS"
            sidx={1}
            style1={{
              backgroundColor: "var(--key-bg-present)",
              color: "var(--color-tone-7)",
            }}
            style2={{
              backgroundColor: "var(--color-tone-7)",
              color: "var(--color-tone-1)",
              border: "2px solid var(--color-tone-4)",
            }}
            type={1}
          />
          <Example
            word="WAGUE"
            sidx={3}
            style1={{
              backgroundColor: "var(--key-bg-absent)",
              color: "var(--color-tone-7)",
            }}
            style2={{
              backgroundColor: "var(--color-tone-7)",
              color: "var(--color-tone-1)",
              border: "2px solid var(--color-tone-4)",
            }}
            type={2}
          />
        </Examples>
        <hr />
        <p className="font-bold py-4">
          Every day, you can play as many games as you want!
        </p>
      </div>
    </div>
  );
}

function generateComment(type, ch) {
  if (type === 0) {
    return (
      <p>
        The letter <b>{ch}</b> is in the word and in the correct spot.
      </p>
    );
  } else if (type === 1) {
    return (
      <p>
        The letter <b>{ch}</b> is in the word but in the wrong spot.
      </p>
    );
  } else if (type === 2) {
    return (
      <p>
        The letter <b>{ch}</b> is not in the word in any spot.
      </p>
    );
  } else throw new Error("this type dosnt' exist");
}
function Example({ word, sidx, style1, style2, type }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        {word.split("").map((ch, idx) => {
          return (
            <div
              key={idx}
              className="w-10 h-10 grid place-content-center font-bold"
              style={idx === sidx ? style1 : style2}
            >
              {ch}
            </div>
          );
        })}
      </div>
      {generateComment(type, word[sidx])}
    </div>
  );
}

function Examples({ children }) {
  return <div className="flex flex-col gap-3 mt-2">{children}</div>;
}

export default HelpInfo;
