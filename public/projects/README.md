# Project screenshots

These thumbnails are live-site captures taken with Playwright headless Chromium
(see `scripts/screenshots.mjs`). They are downsized to 1600×1000 (16:10) to match
the project card aspect ratio.

- proveo.png
- kocreit.png
- fleiko.png
- korent.png
- crecystudio.png

To refresh them after a site redesign:

    node scripts/screenshots.mjs        # re-capture all five
    node scripts/optimize-thumbs.mjs    # downsize to 1600px wide
