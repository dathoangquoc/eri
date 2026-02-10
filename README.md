# Piano Portfolio Website
Made with Next.js

The site is live here: https://nhungle.netlify.app/

Design by nhung.ple.hn@gmail.com

## Helper Scripts

For optimizing gifs
```bash
ffmpeg -y -i 4.gif \
-vf "fps=24,scale=720:-1:flags=lanczos,format=yuv420p" \
-c:v libvpx-vp9 \
-crf 18 -b:v 0 \
-deadline good -cpu-used 1 \
-row-mt 1 \
4.webm

```