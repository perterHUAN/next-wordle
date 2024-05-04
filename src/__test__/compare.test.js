import { expect, test, describe } from "vitest";
function compare(answer, word) {
  const res = Array(5).fill(3);
  for (let i = 0; i < answer.length; ++i) {
    if (answer[i] === word[i]) {
      res[i] = 0;
    }
  }
  for (let i = 0; i < answer.length; ++i) {
    if (res[i] === 0) continue;
    if (!answer.includes(word[i])) {
      res[i] = 2;
    } else {
      const cnt1 = answer
        .split("")
        .reduce((acc, cur) => acc + (cur === word[i] ? 1 : 0), 0);
      const cnt2 = word
        .slice(0, i + 1)
        .split("")
        .reduce((acc, cur) => acc + (cur === word[i] ? 1 : 0), 0);
      if (cnt2 <= cnt1) res[i] = 1;
      else res[i] = 2;
    }
  }
  return res;
}

describe("compare", () => {
  const tests = [
    ["order", "think", [2, 2, 2, 2, 2]],
    ["order", "erase", [1, 0, 2, 2, 2]],
    ["large", "order", [2, 1, 2, 1, 2]],
  ];
  for (const [answer, word, result] of tests) {
    test(`compare(${answer}, ${word})`, () => {
      expect(compare(answer, word)).toEqual(result);
    });
  }
});
