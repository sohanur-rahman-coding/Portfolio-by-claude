# Sohanur Rahman — Portfolio (Next.js)

A professional, animated portfolio website built with **Next.js 14**, **Framer Motion**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Stunning dark design** with orange accent, glassmorphism cards, and noise texture overlay
- 🖱️ **Custom cursor** with smooth lag-following ring
- 📜 **Scroll progress bar** at top of page
- 🌀 **Framer Motion animations** — staggered reveals, layout transitions, page-load sequences
- 🎯 **Side navigation dots** that track active section
- 📦 **Animated skill bars** with live counter
- 🔍 **Project filter** with smooth AnimatePresence transitions
- 🌐 **Marquee tech stack** ticker
- 📱 **Fully responsive** with mobile menu
- ⚡ **Next.js App Router** with Google Fonts optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── Cursor.tsx        # Custom cursor with lag effect
│   ├── ProgressBar.tsx   # Scroll progress indicator
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── SideNav.tsx       # Floating side dots navigation
│   ├── Hero.tsx          # Hero section with avatar & animations
│   ├── Marquee.tsx       # Scrolling tech stack ticker
│   ├── About.tsx         # About me with stats
│   ├── Skills.tsx        # Animated skill bars
│   ├── Projects.tsx      # Filterable project grid
│   ├── Education.tsx     # Timeline education section
│   ├── Contact.tsx       # Contact form with info
│   └── Footer.tsx        # Footer with links
└── lib/
    └── useInView.ts      # Custom intersection observer hook
```

## 🛠️ Customization

1. **Personal info** — Update name, bio, and links in each component
2. **Projects** — Edit the `projects` array in `Projects.tsx`
3. **Skills** — Edit `skillCategories` in `Skills.tsx`
4. **Education** — Edit `education` array in `Education.tsx`
5. **Contact** — Update email, location in `Contact.tsx`
6. **Colors** — Change CSS variables in `globals.css`

## 🚀 Deployment

Deploy easily on **Vercel**:

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).
