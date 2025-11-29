---
title: RoboCon 2026 Patch 1 Released
lastUpdated: 2025-11-29
description: Patch 1 released containing many bug fixes
layout: ../../layouts/NewsLayout.astro
---

we had a thing, we did some stuff, some people reported problems, we hope this fixes it. Please report any bugs...

We ran the RoboCon 2026 kickoff event at the start of November. See our
[other blog post](https://robocon.uk/news/robocon-2026-kickoff/) to read
more about it.

During this event, and in the past month, issues have been identified by us,
and reported by teams. We are releasing patch 1 which aims to fix some of these
issues. Please report any bugs you find to us, so we can release further
patches for them.

The patch file is available to download
[here](https://github.com/systemetric/patches/releases/download/2026_p5/RoboCon2026_p5.py)

To apply this patch, follow the instructions in
[our documentation](https://docs.robocon.uk/tools/patching-the-robot/).
Be aware that this patch is large, and applying it might take some time.**Do
not restart your brain during the patching process.**If you have any trouble
applying this patch, please contact us.

Various issues are included in the patch, some of which are critical to
operation of the brain and will cause difficult to debug issues for all teams.

The issues listed below are in order of severity.

- **Brain silently stops responding to user interface**:
    Sometimes, code would fail to start, or the brain would stop responding
    to user input such as restarts or code modification. Log output may freeze.
    Users may not notice this failure and continue to develop code which would
    fail to be saved and be lost.
    This issue can be easily trigged by printing large amounts to the logs in
    a short peroid of time.
    The only workaround for this issue is to do a power cycle on the RoboCon
    Brain

- **Logs not copied to USB stick**:
    During operation, logs can be automatically saved to a USB stick, [see the
    documentation here][USBLOGS], this functionality did not work.

- **2025 competition images on brain homepage**:
    Some brains failed to get the branding for this years compitition. 
    If you saw references to 2025's competition, "Dragon's Lair", these are
    now updated for 2026.

- **Blockly broken**:
    The brain can be programmed in Python or in a Scratch-like enviroment
    called Blockly, if you tried to run Blockly code, you would get an import
    error. When programming in Blockly, the intermidate translation into Python
    can be viewed on a new pane. This pane could not be resized and therefore
    couldn't be read clearly.

- **Markers**:
    Some identification details for markers was incorrect.

- **Various other minor fixes**

[USBLOGS]: https://docs.robocon.uk/tools/running-code-from-a-usb/#getting-logs

