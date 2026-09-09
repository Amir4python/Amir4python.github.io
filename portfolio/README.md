# Portfolio site

A minimal, static portfolio site. No build step, no framework — just
`index.html`, `style.css`, `script.js`, and `data.js`.

## Editing your content

Open **`data.js`**. Everything on the page — your name, degrees,
experience, projects, and certifications — lives in that one file as
plain JavaScript objects. `script.js` reads it and builds the page;
you never need to touch the HTML/CSS to update content.

### Adding a new certificate
1. Put the certificate image (a screenshot or exported badge, `.png`/`.jpg`/`.svg`)
   into `images/certs/`.
2. In `data.js`, copy one of the objects inside `certifications: [ ... ]`
   and edit the fields:
   ```js
   {
     name: "Certificate name",
     issuer: "Issuing organization",
     date: "2025",
     image: "images/certs/your-file.png",
     link: "https://verify-url-for-this-cert"
   }
   ```
3. Save. Refresh the page — it's now on the site, no other changes needed.

### Adding a new project
Copy an object inside `companyProjects` (no `link` field — these stay
private) or `personalProjects` (can include a `link`):
```js
{
  title: "Project name",
  period: "2025",
  bullets: [
    "First point — what you built or the problem it solved.",
    "Second point — an outcome, metric, or scope detail.",
    "Add as many bullets as you need."
  ],
  stack: ["Tech", "Used", "Here"],
  link: "https://github.com/you/repo"   // personal projects only
}
```

## Running it locally
Just open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Publishing with GitHub Pages
1. Create a new GitHub repository (e.g. `your-username.github.io` for a
   root domain, or any name for a project page).
2. Push these files to it:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from
   branch → `main` / `/(root)`** → Save.
4. Your site will be live at `https://your-username.github.io/your-repo/`
   (or `https://your-username.github.io/` if you used the root-domain
   repo name) within a minute or two.

## Notes
- Company projects intentionally have no code link, since those repos
  are private — just a short, honest description of the problem and
  outcome instead.
- The certificate thumbnails currently point to a placeholder image at
  `images/certs/placeholder.svg`. Replace with your real certificate
  images as you go.
