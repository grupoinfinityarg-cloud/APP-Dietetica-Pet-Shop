---
name: Artisan Merchant Hub
colors:
  surface: '#f8f9ff'
  surface-dim: '#d6dae4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4fd'
  surface-container: '#eaeef8'
  surface-container-high: '#e4e8f2'
  surface-container-highest: '#dee2ec'
  on-surface: '#171c23'
  on-surface-variant: '#57423b'
  inverse-surface: '#2c3138'
  inverse-on-surface: '#edf1fb'
  outline: '#8a726a'
  outline-variant: '#dec0b7'
  surface-tint: '#a23e18'
  primary: '#9f3c16'
  on-primary: '#ffffff'
  primary-container: '#bf542c'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#4648d4'
  on-tertiary: '#ffffff'
  tertiary-container: '#6063ee'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822801'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#171c23'
  surface-variant: '#dee2ec'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  tabular-num:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets independent retail merchants—specifically owners and managers of local health food emporiums, dietetic pantries, and specialty pet shops. The user environment alternates between behind-the-counter tablets, rapid barcode scanning stations, and back-office desktop inventory management. The interface balances high-utility ergonomics with a grounded, warm, tactile presence that diverges from sterile enterprise software.

### Aesthetic Movement
The aesthetic synthesizes **Tactile Modern Utility** with **Warm Editorial Functionalism**:
- **Tactile Warmth:** Sunbaked earth tones replace cool clinical blues, establishing kinship with physical store environments (organic goods, bulk grain bins, natural pet foods).
- **High-Density Usability:** Clear modular containers, touch-optimized hit areas (minimum 44px), and clear scanning anchors ensure mistake-free checkout, stock transfers, and quick customer updates.
- **Precision Typography & Whitespace:** Generous internal paddings inside components contrasted against crisp tabular data displays.

## Colors

The palette grounds the merchant's workspace in earthy authenticity while enforcing decisive operational feedback.

### Key Palettes & Roles
- **Primary (Terracotta / Warm Clay - `#C85A32`):** Primary action buttons, selected navigation rails, key metrics highlight, and active checkout states. Hover and interactive down-states map to Deep Terracotta (`#A23F1E`).
- **Secondary (WhatsApp Emerald - `#10B981` / `#059669`):** Direct omnichannel communications, order fulfillment confirmation, and positive balance states.
- **Tertiary (Digital Terminal Indigo - `#6366F1`):** QR generation, contactless card reader links, integration badges, and sync toggles.
- **Warning / Stock Status (Amber - `#F59E0B`):** Critical bulk stock deprecation, shelf expiration notices, and batch-lot discrepancy flags.
- **Neutrals & Surfaces:**
  - Base Canvas Background: `#FBF9F7` (Warm Cream / Off-White) ensures low ocular fatigue over 10-hour store shifts.
  - Card & Modal Elevated Surfaces: `#FFFFFF` (Pure Crisp White) ensures high contrast separation.
  - Recessed / Tooling Surfaces: `#F4EFEB` (Soft Warm Alabaster) for table headers, inactive tabs, and segmented controls.
  - Structural Boundaries: `#EAE5E1` (Warm Stone Gray) for hairline borders and table row dividers.
  - Type Hierarchy: Headings and critical data points leverage `#1E232A` (Dark Slate), while secondary metadata and descriptions rely on `#64748B` (Muted Slate).

## Typography

The design system standardizes on **Plus Jakarta Sans** across all roles. Its geometric underpinnings combined with wide apertures guarantee legible product SKUs, rapid inventory reads, and warm editorial weight.

### Usage Rules
- All numeric inventory fields, stock quantity displays, currency indicators, and SKU sequences must activate the `tnum` (tabular figures) OpenType feature via font settings to ensure rigid vertical decimal alignment in lists and receipts.
- `headline-xl` is reserved for daily ledger totals, merchant dashboard greetings, and high-level register analytics.
- `label-md` and `label-sm` must be applied in uppercase styling solely when designating statuses (e.g., `UNPAID`, `FULFILLED`, `LOW STOCK`) with an intentional letter-spacing bump of `0.05em`.

## Layout & Spacing

A hybrid fluid-grid structure accommodates both counter-mounted point-of-sale tablets and expansive dual-monitor inventory workstations.

