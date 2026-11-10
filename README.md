# Abdullah Gul Awan — Portfolio

Personal portfolio built with Vite, React, TypeScript and Tailwind CSS.
Live at https://abdullahgul12.github.io/CV/

## Develop

```bash
npm install
npm run dev
```

## Update content

All content lives in `src/data/` (profile, experience, projects, aiProjects, skills, education, contact).
The profile photo is `public/images/profile.jpg`; project thumbnails are in `public/images/projects/`.

## Check and deploy

```bash
npm run build
npm run check-links
```

Pushing to `master` deploys to GitHub Pages through `.github/workflows/deploy.yml`
(repo Settings → Pages → Source must be "GitHub Actions").
The previous static site is kept on the `legacy-static-site` branch.
