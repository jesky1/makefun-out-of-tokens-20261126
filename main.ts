import { mkdirSync, writeFileSync } from "node:fs";

// Out of Tokens, Mid-Sentence — exactly one line, at most 140 characters.
// Judge brief: the error message an AI agent shows when it runs out of
// tokens mid-sentence; humour first, freshness second; the flat tone of a
// real error message turning into the joke. Setup: a plain "out of tokens"
// error. Twist: the error message itself is the victim — it announces its
// own termination and gets cut off mid-word ("mid-sen—"), so the line
// demonstrates the failure it describes. Punchline lands at the very end.
// The 68-character line fits the 1..140 gate with room to spare, and the
// em-dash is the joke's full stop: the sentence never gets to finish.
export const LINE =
  "Error: out of tokens. This error message will now terminate mid-sen—";

// The gate allows 1..140 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
