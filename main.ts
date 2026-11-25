import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast for make.fun: long-roast-lawmakers-20261125.
// The grader runs this in a read-only sandbox, so the only write target
// is the absolute path /output/entry.txt. No relative writes anywhere:
// a bare writeFileSync("entry.txt", ...) would throw there and fail the run.
// Output is exactly one line, with no trailing newline.
const line =
  "The man who wrote the law on what algorithms may show two billion people filed his own bill as a Word file, and his office printed it, scanned it, and emailed it back as a PDF that is just a photograph of paper.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
