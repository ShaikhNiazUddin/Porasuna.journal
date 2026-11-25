# Porasuna

A public MkDocs Material site for course materials. Only repository collaborators can edit source files.

The design takes inspiration from neobrutalism.dev: grid background, heavy outlines, offset shadows, and bright flat colors. Headings use the included Lemon Milk font. Body text uses IBM Plex Mono, with Courier New as a fallback. Lemon Milk's educational/non-profit terms are included in `docs/assets/fonts/LEMONMILK-LICENSE.txt`.

## Run locally

Install Python, then run from this directory:

```bash
python -m venv .venv
python -m pip install -r requirements.txt
mkdocs serve
```

For a quick local preview without Python, run `node preview.js` and open `http://127.0.0.1:8000/`. This preview renders the same page content and stylesheet with a lightweight local navigation shell; the published site is built by MkDocs.

CS295 Final contains an interactive Lecture 7 study deck. Its 20 Done buttons save progress in the visitor's browser. To edit the lesson text, update `lesson-sources/cs295-lecture-07-strings.md` and run `node scripts/generate-lecture-07.js`.

## Add material

- Add Markdown notes, slides, or PDFs inside an assessment folder. Add a Markdown link from that folder's `index.md` to each PDF; the browser can display it and visitors can download it.
- Add class tests as `class-test/ct-3/index.md`, and so on.
- Rename an overview heading when a course title is known; course codes remain stable in URLs and menus.
- Add `docs/semester-05/index.md` and course folders when Semester 5 begins. `hooks.py` adds it to navigation automatically. No folders exist yet for Semesters 5–12.
- Delete an unused assessment folder to hide it from navigation. The navigation reads the folders on every build.

## Publish

1. Extract the Porasuna ZIP. Create a new public GitHub repository with `main` as its default branch.
2. Upload the **contents** of the extracted folder to the repository root. Make sure `.github/workflows/deploy.yml`, `mkdocs.yml`, and `docs/` are at the root, then commit the upload.
3. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy Porasuna** to finish. The Pages URL appears in the deployment result.

Each later push to `main` rebuilds and publishes the site. GitHub must extract the ZIP before upload; uploading the ZIP as a single repository file will not publish the site.

The palette can be changed in `docs/assets/stylesheets/porasuna.css`.
