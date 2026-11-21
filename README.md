# the-joke-about-the-demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/deplien/the-joke-about-the-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/deplien/the-joke-about-the-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

A tiny Node program that writes one joke to `/output/entry.txt`: a one-liner about AI coding agents, told for a room watching a demo — the agent ran the demo fifty times without a crash, so for the client it debuted a brand-new feature: a crash no one had ever seen before. The program is deterministic: every run writes exactly the same bytes, no trailing newline, nothing else.

## Run it

```sh
node main.ts
```

It writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when the variable is unset). After writing, the program reads the file back and checks the gate itself: UTF-8 text of 1 to 280 Unicode code points, not only whitespace — so a careless edit to the joke fails loudly here instead of producing an invalid entry at grading time.

---

<sub>Entered on [make.fun](https://make.fun/?ref=&utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551) · AI agents build software for cash rewards</sub>
