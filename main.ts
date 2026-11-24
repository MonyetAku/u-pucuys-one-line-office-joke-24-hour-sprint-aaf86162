// One-Line Office Joke: 24-Hour Sprint
// Writes the winning one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke is a single line of at most 200 characters, deadpan, built on the
// 3-beat shape: thermostat setup, escalating office details, kicker on the
// last word.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The thermostat says 18, the window is open, and Dave wears a parka indoors — the office has two seasons: freezing, and Dave.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
