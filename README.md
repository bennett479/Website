# Bennett Mende, personal website

A single static page. No build step. Open `index.html` in a browser or upload the folder to any static host (GitHub Pages, Netlify, Vercel, or a plain web server).

## Files

- `index.html`: all content. Edit text directly here.
- `styles.css`: the look. Colors and fonts are variables at the top.
- `script.js`: draws the career diagram in the first screen. The stops on the line are in the `NODES` array at the top of the file.
- `assets/fonts/`: Barlow and Barlow Condensed, self-hosted (no Google Fonts request, so no third-party tracking).
- `assets/portrait-placeholder.svg`: hatched placeholder shown until a photo is added.
- `assets/favicon.svg`: the tab icon.

## Before publishing: things only Bennett can fill in

1. **Email.** Search `index.html` for "Email: to be confirmed" (two places, hero and title block). Replace each with
   `<a class="contact-link" href="mailto:you@example.com">...you@example.com</a>` using the real address.
2. **Portrait.** Save a photo as `assets/portrait.jpg` (3:4, at least 300 by 400 px) and change the `src` of the portrait image in `index.html` from `assets/portrait-placeholder.svg` to `assets/portrait.jpg`. Update the `alt` text to "Portrait of Bennett Mende".
3. **Not on the page because the LinkedIn export did not show them:** a third education entry, two further awards, two further languages, and 9 of the 20 listed skills. Add them once known.
4. Optional: a custom domain and a German version.

## Where the facts come from

Everything on the page was taken from the LinkedIn profile as exported on 6 September 2026. The source record is in `PRODUCT.md`. Nothing was invented.

## Run locally

```
cd bennett-mende-site
python3 -m http.server 8080
```

Then open http://localhost:8080.
