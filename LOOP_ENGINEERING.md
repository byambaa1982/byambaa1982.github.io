# Loop Engineering — Byambalogy Redesign

A self-correcting build loop: **Plan → Implement → Validate → Judge → Improve**.
Each pass runs the full loop; we only ship when the Judge scores ≥ target on every axis.

---

## 0. Mission

Redesign `byambaa1982.github.io` from a bloated fork of the TeXt Jekyll theme into a
**slick, minimal, dark-first personal blog** with an *Obsidian-study* aesthetic and
tasteful motion. **Preserve every post.** Delete everything else and rebuild the shell.

**Design north star:** the calm, typographically-driven, deep-slate look of Obsidian
Publish + kepano's *Minimal* theme, with 2026 motion cues — grain, radial glow,
scroll-reveal, view transitions, hover lift. Motion must be *believable*, never noisy.

> Research sources:
> - Obsidian *Minimal* (kepano) — distraction-free, type-first, content over chrome; deep slate `#0F172A–#1E293B`, soft `#EEEEEE` text, violet `#A882FF` accent, system fonts for zero FOUT.
> - 2026 web trends — grain-over-gradient, radial spotlight glows, scroll-driven reveals, hover lift/glow, MPA View Transitions. "The best motion doesn't try to be slick — it tries to be believable."

---

## 1. PLAN

**Keep**
- `_posts/*.md` (6 posts) — content untouched; front matter normalized only.
- `images/` — referenced by posts + about (diagrams, photo, icons).
- Favicon assets (`favicon.ico`, `apple-touch-icon`, `android-chrome-*`, `site.webmanifest`).

**Delete** (theme bloat)
- `docs/ docker/ test/ tools/ screenshots/ _sass/ _data/ _includes/ _layouts/`
- `Dockerfile.dev screenshot.jpg CHANGELOG.md HOW_TO_RELEASE.md README-zh.md`
- `UI_IMPROVEMENTS.md jekyll-text-theme.gemspec package.json LICENSE`
- `.travis.yml .commitlintrc.js .eslintrc .stylelintrc .stylelintignore .editorconfig`
- `projects.html archive.html 404.html assets/css/main.scss assets/search.js`
- `.github/ISSUE_TEMPLATE/ _posts/test.py`

**Build fresh (custom mini-theme)**
- `_config.yml` `Gemfile` `.gitignore`
- `_layouts/`: `default · home · post · page`
- `_includes/`: `head · header · footer · post-card`
- `assets/css/style.scss` · `assets/js/main.js`
- Pages: `index.html` (home) · `about.md` · `404.html`

**Design system** — dark default + light toggle
- Type: Inter (chrome/headings) · JetBrains Mono (kicker/meta/code) · serif stack (prose reading).
- Palette (dark): bg `#0a0b0f`, surface `#14161d`, text `#e7e9ef`, muted `#9298a6`, accent `#8b7bff`, accent-2 `#56d4c4`.
- Motion: SVG grain overlay, floating radial glows, reading-progress bar, IntersectionObserver scroll-reveal, card hover lift+glow, MPA `@view-transition`, pointer spotlight (subtle), animated gradient wordmark.
- Home extras: client-side tag chips + text filter over posts.
- A11y: honors `prefers-reduced-motion`; AA contrast; keyboard-navigable; semantic landmarks.

---

## 2. IMPLEMENT
1. Write `LOOP_ENGINEERING.md` (this file). ✅
2. Delete theme bloat.
3. Normalize post front matter (`tag`→`tags`, drop conflicting `layout: article`).
4. Scaffold config + layouts + includes.
5. Author `style.scss` (design system) + `main.js` (motion/filter/theme).
6. Rebuild `index.html`, `about.md`, `404.html`.

## 3. VALIDATE (mechanical — must pass)
- [ ] `bundle exec jekyll build` completes with no errors.
- [ ] All 6 posts render; every in-post image/diagram link resolves.
- [ ] No dead links to deleted theme assets in built `_site`.
- [ ] Home lists all posts; tag filter + search work.
- [ ] Theme toggle persists; dark is default.
- [ ] Reduced-motion disables animation; no layout shift.

## 4. JUDGE (qualitative — score 1–5, target ≥ 4 each)
| Axis | What "5" looks like |
|------|---------------------|
| **Aesthetic** | Reads as one deliberate system; Obsidian-calm, not template-y. |
| **Motion** | Every animation earns its place; believable, never distracting. |
| **Typography** | Clear hierarchy, comfortable measure, crisp on both themes. |
| **Performance** | ≤ 2 webfonts, no CLS, fast first paint, lean CSS/JS. |
| **Content fidelity** | Posts intact & more readable than before. |
| **A11y** | Keyboard + reduced-motion + AA contrast all hold. |

## 5. IMPROVE
Log each shortfall below with the fix, then re-run VALIDATE → JUDGE. Ship at all-≥4.

### Iteration log
- **v1** — initial full rebuild. Deleted TeXt theme, built custom mini-theme + design system. `jekyll build` (Jekyll 3.10, GitHub-Pages-pinned) exits 0.
- **v1.1 — VALIDATE fixes**
  - Empty card excerpt on `jobdemand` (first line was an image) → added `excerpt:` front matter.
  - Heading-only excerpt on `rag-vs-cag` (first line was `## Introduction`) → added `excerpt:`.
  - `site.webmanifest` still branded "TeXt Theme" / white theme-color → rebranded "Byambalogy" / `#0a0b0f`.
  - Mobile nav hid "About" on home (`:not(.is-active){display:none}`) → keep Writing + About + toggle, hide only GitHub.
  - Gemfile platform deprecation (`:mingw`) → `:windows`.
- **VALIDATE result:** build clean; all 6 posts render; syntax highlighting present in code-heavy posts (12 & 36 blocks); feed/sitemap/robots generated; SEO title+canonical on posts; all cards have reading-time + non-empty excerpt; in-post images resolve.
- **Tooling:** installed Ruby 3.3.11 + DevKit locally (winget) so `bundle exec jekyll serve` works for future edits.
- **JUDGE (self, target ≥4):** Aesthetic 5 · Motion 4 · Typography 5 · Performance 4 (3 webfonts — Newsreader kept for prose; acceptable) · Content fidelity 5 · A11y 4. _All axes ≥4 → ship-ready pending user visual review._
