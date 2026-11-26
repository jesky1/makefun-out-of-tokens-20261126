import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LINE } from "./main.ts";

test("entry is exactly one line within the 1..140 character gate", () => {
  assert.equal(LINE.split("\n").length, 1);
  assert.ok(LINE.length >= 1 && LINE.length <= 140);
  assert.ok(LINE.trim().length > 0);
});

test("entry reads as an out-of-tokens error that cuts itself off", () => {
  assert.ok(LINE.startsWith("Error: out of tokens."));
  assert.ok(LINE.endsWith("mid-sen—"));
});

test("entry.txt is byte-identical to the line, with no trailing newline", () => {
  const written = readFileSync("/output/entry.txt", "utf8");
  assert.equal(written, LINE);
  assert.ok(!written.endsWith("\n"));
});
