# sadieforrester.com

Source for [sadieforrester.com](https://sadieforrester.com), Sadie Forrester's product design portfolio.

## What's here

Plain HTML and CSS, no build step. The site was designed in Claude Design and exported as static files.

- `index.html` – homepage with short strips for each case study
- `wut-mutt.html`, `lemon-pig.html`, `child-health-metrics.html`, `medical-learning-tool.html`, `seizure-medication-app.html`, `virus-response-platform.html` – case studies
- `about.html`, `ai-note.html` – about page and AI disclosure
- `cv.html`, `cv.pdf` – one-page CV, as a web page and a download
- `styles.css` – the single shared stylesheet
- `assets/` – images, icons and the link-preview card
- `404.html` – not-found page; it inlines `styles.css` so it works from any path

## Previewing locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Hosting

Published by GitHub Pages from the `main` branch of this user-site repo, so there is nothing to configure in the Pages settings. `CNAME` sets the custom domain and `.nojekyll` tells Pages to serve the files as they are. `sitemap.xml` and `robots.txt` are for search engines; each page carries Open Graph tags for link previews.

## Editing notes

- The homepage strips mirror the diagrams on their case-study pages; change both together.
- `404.html` inlines `styles.css`, so re-sync its `<style>` block after any stylesheet change.
- Re-exporting from Claude Design and copying over this repo wholesale would undo the fixes made here; paste specific edits instead.
