# Global Niryat — Official Website

> **Exporting Products & Services Globally** · Built with Next.js 14 · TypeScript · Tailwind CSS

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev          # → http://localhost:3000

# Production build
npm run build
npm start
```

---

## ⚙️ Configuration — All Important Data

> **All company information is centralized in one file:**
> **`config/site.ts`** — Edit this file to update everything across the whole site.

### 📧 Email, Phone, Address

Open `config/site.ts` and update:

```ts
email:   'contact@globalniryat.com',   // ← your email
phone:   '+91 98765 43210',             // ← your phone
address: 'India · Global Operations',  // ← your location
```

These values automatically appear in:
- The **Contact section** form sidebar
- The **Footer** Connect column

---

### 💬 WhatsApp Button

A floating WhatsApp button appears on every page (bottom-right corner).

```ts
// Format: country code + number, NO spaces, NO + sign
whatsapp: '919876543210',   // ← India: 91 + your 10-digit number

whatsappMessage: 'Hello! I visited your website...',  // ← pre-filled message
```

**Example:** If your number is +91 98765 43210, set `whatsapp: '919876543210'`

---

### 📱 Social Media Links

```ts
social: {
  linkedin:  '#',   // ← e.g. 'https://linkedin.com/company/globalniryat'
  instagram: '#',   // ← e.g. 'https://instagram.com/globalniryat'
  twitter:   '#',   // ← e.g. 'https://twitter.com/globalniryat'
  github:    '#',   // ← optional
},
```

These links appear in the **Footer** social icons and the **Contact** page.

---

### 🖼️ Adding Your Logo

1. **Place your PNG file** inside the `/public` folder:
   - e.g. `/public/logo.png`
   - The PNG must have a **transparent background**
   - Recommended size: **160 × 48 px** (or similar horizontal ratio)

2. **Update `config/site.ts`:**
```ts
logoPath:   '/logo.png',         // ← path inside /public
logoAlt:    'Global Niryat Logo',
logoWidth:  160,                 // ← width in px
logoHeight: 48,                  // ← height in px
```

3. Set `logoPath: null` to use the default **"GN" gradient pill** logo.

The logo appears automatically in both the **Navbar** and **Footer**.

---

### 🔗 Navigation Links

```ts
navLinks: [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'LMS',      href: '#lms-hero', badge: true },  // shows ⚡ 2 Weeks badge
  { label: 'Commerce', href: '#commerce' },
  { label: 'Contact',  href: '#contact' },
],
```

---

## 📁 Project Structure

```
global-niryat/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, WhatsApp button, SEO)
│   ├── page.tsx            ← Page assembly (which sections to show)
│   └── globals.css         ← Design system (CSS variables, animations)
├── config/
│   └── site.ts             ← ⭐ ALL COMPANY DATA HERE — edit this file
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Navigation bar (reads from config)
│   │   └── Footer.tsx      ← Footer (reads from config)
│   ├── sections/
│   │   ├── Hero.tsx        ← Hero section with globe illustration
│   │   ├── About.tsx       ← About + capability cards
│   │   ├── Services.tsx    ← 3-tab services (AI / Commerce / LMS)
│   │   ├── LMSHero.tsx     ← Enterprise LMS product section
│   │   ├── Process.tsx     ← 4-step process timeline
│   │   └── Contact.tsx     ← Contact form (reads from config)
│   └── ui/
│       ├── WhatsAppButton.tsx   ← Floating WhatsApp CTA
│       ├── LoadingScreen.tsx    ← Intro loading animation
│       └── ScrollProgress.tsx  ← Top progress bar
└── public/
    └── (place your logo.png here)
```

---

## 🌐 Production Deployment

### Vercel (Recommended — Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

> Your site will be live at `your-project.vercel.app` in ~2 minutes.

### Custom Domain on Vercel

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g. `globalniryat.com`)
3. Update your DNS records as instructed

---

## 📬 Contact Form — Making It Work

Currently the form shows a success message on submit but **does not actually send emails**.

To make it send real emails, integrate one of these (free tiers available):

### Option A: Formspree (Easiest — no backend needed)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your form ID (e.g. `xrgjkpba`)
3. In `Contact.tsx`, change the form action:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: Resend API (Professional)
1. Sign up at [resend.com](https://resend.com) — free 100 emails/day
2. Create `app/api/contact/route.ts` API route
3. Wire the form to POST to `/api/contact`

---

## 🎨 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Deep Blue | `#2359A4` | Primary, nav, buttons |
| Vibrant Orange | `#F58A1F` | CTAs, accents, highlights |
| Near-Black | `#0D0F1A` | Dark section backgrounds |
| Light Blue | `#4A7FD6` | Hover states, gradients |

---

## 📱 Mobile Responsiveness

All sections are responsive:
- **Navbar**: Hamburger menu on mobile/tablet (< 1024px)
- **Hero**: Globe hidden on mobile, text stacks vertically
- **About**: 2-column grid collapses to single column
- **Services**: Tab pills wrap on small screens
- **Contact**: 3-col layout collapses to single column
- **Footer**: 4-col grid collapses to 2-col on mobile

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS variables |
| Animations | Framer Motion |
| Font | Poppins + Inter + JetBrains Mono |
| Icons | Lucide React |
| Images | next/image (optimized) |

---

*Last updated: April 2026*