### Breakpoints & Canvas Model
- **Desktop (>= 1280px):** 12-column layout with fixed left rail navigation (240px default, collapsable to 64px icon-only), fluid interior workspace, 32px (`margin`) page gutters, and 20px (`gutter`) column separation.
- **Tablet / Counter POS (768px - 1279px):** 8-column layout, bottom-sheet transaction drawers, 24px margins, and 16px gutters. Tap targets scale up to support multi-touch registers.
- **Mobile Handheld (<= 767px):** 4-column layout, full-bleed cards with 16px page margins, sticky bottom action bar for fast barcode/stock confirmations.

### Component Spacing Rhythm
- **Micro Spacing (`space-xs`, `space-sm`):** Internal icon-to-text spacing inside buttons, badge paddings, and condensed table cell padding.
- **Structural Spacing (`space-md`, `space-lg`):** Form element stacking, card internal padding, and widget groupings.
- **Macro Separation (`space-xl`):** Vertical clearance between administrative metric overviews and daily transaction ledgers.

## Elevation & Depth

To avoid the sterile aesthetic of cold drop-shadows, this design system utilizes warm ambient diffusion paired with structural stone-gray borders.

### Elevation Hierarchy
- **Level 0 (Canvas Base):** Grounded at `#FBF9F7`. Flush without shadows.
- **Level 1 (Card & Module Resting):** Pure White (`#FFFFFF`) with a 1px border of `#EAE5E1` and an ambient warm shadow: `0 1px 3px 0 rgba(30, 35, 42, 0.04), 0 1px 2px -1px rgba(30, 35, 42, 0.03)`.
- **Level 2 (Interactive Hover & Quick-View Popovers):** Pure White with a 1px border of `#DED7D1` and shadow: `0 4px 6px -1px rgba(200, 90, 50, 0.06), 0 2px 4px -2px rgba(30, 35, 42, 0.04)`.
- **Level 3 (Modals & Slide-over Drawers):** White surface anchored over a warm slate scrim (`rgba(30, 35, 42, 0.45)`) featuring elevation: `0 20px 25px -5px rgba(30, 35, 42, 0.1), 0 8px 10px -6px rgba(30, 35, 42, 0.06)`.

## Shapes

The interface embraces a unified soft geometry that balances industrial efficiency with natural approachable lines.

### Radius Assignments
- **Primary Cards, Surface Panels & Modals:** Standardized on `rounded-xl` (`1rem` / 16px) to maintain a soft, friendly posture fitting dietary and pet boutique contexts.
- **Form Controls & Buttons:** Standardized on `rounded-lg` (`0.75rem` / 12px) for balanced, tactile touch anchors.
- **Pills & Status Indicators:** Fully rounded (`rounded-full` / 9999px) for discrete batch counters, live indicators, and tag filters.
- **Inner Nested Elements:** Apply internal radius compensation (outer radius minus internal padding) to eliminate awkward concentric visual gaps.

## Components

### Buttons
- **Primary CTA:** Background `#C85A32`, text `#FFFFFF`, radius `rounded-lg`, height 44px (touch-first minimum). Active/hover translates to `#A23F1E`. In POS mode, scale height to 48px.
- **Secondary (Direct Messaging / WhatsApp):** Background `#10B981`, hover `#059669`, text `#FFFFFF`. Features dedicated message icon slot on the left.
- **Ghost / Neutral:** Background transparent, text `#1E232A`, border 1px `#EAE5E1`. Hover states invoke subtle alabaster tint `#F4EFEB`.

### Input Fields & Controls
- **Text & Barcode Inputs:** Background `#FFFFFF`, 1px solid border `#EAE5E1`, internal padding 12px 16px. Focused state replaces border with `#C85A32` and applies a 3px ring of `rgba(200, 90, 50, 0.15)`.
- **Search & Filter Bars:** Pre-appended with search icons in `#64748B`, with an integrated keyboard shortcut badge (`⌘K`) anchored to the right.

### Cards & Metric Modules
- Encapsulated in crisp white surfaces with 16px outer radius and 20px internal padding.
- Key inventory metric cards (e.g., "Expiring Probiotics", "Low Grain Stock") contain an elevated status badge at top-right and tabular numeric summaries at the base.

### Badges & Status Chips
- Pill-shaped (`rounded-full`), padded 4px 10px with `label-sm` font treatment.
- **WhatsApp Direct:** `#ECFDF5` background, `#059669` text.
- **Expiring / Low Stock:** `#FEF3C7` background, `#D97706` text.
- **Digital Terminal / Paid:** `#EEF2FF` background, `#4F46E5` text.

### Retail Specialized: Quick-Add & Batch Counter
- Segmented numeric step component with 40px touch increment buttons flanking a centered bold tabular quantity reading. Background `#F4EFEB`, divider `#EAE5E1`.