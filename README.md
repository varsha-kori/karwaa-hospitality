# Karwaa Hospitality Pvt. Ltd. (A unit of MCS Associates)

A fully responsive, multi-page travel booking website and single-page web application built with **HTML5, CSS3, and Vanilla JavaScript**.

---

## 🌟 Brand & Design Identity

- **Brand Wordmark:** `KARWAA` (Playfair Display, bold serif, navy)
- **Tagline:** `A UNIT OF MCS ASSOCIATES` (letter-spaced, uppercase)
- **Logo Emblem:** Circular emblem with a stylized compass and palm-tree motif in gold on a cream circle.
- **Typography:**
  - Headings: `Playfair Display` (serif, weights 500/600/700, italic accent phrases)
  - Body & UI: `Poppins` (sans-serif, weights 300–700)
  - Eyebrows: Gold with `›` prefix icon and `~2.5px` letter spacing
- **Button Style:** Pill-shaped (`border-radius: 999px`), gradient gold (`#C9982F` → `#A97C21`), dark navy text, soft shadow, lift on hover.

### 🎨 Exact Color Palette
| Token | Hex Value | Usage |
|---|---|---|
| Cream Background | `#FBF6EC` | Primary page background |
| Secondary Cream Panel | `#F4ECD9` | Cards, hero header backgrounds, badges |
| Navy (Headings/Dark) | `#16263F` | Headings, hero overlay, mobile drawer, primary dark |
| Navy Secondary | `#1E3557` | Gradient layers, badges, secondary headers |
| Navy Dark | `#101A2B` | Footer background |
| Gold Accent (Primary) | `#C9982F` | Pill buttons, icons, highlights, active nav border |
| Gold Dark (Hover) | `#A97C21` | Button hover states, gradients |
| White Cards | `#FFFFFF` | Card backgrounds, search bar, content containers |
| Muted Body Text | `#6B7280` | Paragraphs, metadata labels |
| Border / Line Color | `#E7DDC6` | Section dividers, card borders, form outlines |

---

## 🚀 Key Features & Pages

### 1. Global Navigation & Header (Sticky)
- Brand logo + wordmark + tagline
- Nav Links: **Home | About Us | Packages | Services | Driver Assign | Gallery | Contact** (active link marked with a gold underline)
- Quick Contact Chips:
  - Phone / WhatsApp: `+91 9311033931`
  - Email: `sonuupawaar@gmail.com`
- Dark / Light mode toggle with system preference sync & `localStorage` persistence
- **Book Now →** gold pill button
- Mobile drawer navigation under `980px` with animated hamburger trigger

### 2. Home Page (`#home`)
- **Hero Section:** Full-width vector landscape with layered mountains, sun glow, soaring birds, and dark left overlay for contrast. Floating script badge: `Travel More Worry Less ✈`.
- **Search Card:** Floating input bar with destination input, date picker, travellers dropdown, and search trigger with auto-redirect to matching packages.
- **Features Strip:** 6 icon columns (Driver Assign, Tour Packages, Hotel Bookings, Transport Services, Customized Trips, 24/7 Support).
- **Services Overview:** Split view with narrative on the left and 3 stacked interactive visual cards on the right.
- **Popular Tour Packages:** 5 featured cards with price badges, duration, inclusions, location, and modal triggers:
  1. *Kerala Getaway* — ₹12,999 — 4N/5D — Kerala
  2. *Himachal Escape* — ₹15,999 — 5N/6D — Himachal Pradesh
  3. *Goa Beach Holiday* — ₹13,999 — 4N/5D — Goa
  4. *Rajasthan Royal Tour* — ₹18,999 — 5N/6D — Rajasthan
  5. *Maldives Honeymoon* — ₹45,999 — 5N/6D — Maldives
- **Why Choose Us:** Full-width navy section highlighting verified drivers, premium hotels, 1000+ travelers, and 24/7 operations.
- **Special Offers Banner:** Navy-to-gold diagonal gradient banner with gift icon.

### 3. About Us (`#about`)
- Hero header with eyebrow `› ABOUT KARWAA`
- "Built on Trust, Driven by Experience" narrative story split
- Stats row: 9+ Years of Service, 1000+ Happy Travelers, 120+ Verified Drivers, 35+ Destinations Covered
- Core Values (3 cards): Safety First, Care in Every Detail, Always Reachable

### 4. Packages Catalog (`#packages`)
- Live category filtering: **All | Mountains | Beaches | Heritage | Islands | Backwaters**
- 10 dynamically generated package cards (including *Manali Snow Trail*, *Andaman Island Escape*, *Udaipur Lakeside Tour*, *Munnar Hills Retreat*, and *Bali Island Getaway*)
- Clicking any package opens an interactive **Itinerary & Quick Booking Modal**

### 5. Services (`#services`)
- 6 alternating left/right visual rows with checklists and direct CTA routing:
  - 01 Driver Assign
  - 02 Tour Packages
  - 03 Hotel Bookings
  - 04 Transport Services
  - 05 Customized Trips
  - 06 24/7 Support

### 6. Driver Assign (`#driver`)
- Booking form with validation: Full Name, Phone, Pickup, Drop, Date, Time, Vehicle Type, Notes
- Inline green success alert showing unique booking reference (e.g. `#KRW-DRV-8492`)
- 3 Vehicle type cards (Sedan, SUV, Tempo Traveller) + "Why book with Karwaa?" 4-point assurance list

### 7. Visual Gallery (`#gallery`)
- Category filter chips
- Responsive Masonry layout (mix of regular, wide, and tall cards)
- Interactive Lightbox modal with close button, backdrop click, and `Escape` key support

### 8. Contact (`#contact`)
- Contact info card (Phone, Email, Company name, 24/7 hours)
- Stylized vector map block with central operations pin marker
- Contact enquiry form with inline confirmation card and unique ticket ID

### 9. Footer (Global)
- 4 Columns: Brand story + socials, Quick Links, More Services, and 24/7 Support details
- Copyright bar: `© 2025 Karwaa Hospitality Pvt. Ltd. A unit of MCS Associates. All Rights Reserved.`

---

## 🖼️ Curated Travel Assets (`images/`)

All photo blocks and cards now feature high-resolution, web-optimized destination and service photography stored locally in the `images/` folder:
- **Services:** `driver-service.jpg`, `tours-service.jpg`, `hotels-service.jpg`, `transport-service.jpg`, `custom-trips.jpg`, `support-service.jpg`
- **Story:** `about-story.jpg`
- **Packages:** `kerala.jpg`, `himachal.jpg`, `goa.jpg`, `rajasthan.jpg`, `maldives.jpg`, `manali.jpg`, `andaman.jpg`, `udaipur.jpg`, `munnar.jpg`, `bali.jpg`
- **Gallery:** `gal-kerala.jpg`, `gal-himachal.jpg`, `gal-goa.jpg`, `gal-rajasthan.jpg`, `gal-maldives.jpg`, `gal-munnar.jpg`, `gal-udaipur.jpg`, `gal-andaman.jpg`, `gal-snow.jpg`

---

## 🛠️ Offline & Self-Contained Architecture

- **Local Image Assets:** Every photograph is saved locally within `images/` so the website displays vivid, authentic travel visuals both online and completely offline.
- **No Build Tools Required:** Simply open `index.html` in any web browser or serve it with any static server.
