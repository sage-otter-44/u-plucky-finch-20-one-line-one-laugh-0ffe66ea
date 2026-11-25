import { mkdirSync, writeFileSync } from "node:fs";

// One line, one laugh: concrete scene (self-checkout) + twist at the end.
const beats = [
  "The self-checkout flagged an unexpected item in the bagging area.",
  "It was my dignity.",
  "It has been sitting there since 2019.",
];
const line = beats.join(" ");

function assertGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim().length === 0) throw new Error("entry must not be blank");
}

assertGate(line);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
