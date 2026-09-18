# Mohamed Ayman El-Halmoushy — Portfolio

A multi-page personal portfolio (Home, About, Experience, Projects, Achievements, Moments, Skills, Contact) with a static upper-body 3D avatar on the Home hero, loaded with Three.js.

Plain HTML, CSS and JavaScript. No build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repository and push these files to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site appears at `https://<your-username>.github.io/<repository-name>/`.

## Use your own 3D model

Put your model at `assets/model.glb`. When the site is served over http(s), it loads automatically on the Home page. The current scene shows the avatar's upper body and keeps it static.

You can also try a model without adding it to the repo: click **Load my GLB model** on the site.

## Add your photos

- **Portrait:** the About section uses `assets/image about.png`.
- **Moments:** the Moments section uses the uploaded files listed below. Add or remove paths in the `MOMENTS` array in `js/main.js` when changing galleries.

## Hardcoded assets

Add the following files before deploying to GitHub Pages. The filenames are already referenced by `index.html` and `js/main.js`:

- `assets/image about.png`
- `assets/PRESIDENT.png`
- `assets/HNU_OFFECIAL WEB SITE.png`
- `assets/Hackathon_1.jpg`
- `assets/Deci_1.jpeg`, `Deci_2.jpeg`, `Deci_3.jpeg`
- `assets/DEMI_1.jpeg` through `DEMI_8.jpeg`
- `assets/we_training.jpg`

You can add more images to a Moment by extending its `images` array in `js/main.js`.

## Edit content

All projects, achievements, certifications, moments, skills and experience live at the top of `js/main.js` (`PROJECTS`, `ACH`, `CERTS`, `MOMENTS`, `SKILLS`, `EXPERIENCE`). Colours and fonts are CSS variables at the top of `css/style.css`.

## Structure

```
index.html
css/style.css
js/main.js
assets/        # model.glb, photos
```

The contact form opens the visitor's email app (`mailto:`), so no backend is needed. The repository includes `assets/model.glb`; keep that file when uploading to GitHub Pages.
