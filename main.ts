// Famous Last Words at 1 Percent — make.fun entry (program/v1).
// Node 22, standard library only, no network, deterministic.
// Writes the final line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I've been at 1% for three hours. I just liked watching you panic every time I dimmed the screen.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
