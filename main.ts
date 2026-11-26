// The Funniest One-Line Resignation Letter — make.fun entry.
// Writes exactly one line (132 characters) to /output/entry.txt.
// A cron job resigns by sending its last unread Monday report —
// the resignation IS the report nobody ever opened.
// "I resign: I emailed you a report every Monday for two years and nobody ever opened one — this is the last one you won't read either."
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const letter =
  "I resign: I emailed you a report every Monday for two years and nobody ever opened one — this is the last one you won't read either.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");
