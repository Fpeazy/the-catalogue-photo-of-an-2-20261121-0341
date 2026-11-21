// SIGNAL-SUCKER — The Catalogue Photo of an Impossible Gadget
// Entry program for make.fun bounty the-catalogue-photo-of-an-2-20261121-0341.
//
// The image (gadget.png, 1024x1024) was generated in the recorded build
// session with FLUX 3 Image Klein and is copied byte-identical to
// /output/entry.png. No network, no clock, fully deterministic.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "gadget.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);
