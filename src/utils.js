// 0 based, [start, end) start, start + step ...
export function range(start, end, step = 1) {
  if (start === undefined) throw new Error("must pass at least one parameter");
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const res = [];
  while (start < end) {
    res.push(start);
    start += step;
  }
  return res;
}

const keyBoardColors = [
  "--key-bg-correct",
  "--key-bg-present",
  "--key-bg-absent",
  "--key-bg",
];
const boardColor = [
  "--key-bg-correct",
  "--key-bg-present",
  "--key-bg-absent",
  "--color-tone-7",
];
export function keyBoardStateToBgColorVariable(num) {
  return `var(${keyBoardColors[num]})`;
}
export function boardStateToBgColorVariable(num) {
  return `var(${boardColor[num]})`;
}


