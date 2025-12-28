README.md — FINAL ENGLISH VERSION
Maison Global Partners — Architecture of Flow

Modern global sourcing & supply-chain solutions.

🌍 About MGP

Maison Global Partners (MGP) is an international agency specializing in procurement, global vendor discovery, contracting, and operational optimisation.
We design transparent, elegant, and structured processes that protect ambitions and transform complexity into flow.

Website: https://www.maisongp.com/

✨ Tech Stack

Next.js 14 (App Router)

React 18

Custom global CSS + Tailwind

Neumorphism + Glass UI

Responsive, mobile-first design

Dynamic theme-aware logo switching

Component-based architecture (GlassCard, ParallaxBg, Footer)

📁 Project Structure

Below is the full directory overview explaining what each file/folder does:

app/
├── layout.jsx          # Global wrapper (<html>, <body>, metadata, Footer)
├── globals.css         # Main design system (typography, cards, buttons, topbar)
│
├── page.jsx            # Home page (Hero, Solutions, Services, Contact)
│
├── about/
│   └── page.jsx        # “About Us” page + glass blocks
│
├── contact/
│   └── page.jsx        # Contact page with neumorphic buttons
│
├── legal/
│   └── page.jsx        # Legal / Terms / Privacy (minimal layout)
│
└── components/
    ├── Footer.jsx      # Global footer
    ├── GlassCard.jsx   # Universal glass-style card component
    ├── ShelfShadow.jsx # Elliptical hero shadow under titles
    ├── ParallaxBg.jsx  # Optional parallax background
    └── Button.jsx      # Additional pill-style button component

Static assets
public/
├── logo-dark.png       # Dark version of the logo
├── logo-light.png      # Light version (for dark theme)
├── shadow.png          # Hero shadow strip
└── ... other images

🛠 Installation & Development

Install dependencies

npm install


Run development server

npm run dev


Build for production

npm run build


Start production server

npm start

🎨 Design Principles

Clean, minimalist composition

Cormorant Garamond + Inter typography

Balanced white space

Glass UI components

Neumorphic soft buttons

Strong layout hierarchy

Soft-glow and subtle shadow effects (ShelfShadow)

🧠 Vision

Maison Global Partners creates elegant structures that align strategy, processes, and people into a single flow.
We believe in the beauty of precision, the strength of clarity, and the aesthetics of operational mastery.

© Maison Global Partners
