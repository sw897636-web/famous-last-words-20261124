// Famous Last Words at 1 Percent — make.fun entry (program/v1).
// Node 22, standard library only, no network, deterministic.
// Writes the final line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line (v3, 96 chars): the phone confesses it was never really
// dying on schedule — it dimmed its own screen to enjoy the owner's panic.
const FINAL_LINE =
  "I've been at 1% for three hours. I just liked watching you panic every time I dimmed the screen.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", FINAL_LINE);
