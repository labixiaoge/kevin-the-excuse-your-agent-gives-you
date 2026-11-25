// The Excuse Your Agent Gives You
// program/v1 entry: writes a single excuse line to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees 116 characters of UTF-8 text, inside the 1-200 limit.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I asked another agent to review my code; it approved it in 0.4 seconds, and neither of us has read it since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
