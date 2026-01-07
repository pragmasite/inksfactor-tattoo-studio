# InksFactor Tattoo Studio Website - Generated

This is a professional, single-page website for InksFactor Tattoo Studio built with Vite + React + TypeScript + shadcn/ui + Framer Motion.

## Project Structure

### Languages
- **Primary Language:** Italian (/)
- **Secondary Language:** English (/en)
- Language selector dropdown available in header

### Design System
- **Color Scheme:** Burgundy/Rose (#55142c) primary with Gold (#D4AF37) accents
- **Fonts:** Playfair Display (serif headers), Inter (body text)
- **Styling:** Custom HSL color variables in tailwind.config.ts
- **Animations:** Framer Motion for smooth transitions and interactive elements

### Sections

1. **Header** - Fixed navigation with language switcher
   - Responsive mobile menu
   - Links to all major sections
   - Scroll-aware background

2. **Hero** - Full-screen hero section
   - Background SVG with gradient overlay
   - Animated badge and headlines
   - CTA buttons (phone and email)
   - Clickable scroll indicator

3. **About** - Company information
   - Feature cards with icons
   - Statistics display
   - Professional background

4. **Services** - Service offerings
   - 6 service items in responsive grid
   - Icon indicators
   - Hover effects

5. **Gallery** - Image showcase
   - Smart gallery system (grid view for <6 images, slider for 6+)
   - Image descriptions in Italian and English
   - Navigation dots and arrow controls

6. **Hours** - Opening hours display
   - Today highlight with check indicator
   - Color-coded open/closed status
   - Contact information

7. **Contact** - Contact information and map
   - Phone, email, address cards
   - Embedded Google Map
   - Service area information
   - Call-to-action button

8. **Footer** - Footer navigation
   - Quick links
   - Social media links (Instagram, Facebook)
   - Copyright information

9. **Disclaimer Modal** - Preview disclaimer
   - Shows once per session
   - Dismissible overlay
   - Translatable content

### Technical Details

- **Build Tool:** Vite 5.4.19
- **Framework:** React 18
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion 11.0.8
- **Routing:** React Router v6
- **Styling:** Tailwind CSS

### Files Generated

**Components:**
- `/src/components/Header.tsx` - Navigation header
- `/src/components/Hero.tsx` - Hero section
- `/src/components/About.tsx` - About section
- `/src/components/Services.tsx` - Services section
- `/src/components/Gallery.tsx` - Gallery section
- `/src/components/Hours.tsx` - Hours section
- `/src/components/Contact.tsx` - Contact section
- `/src/components/Footer.tsx` - Footer
- `/src/components/DisclaimerModal.tsx` - Disclaimer modal

**Utilities:**
- `/src/hooks/useLanguage.tsx` - Language context and hook
- `/src/lib/translations.ts` - Translations for Italian and English

**Styling:**
- `/src/index.css` - Design system with custom colors and fonts
- `/tailwind.config.ts` - Tailwind configuration with custom fonts and shadows

**Configuration:**
- `/index.html` - HTML with meta tags, favicon, and SEO
- `/src/App.tsx` - App routes and language provider setup

## Build Status

✓ Build successful - No errors or warnings
✓ All components created and integrated
✓ Translations complete for Italian and English
✓ Custom design system applied
✓ Responsive mobile-first design
✓ All sections properly linked in header

## Running the Site

```bash
npm install      # Install dependencies
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

## Deployment

The `/dist` folder contains the production-ready build, ready for deployment to any static hosting service.

---

Generated with ❤️ for InksFactor Tattoo Studio
