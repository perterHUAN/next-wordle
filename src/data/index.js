import { WORDS } from "@/data/words-sm";
export function isWord(str) {
  return WORDS.some((wd) => wd.toUpperCase() === str.toUpperCase());
}

export function generateRandomAnswer() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
