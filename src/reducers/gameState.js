import { produce } from "immer";
import { keyboard } from "@/constans";
import { isWord, generateRandomAnswer } from "@/data";
import { wordLength, guessTimes } from "@/constans";
function addLetter(state, data) {
  if (state.boardState[state.rowIdx].length >= 5) return state;
  const newState = produce(state, (draft) => {
    draft.boardState[draft.rowIdx] += data;
  });
  return newState;
}

function removeLetter(state) {
  if (state.boardState[state.rowIdx].length === 0) return state;
  const newState = produce(state, (draft) => {
    draft.boardState[draft.rowIdx] = draft.boardState[draft.rowIdx].slice(
      0,
      -1
    );
  });
  return newState;
}

function check(state, action) {
  const word = state.boardState[state.rowIdx].toUpperCase();
  const answer = state.answer.toUpperCase();
  console.log(word, answer);
  if (word.length < 5) {
    action.notify("Not enough letters");
    return state;
  }
  if (!isWord(word)) {
    action.notify("Not in word list");
    return state;
  }

  const newState = produce(state, (draft) => {
    const st = {};
    for (let i = 0; i < answer.length; ++i) {
      if (answer[i] === word[i]) {
        draft.evaluation[draft.rowIdx][i] = 0;
        st[word[i]] = 0;
      }
    }
    for (let i = 0; i < answer.length; ++i) {
      const ch = word[i];
      if (draft.evaluation[draft.rowIdx][i] === 0) continue;
      let res = 3;
      if (!answer.includes(ch)) {
        res = 2;
      } else {
        const cnt1 = answer
          .split("")
          .reduce((acc, cur) => acc + (cur === ch ? 1 : 0), 0);
        const cnt2 = word
          .slice(0, i + 1)
          .split("")
          .reduce((acc, cur) => acc + (cur === ch ? 1 : 0), 0);
        if (cnt2 <= cnt1) res = 1;
        else res = 2;
      }
      draft.evaluation[draft.rowIdx][i] = res;

      st[ch] = Math.min(st[ch] === undefined ? 3 : st[ch], res);
    }
    for (const key in st) {
      draft.keyboardState[key.toLowerCase()] = st[key];
    }
    draft.rowIdx++;
  });

  // check win or lose
  const isWin = newState.evaluation[newState.rowIdx - 1].every((e) => e === 0);
  if (isWin) {
    action.notify("You win");
    action.endGame();
    action.statistic(newState.rowIdx - 1);
  }
  if (newState.rowIdx >= 6 && !isWin) {
    action.notify("You lose");
    action.endGame();
    action.statistic(newState.rowIdx);
  }
  return newState;
}
function startGame(state, action) {
  if (state.gameStatus) {
    action.notify(
      "A game is currently in progress, you cannot start a new round."
    );
    return state;
  }
  const lastAnswer = state.answer;
  let newAnswer = generateRandomAnswer();
  while (newAnswer === lastAnswer) {
    newAnswer = generateRandomAnswer();
  }
  return generateState(true, newAnswer);
}
function endGame(state) {
  const newState = produce(state, (draft) => {
    draft.gameStatus = false;
  });
  return newState;
}
function loadState(state, action) {
  return action.state;
}
export function reducer(state, action) {
  switch (action.type) {
    case "add-letter":
      return addLetter(state, action.data);
    case "remove-letter":
      return removeLetter(state);
    case "check":
      return check(state, action);
    case "start-game":
      return startGame(state, action);
    case "end-game":
      return endGame(state);
    case "load-state":
      return loadState(state, action);
  }
}

/*
  0 - correct
  1 - present
  2 - absent
  3 - null
*/
function generateState(gameStatus, answer) {
  return {
    boardState: Array.from({ length: guessTimes }, () => ""),
    evaluation: Array.from({ length: guessTimes }, () =>
      Array.from({ length: wordLength }, () => 3)
    ),
    keyboardState: keyboard.flat().reduce((pre, cur) => {
      pre[cur] = 3;
      return pre;
    }, {}),
    rowIdx: 0,
    answer: answer || generateRandomAnswer(),
    gameStatus: gameStatus === undefined ? false : gameStatus,
  };
}
export const initialState = generateState();
