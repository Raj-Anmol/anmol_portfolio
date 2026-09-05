# Anmol Raj | Portfolio Website

A modern, responsive, and SEO-optimized portfolio website showcasing professional experience, projects, skills, and certifications for a **Full Stack Developer** specializing in **AI integration**.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4** — designed to be recruiter-friendly, fast-loading, and accessible across all devices.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Dark Theme** | Professional dark color scheme with indigo & green accents + light mode toggle |
| 📱 **Fully Responsive** | Mobile-first design, works perfectly from 320px to 4K displays |
| ⚡ **Static Generation** | Pre-rendered pages for optimal performance and SEO |
| 🔍 **SEO Optimized** | JSON-LD structured data, sitemap.xml, robots.txt, meta tags |
| 🎯 **Case Study Pages** | Dedicated `/projects/[id]` routes with detailed project information |
| 📄 **Resume Viewer** | PDF resume opens in browser's default PDF viewer |
| 🖼️ **Optimized Images** | WebP + AVIF formats, responsive sizes via `next/image` |
| ♿ **Accessible** | WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly |
| 🌐 **Multi-Page Architecture** | Each section has its own URL (`/about`, `/projects`, `/contact`, etc.) |
| 📊 **Real Project Data** | Detailed case studies with problem, solution, features, challenges |
| 🎬 **Scroll Animations** | Smooth fade/translate reveal on scroll powered by Framer Motion |
| 🪄 **Interactive Cards** | Hover-driven lift & scale effects on project, skill, and certificate cards |
| ⌨️ **Command Palette** | `⌘K` / `Ctrl+K` quick navigation (Linear/Vercel-style) with keyboard support |
| 📊 **Animated Counters** | Hero stats with count-up animation on scroll into view |
| 🔦 **Spotlight Cards** | Mouse-follow radial gradient on project cards |
| 📈 **Scroll Progress** | Top progress bar that fills as you scroll |
| ✨ **Word Reveal** | Hero heading reveals word-by-word on load |
| 📋 **Contact Form** | Real form with zod validation + optional Resend email delivery |
| 🎯 **Skill Proficiency** | 1-5 dot proficiency scale per skill category |
| 🌓 **Theme Toggle** | Animated sun/moon morph with persistent dark/light mode |
| 🚧 **Branded 404** | Custom not-found page with animated graphics |
| ⏳ **Loading Skeleton** | Route-level shimmer loading state |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| **UI / Animation** | [motion](https://motion.dev/) (Framer Motion) |
| **Forms & Validation** | [react-hook-form](https://react-hook-form.com/) + [zod](https://zod.dev/) |
| **Command Palette** | [cmdk](https://cmdk.paco.me/) |
| **Toasts** | [sonner](https://sonner.emilkowal.ski/) |
| **Email Delivery** | [Resend](https://resend.com/) (optional) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG components |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Image Processing** | [sharp](https://sharp.pixelplumbing.com/) |
| **Sitemap** | [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) |
| **Linting** | [ESLint](https://eslint.org/) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 📁 Project Structure

```
anmol-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (Navbar + Footer + ScrollLock)
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles & CSS variables
│   │   ├── about/             # /about page
│   │   ├── experience/        # /experience page
│   │   ├── projects/          # /projects + /projects/[id] case studies
│   │   ├── skills/            # /skills page
│   │   ├── education/         # /education page
│   │   ├── certificates/      # /certificates page
│   │   └── contact/           # /contact page
│   ├── components/             # React components
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── icons/             # Custom SVG icons
│   │   │   ├── GithubIcon.tsx
│   │   │   └── LinkedinIcon.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollLock.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Certificates.tsx
│   │   └── Contact.tsx
│   ├── data/                  # Static data
│   │   └── projectDetails.ts  # Case study data
│   └── lib/                   # Utilities and constants
│       ├── constants.ts       # Profile, education, experience, projects, skills
│       ├── utils.ts           # cn() helper
│       └── schema.ts          # JSON-LD structured data
├── public/                    # Static assets
│   ├── profile.png            # 512x512 profile photo (~150KB)
│   ├── profile.webp           # WebP version (~21KB)
│   ├── favicon.ico            # 32x32 favicon
│   ├── apple-touch-icon.png   # 180x180 Apple touch icon
│   ├── manifest.json
│   ├── robots.txt
│   ├── project-image/         # Project screenshots
│   │   ├── ai-student-travel-planner.png
│   │   ├── ai-student-travel-planner.webp
│   │   ├── krishi-seva-center.png
│   │   └── krishi-seva-center.webp
│   └── resume/                # Resume PDFs
│       └── Anmol-Raj-Resume.pdf
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── components.json            # shadcn/ui configuration
├── postcss.config.mjs         # PostCSS configuration
├── next-sitemap.config.js     # Sitemap configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+ (or pnpm/yarn/bun)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Raj-Anmol/anmol-portfolio.git
   cd anmol-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production + generate sitemap |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run sitemap` | Generate sitemap only |

---

## 🎨 Customization

### Update Personal Information

Edit `src/lib/constants.ts` to update:

- **Profile** — name, title, location, email, social links, resume URL
- **Education** — degree, institution, period
- **Experience** — internships, roles, bullets, certificate URLs
- **Projects** — name, tagline, description, tech stack, URLs
- **Skills** — categorized by language, frontend, backend, database, tools
- **Certificates** — name, issuer, period, verify URL

### Update Project Case Studies

Edit `src/data/projectDetails.ts` to add:
- Problem statement
- Solution overview
- Detailed features list
- Architecture description
- Challenges faced
- Key learnings

### Update Project Screenshots

1. Add new screenshot to `public/project-image/` (PNG format)
2. Optionally create a WebP version for better compression
3. Update project image path in `src/lib/constants.ts`

### Update Theme Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 239 84% 67%;        /* Indigo */
  --secondary: 142 76% 36%;     /* Green */
  --background: 0 0% 3%;        /* Near black */
  /* ... */
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js — no config needed
   - Click **Deploy**

3. **Your site is live!**
   - Default URL: `https://anmol-portfolio-[hash].vercel.app`
   - Or connect a custom domain

### Manual Deployment

Build the production bundle:
```bash
npm run build
```

The output is in `.next/` folder. Deploy to any Node.js hosting:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Self-hosted** (with `npm run start`)

---

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- 🖼️ **Image Optimization:** WebP/AVIF formats, responsive sizes, lazy loading
- 📦 **Bundle Size:** ~100 KB initial JS (with code splitting)
- 🚀 **Time to Interactive:** < 2s on 3G
- 📱 **Mobile-First:** Optimized for 320px+ screens

---

## 🔍 SEO Features

- ✅ JSON-LD structured data (Person, WebSite, Project, Credential schemas)
- ✅ Sitemap.xml (auto-generated by `next-sitemap`)
- ✅ Robots.txt
- ✅ Open Graph meta tags (Facebook, LinkedIn)
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text on all images
- ✅ Semantic HTML5 elements

---

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Screen reader friendly (ARIA labels, semantic HTML)
- ✅ Focus indicators on all interactive elements
- ✅ Color contrast ratios meet standards
- ✅ `aria-current="page"` on active nav items
- ✅ `aria-live` regions for dynamic content
- ✅ Skip-to-content ready

---

## 📞 Contact

| Platform | Link |
|----------|------|
| **Portfolio** | [anmolraj.vercel.app](https://anmolraj.vercel.app) |
| **LinkedIn** | [linkedin.com/in/raj-anmol](https://www.linkedin.com/in/raj-anmol/) |
| **GitHub** | [github.com/Raj-Anmol](https://github.com/Raj-Anmol) |
| **Email** | [araj97855@gmail.com](mailto:araj97855@gmail.com) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as a template for your own portfolio!

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [motion](https://motion.dev/) — Animation library (formerly Framer Motion)
- [shadcn/ui](https://ui.shadcn.com) — Beautiful UI components
- [Vercel](https://vercel.com) — Hosting & deployment
- [Lucide](https://lucide.dev) — Icon library
- [sharp](https://sharp.pixelplumbing.com) — Image processing
- [cmdk](https://cmdk.paco.me) — Command palette
- [react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev) — Form validation
- [Resend](https://resend.com) — Email delivery

---

<p align="center">
  Built with ❤️ using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>
</p>