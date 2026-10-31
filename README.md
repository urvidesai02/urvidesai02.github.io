# Urvi Desai's Portfolio

A modern, professional portfolio showcasing ML engineering work, research, and leadership experience.

Built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**. Optimized for GitHub Pages static deployment.

## Features

- ✨ Bright blue/white gradient design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast static export for GitHub Pages
- 🎯 Sections: Hero, Featured Projects, Skills, Publications, Contact
- 🔗 Social links (GitHub, LinkedIn, Email)
- 📄 CV/Resume download link

## Tech Stack

- **Framework**: Next.js 15 (with `output: 'export'` for static generation)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Deployment**: GitHub Pages (static export)

## Getting Started

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### 3. Build & Deploy to GitHub Pages

```bash
npm run build
```

This generates static files in the `out/` directory, ready for GitHub Pages.

To deploy:

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `/(root)` on `main` branch (or your build output directory)

Or use GitHub Actions for automatic deployment on push.

## Customization

### Update Project Content

Edit `components/Projects.tsx` to:
- Add/remove projects
- Update descriptions and achievements
- Add demo links (GitHub, live site, etc.)

### Update Skills

Edit `components/Skills.tsx` to:
- Add/remove skill categories
- Update skill lists

### Update Publications

Edit `components/Research.tsx` to:
- Add new papers
- Update DOI links

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#2563eb',  // Change blue shade
    // ...
  },
},
backgroundImage: {
  'gradient-hero': 'linear-gradient(...)',  // Change gradient
}
```

### Update Contact Info

Edit `components/Contact.tsx` to update email, phone, and social links.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home page (sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── Header.tsx        # Sticky nav
│   ├── Hero.tsx          # Blue gradient hero
│   ├── Projects.tsx      # Featured projects
│   ├── Skills.tsx        # Technical skills grid
│   ├── Research.tsx      # Publications
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── next.config.js        # Static export config
├── tailwind.config.js    # Tailwind theme
└── tsconfig.json         # TypeScript config
```

## Deployment Options

### GitHub Pages (Recommended for you)

```bash
npm run build
# Commit & push out/ directory or use GitHub Actions
```

### Vercel (Alternative)

```bash
vercel
```

Vercel auto-deploys on push to GitHub.

## Notes

- All images/demos can be added to project cards later
- Links to demo videos, live sites, or GitHub repos are supported
- The portfolio is fully self-contained (no external API calls)
- Fully ATS-scannable text for recruiter parsers

## License

© 2025 Urvi Desai. All rights reserved.
