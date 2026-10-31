# Siân’s portfolio

Personal portfolio built with React, TypeScript and Vite.

## Local development

```bash
npm ci
npm run dev
```

The site uses the `/siancodes/` base path. Open the local URL with that path, for example http://localhost:5173/siancodes/.

```bash
npm run build
npm run preview
```

## Publishing

Source repository: https://github.com/sian-codes/siancodes

One-time setup in GitHub: open **Settings → Pages** and select **GitHub Actions** as the build source.

Commit changes and push using GitHub Desktop. Pushes to `main` or `master` run `.github/workflows/deploy.yml`, which builds and deploys the site. You can also run **Deploy portfolio** manually from the repository’s Actions tab.

Live site: https://sian-codes.github.io/siancodes/

The workflow uses GitHub’s built-in token; no personal access token is needed for deployment. GitHub Desktop handles authentication for source pushes.

## Source layout

- `src/sections`: About, Skills, Experience and Projects
- `src/components`: shared components
- `src/styles`: section styles
- `src/assets`: images and downloadable CV

To replace the CV, update `src/assets/Sian-Kearley-CV.pdf`.
