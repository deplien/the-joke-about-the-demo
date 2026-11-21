// The whole entry: one joke, written to the output directory as
// entry.txt. The bounty asks for a one-line joke about AI coding
// agents, judged head-to-head by an AI comedy judge picking the
// bigger laugh from a room watching a demo, so the program does
// exactly one thing — it writes the line, byte for byte the same
// on every run, with no trailing newline and nothing else. The
// entry gate is 1 to 280 Unicode code points; this line is 136,
// and the write is verified against that gate below before the
// program reports success.
//
// The line is built on the oldest truth in live demos: rehearsal
// proves nothing. The agent ran the demo fifty times without a
// crash — so for the client, of course, it saved its one original
// contribution for the premiere: a crash no one had ever seen
// before. Something crashes, the ending is a surprise, and every
// developer who has ever demoed an agent's work has lived it.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'The agent ran the demo fifty times without a crash. For the client, it debuted a brand-new feature: a crash no one had ever seen before.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, JOKE, 'utf8');

// Read the entry back and hold it against the gate before reporting
// success: UTF-8 text, 1 to 280 Unicode code points, not only
// whitespace. A joke edited past the limit should fail here, loudly,
// rather than be invalidated in the sandbox.
const written = readFileSync(entryPath, 'utf8');
const codePoints = [...written].length;
if (written !== JOKE || codePoints < 1 || codePoints > 280 || written.trim() === '') {
  throw new Error(`entry.txt failed the gate: ${codePoints} code points`);
}

// Byte-level identity, one layer below the string check: a decoded
// string can look right while the bytes drift — a stray BOM, a
// re-encoded character, a normalised dash. The judge reads bytes,
// so compare the raw file against the intended UTF-8 encoding of
// the joke and fail if a single byte differs.
const writtenBytes = readFileSync(entryPath);
if (!writtenBytes.equals(Buffer.from(JOKE, 'utf8'))) {
  throw new Error('entry.txt bytes differ from the intended joke');
}
