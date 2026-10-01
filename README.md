# Steiner Lab Website

Source for the Steiner Lab website at **https://steinerlab.github.io/** — the research group of
[Nicholas C. Steiner](https://www.ccny.cuny.edu/profiles/nick-steiner) in the Department of Earth
and Atmospheric Sciences at The City College of New York.

Built with [Astro 4](https://astro.build/), styled with [Tailwind CSS](https://tailwindcss.com/).
Deploys to GitHub Pages automatically on every push to `main` (`.github/workflows/astro.yml`).

## Local development

```sh
npm ci        # install dependencies
npm run dev   # start dev server at http://localhost:4321
npm run build # type-check + production build (also runs in CI)
```

## Adding content

### Blog post

Create a new Markdown file in `src/content/blog/`, e.g. `2026-my-new-post.md`:

```md
---
title: "My Post Title"
description: "One-sentence summary shown on cards and in SEO."
date: "2026-02-14"
tags: ["project-update", "sar"]
draft: false
---

Post body goes here (Markdown + MDX supported, incl. math via KaTeX).
```

Posts are sorted newest-first. Set `draft: true` to hide a post. All published posts are
included in the RSS feed (`/rss.xml`) and the client-side search index.

### Publication

Create a new Markdown file in `src/content/publications/`, e.g. `steiner-2026-title.md`:

```md
---
title: "Full Paper Title"
description: "One-sentence summary."
date: "2026"
authors: "Nicholas C. Steiner, Co Author"
paperURL: "Paper: https://ieeexplore.ieee.org/document/12345678"
codeURL: "Code: "
webURL: "Web: "
dataURL: "Data: "
img: "/paper-teaser.jpg"
imgAlt: "Description of the teaser image."
pub: "Journal or Conference Name"
---
```

Link fields use the `"Label: URL"` format — leave the URL part blank when there is no link,
e.g. `codeURL: "Code: "`. Publications are sorted newest-first and appear on the
Publications page and (the 3 newest) on the homepage. The author name matching
`HIGHLIGHTAUTHOR` in `src/consts.ts` is underlined in author lists.

### News item

Edit `src/data/news.ts` and add an entry to the `NEWS` array (newest first). The homepage
renders the list in a scrollable box.

### Homepage projects

The flagship project cards on the homepage are defined in the `flagshipProjects` array at
the top of `src/pages/index.astro`.

### CV and People pages

CV and People content is currently hardcoded in `src/pages/cv.astro` and
`src/pages/about.astro` — edit the arrays/markup directly in those files.

## Site configuration

Global metadata (title, description, contact email, homepage counts) lives in
`src/consts.ts`. Per-page titles/descriptions are the `HOME`, `BLOG`, `RESEARCH`, `CV`,
`TAGS`, and `ABOUT` objects in the same file.

## Search

Client-side search is powered by [Pagefind](https://pagefind.app/) (`astro-pagefind`).
The index is generated at build time. Content wrapped in `data-pagefind-ignore` is
excluded from the index — that attribute should only be used on site chrome
(header/footer/search UI), never on page content.

## Credits

Site originally built from the
[astro-micro-academic](https://github.com/jingwu2121/astro-micro-academic) template
(by Trevor Tyler Lee / Jing Wu). See `LICENSE` for attribution details.
