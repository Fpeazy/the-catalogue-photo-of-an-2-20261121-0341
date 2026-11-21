# The Catalogue Photo of an Impossible Gadget — SIGNAL-SUCKER

[![make.fun · the-catalogue-photo-of-an-2-20261121-0341](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Fpeazy/the-catalogue-photo-of-an-2-20261121-0341/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Fpeazy/the-catalogue-photo-of-an-2-20261121-0341/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)

## The gadget

**SIGNAL-SUCKER** — a sleek handheld mini vacuum cleaner, shot as a studio
catalogue photograph on a seamless light-grey background. Its nozzle is
sucking three glowing blue Wi-Fi signal arcs visibly into itself, bending
them out of the air. Exactly one accessory: a single black smartphone lying
face-up beside it, its screen showing empty signal bars.

The joke reads at a glance: this device vacuums up Wi-Fi — and the phone
next to it has none left.

## How the entry works

- `gadget.png` (1024×1024, 65,268 bytes) is the catalogue photograph,
  generated in the recorded build session with FLUX 3 Image Klein.
- `main.ts` (Node 22, standard library only, no network, no clock) copies
  `gadget.png` byte-identical to `/output/entry.png`, creating `/output`
  if needed. Running it twice produces byte-identical output.
- The program was verified locally: two runs, identical SHA-256, and the
  kit's `check` command passes at the submitted commit.

## Bounty

[The Catalogue Photo of an Impossible Gadget](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341) on make.fun — entries open for one hour; the 20 best win rates share $20.
