# E-Koran Page Redesign Implementation Plan

## 1. Information Gathered

### Current Implementation (EKoranPage.tsx)
- Basic hero section with title and description
- Featured latest edition card (split layout)
- Grid of past editions (2-4 columns)
- Simple subscribe CTA
- Uses QuickLinksPanel component

### Design Requirements from Spec
- Digital newspaper gallery / archive concept
- Focus on magazine/newspaper covers (visual)
- Layout: Breadcrumb → Hero → Header Gallery → Latest Edition → Archive by Date → Grid Cover
- Hero with newspaper background photo, dark overlay, badge, statistics, WhatsApp CTA
- Archive divided by date with 4-column grid
- Cover cards with magazine-style design and view count badges

### Project Technology Stack
- React + TypeScript
- Tailwind CSS for styling
- Motion (Framer Motion) for animations
- Lucide React for icons

---

## 2. Plan: E-Koran Page Redesign

### Phase 1: Hero Section Enhancement
- NEW: Newspaper rack background image with parallax effect
- NEW: Dark gradient overlay for text readability
- NEW: "E-KORAN DIGITAL" badge with capsule styling
- NEW: Customer statistics (68,369 Pelanggan) with animated counter
- NEW: WhatsApp subscription button (prominent green CTA)
- NEW: Floating newspaper effect on hero background

### Phase 2: Latest Edition Section
- NEW: Prominent card design with "Terbaru" badge
- NEW: Cover image with 3D perspective effect
- NEW: Edition title and time ago display
- NEW: "Baca Online" primary button

### Phase 3: Archive Section with Date Grouping
- NEW: Date headers (sticky when scrolling)
- NEW: 4-column grid layout (responsive: 2 on mobile, 3 on tablet)
- NEW: Multiple date groups as shown in spec:
  - 4 Juni 2026
  - 3 Juni 2026
  - 2 Juni 2026
  - 1 Juni 2026
  - 31 Mei 2026
  - 30 Mei 2026
  - 29 Mei 2026
  - 28 Mei 2026
  - 27 Mei 2026

### Phase 4: Cover Card Design (Unique Feature)
- NEW: Magazine-style card with cover image
- NEW: Category badges (Olahraga, Hiburan, Politik, Musik, Film, Lifestyle, Kuliner, Internasional)
- NEW: View count badge (10.1k, 15.4k, etc.) on top-right corner
- NEW: Interactive hover effect (scale + shadow)
- NEW: Quick action overlay on hover (Baca button)
- NEW: Edition title and date in footer area

### Phase 5: Additional Unique Features
- NEW: Animated entrance effects using Motion
- NEW: Smooth scroll behavior
- NEW: Loading skeleton for better UX feel

---

## 3. Dependent Files to Edit

### Primary:
- `src/app/pages/EKoranPage.tsx` - Main redesign implementation

### Secondary (Data):
- `src/app/data/mockData.ts` - Add more E-Koran editions data for archive (dates, categories, view counts)

---

## 4. Implementation Steps

### Step 1: Update Mock Data
Add comprehensive E-Koran editions with:
- Multiple dates (grouped)
- Cover images
- Categories
- View counts
- Time ago strings

### Step 2: Redesign EKoranPage.tsx
- New hero section with newspaper background
- New latest edition card
- New archive section with date grouping
- New cover cards with unique design elements

---

## 5. Followup Steps

- Test responsive design on all screen sizes
- Verify animations work smoothly
- Check image loading performance
- Verify all links work correctly
