# Sloth Solutions – website

Plain static site: HTML + CSS + a little vanilla JS. No build step.
Open `index.html` in a browser to view it.

```
index.html        Development page (main page)
wine.html         Wine tastings page (the second "tab")
css/themes.css    ALL colours, one block per theme
css/style.css     layout + typography (uses only theme variables)
js/main.js        mobile menu, fade-in, theme picker (settings at the top)
assets/img/       logos + poster used on the site (copied from the graphic profile)
```

## I want to…

| I want to… | Do this |
|---|---|
| Change text | Edit `index.html` / `wine.html`. Sections are marked with `====` comment banners. |
| Fill in the placeholders | Search for `[` and `TODO` – email, phone, LinkedIn, org. no., prices, tech stack. |
| Add a service / tasting format | Copy an `<article class="card">…</article>` block. |
| Add a FAQ question | Copy a `<details>…</details>` block in `wine.html`. |
| Change my photo | Replace `assets/img/gustav-web.jpg` (keep it ~900 px wide so the page loads fast). Move the crop with `object-position` in `.portrait img` in `style.css`. |
| Switch colour theme | Change `data-theme="sloth"` on `<html>` (options: `sloth`, `sage`, `espresso`). |
| Try themes in the browser | Open `index.html?themes` – a picker appears bottom right. |
| Change a colour | Edit the variables in `css/themes.css`. |
| Give one section a different theme | Add `data-theme="rust"` (or `poster`, `espresso`…) to that `<section>`. |
| Use the real BC Ludva font | If you have a web licence: add the `.woff2` in `assets/fonts/`, an `@font-face` in `style.css`, and put `"BC Ludva"` first in the heading `font-family`. Antonio is a free stand-in. |
| Turn off the swaying sloth | Remove `animation: sway …` in `.hero-art .sloth` (it's already off for visitors who prefer reduced motion). |

## Hosting
Any static host works: Cloudflare Pages, Netlify or GitHub Pages – just point it at this folder
(no build command, output directory = root). Cloudflare Pages / Netlify are free with a private repo;
GitHub Pages needs a paid plan for private repos and the site is public either way.

The `Sloth-solutions-grafiskt/` folder holds the original brand files and doesn't need to be deployed.
