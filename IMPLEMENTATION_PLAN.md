# Implementation Plan: E-Koran Redesign

## Summary of Changes

### 1. Update Mock Data (src/app/data/mockData.ts)
- Add `views` field to EKoran interface
- Update mock data with realistic view counts

### 2. Update HomePage (src/app/pages/HomePage.tsx)
- Redesign E-Koran section with:
  - Background: Newspaper stack image with dark overlay
  - Logo: eKoran white logo at top-left
  - Card: Portrait format (250-300px height, 180-200px width)
  - Viewer badge with eye icon
  - Gradient overlay at bottom
  - Edition info: title, date, time ago
  - Carousel/slider with horizontal scroll

## File Dependencies
- src/app/data/mockData.ts - Update interface and data
- src/app/pages/HomePage.tsx - Update E-Koran section

## Implementation Steps
1. Update EKoran interface in mockData.ts to include `views`, `timeAgo`
2. Update ekoranEditions data with new fields
3. Rewrite E-Koran section in HomePage.tsx with the new design
