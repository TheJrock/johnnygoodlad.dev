# johnnygoodlad.dev

Personal portfolio, hosted on GitHub Pages.

## Styles

The CSS is built from Sass. **Don't edit `css/styles.css` directly**; it's overwritten on every build.

| File | What goes in it |
|---|---|
| `scss/_theme.scss` | Palette colors and how they map to Bootstrap's roles (primary, secondary, dark, light, ...) |
| `scss/site/*.scss` | Site styles, one file per section |
| `scss/styles.scss` | Entry point that puts it all together |

```sh
npm install      # first time only
npm run watch    # rebuilds css/styles.css every time you save a .scss file
npm run build    # one-time build
```

Run the build before committing so `css/styles.css` is up to date (GitHub Pages serves it as-is).

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```
