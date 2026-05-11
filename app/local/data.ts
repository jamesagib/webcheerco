export type Pain = { title: string; body: string };
export type FaqItem = { q: string; a: string };

export type Vertical = {
  slug: "restaurants" | "beauty" | "fashion" | "dental" | "home";
  name: string;
  fullName: string;
  lawsuitCount: number;
  lawsuitPercent: string;
  hero: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
  };
  lede: string;
  pains: Pain[];
  packageIncluded: string[];
  faq: FaqItem[];
  industryNoun: string;
  industryNounPlural: string;
};

export type CityAccent = "waves" | "palms" | "sun" | "mountains" | "grid";

export type City = {
  slug: string;
  name: string;
  county: string;
  population: string;
  neighborhoods: string[];
  descriptor: string;
  blurb: string;
  bgFrom: string;
  bgTo: string;
  accent: CityAccent;
  accentColor: string;
};

export const verticals: Vertical[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    fullName: "Restaurants & food service",
    lawsuitCount: 1368,
    lawsuitPercent: "34.65%",
    industryNoun: "restaurant",
    industryNounPlural: "restaurants",
    hero: {
      eyebrow: "— For restaurants & food service",
      headlineLead: "Restaurant websites that ",
      headlineAccent: "don't get sued.",
    },
    lede:
      "1,368 restaurants and food-service businesses got hit with ADA web lawsuits in 2025 — 34.65% of all filings, the single most-targeted industry. We rebuild your menu, reservations, and online ordering to WCAG 2.1 AA in 1–2 weeks.",
    pains: [
      {
        title: "Menus rendered as PDF or image",
        body: "Screen readers can't read them. The single most-cited failure in 2025 demand letters against restaurants — and a Google SEO drag, since search engines can't index the items.",
      },
      {
        title: "Online ordering forms with no labels",
        body: "Cart, checkout, customization, and modifier groups without programmatic labels. The same flow that gets your customers also gets you sued.",
      },
      {
        title: "Reservation widgets in a keyboard trap",
        body: "Older OpenTable / Resy iframes (and almost every custom reservation form) fail focus management. Keyboard users get stuck. Trivial to fix; trivial to litigate.",
      },
      {
        title: "Hero text over a photo background",
        body: "\"Welcome to Mama's\" in cream over a brick-wall photo — contrast 1.8:1, every time. Standard pattern, standard WCAG fail, easy demand letter.",
      },
      {
        title: "Phone, hours, address inaccessible on mobile",
        body: "The three pieces of info every customer actually needs — buried in modals, rendered as images, or formatted so they can't be tapped to call.",
      },
    ],
    packageIncluded: [
      "Mobile-first redesign on Next.js or Webflow",
      "Menu rebuilt as semantic HTML (not PDF)",
      "Accessible online ordering integration (Toast, Square, ChowNow, etc.)",
      "Reservation widget passing WCAG keyboard + screen-reader tests",
      "Hours, address, click-to-call phone with structured data",
      "WCAG 2.1 AA conformance — code-level, no overlay widgets",
      "Lighthouse 95+ on mobile",
      "Published accessibility statement",
    ],
    faq: [
      {
        q: "Will you replace my OpenTable or Resy?",
        a: "No. We embed them so they pass keyboard and screen-reader tests. If your existing widget is fundamentally broken (some older OpenTable iframes still are), we'll flag it and offer alternatives — but we don't force a migration.",
      },
      {
        q: "What about my POS or online ordering platform (Toast, Square, ChowNow)?",
        a: "We work with whatever you're on. Most modern platforms have accessible embed options; we wire them in correctly. If you're on something fundamentally broken, we'll show you what to switch to and the cost difference.",
      },
      {
        q: "I'm a franchisee — does the chain control my site?",
        a: "Often partially. Mixed setups are common: chain controls the menu and brand, franchisee owns the location page or booking flow. We audit what you actually own and remediate that. The lawsuit can still name the franchisee, so it's still your problem to fix.",
      },
      {
        q: "Do menu PDFs really need to be replaced?",
        a: "Yes. PDF menus are the single most-cited failure in restaurant ADA lawsuits. We rebuild as semantic HTML — accessible, indexable for SEO, editable without a designer.",
      },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty",
    fullName: "Beauty & personal care",
    lawsuitCount: 317,
    lawsuitPercent: "8.03%",
    industryNoun: "salon, spa, or beauty practice",
    industryNounPlural: "salons, spas, and beauty practices",
    hero: {
      eyebrow: "— For salons, spas & beauty practices",
      headlineLead: "Beauty sites that book ",
      headlineAccent: "everyone.",
    },
    lede:
      "317 beauty and personal-care businesses got hit with ADA web lawsuits in 2025. The pattern: photo-heavy galleries with no alt text, treatment menus as PDFs, and booking widgets that fail keyboard tests. We rebuild beauty sites to WCAG 2.1 AA — accessible booking, real product galleries, real photo metadata — in 1–2 weeks.",
    pains: [
      {
        title: "Before/after photo galleries with no alt text",
        body: "The defining beauty-site element, and the most common litigation surface. Every untagged image is a fail. Even a 'Before' / 'After' caption beneath isn't enough — screen readers need explicit alt.",
      },
      {
        title: "Treatment menus as PDF or photo",
        body: "Bridal, micro-blading, lash-extension, hydrafacial — anything priced. Most salons keep the menu as a photo of a printed page. WCAG won't accept it; Google can't index it.",
      },
      {
        title: "Booking widgets that fail keyboard navigation",
        body: "Square Appointments, Boulevard, Vagaro, Mindbody — the widget might be accessible, but the way it's embedded usually isn't. Focus jumps to the iframe and gets stuck.",
      },
      {
        title: "Online retail (creams, serums) without product labels",
        body: "If you sell aftercare or skincare from your site, every product page is a potential lawsuit vector. Add to cart with no label, color/size pickers without ARIA, checkout with placeholder-only inputs.",
      },
      {
        title: "Hours, location, phone hard to find on mobile",
        body: "Customers want to call. Half of beauty sites bury the number behind a photo carousel or hide it in the footer at 11px gray-on-cream.",
      },
    ],
    packageIncluded: [
      "Mobile-first redesign with photo-forward galleries (alt-tagged)",
      "Treatment menu rebuilt as semantic HTML, editable inline",
      "Accessible booking widget (Boulevard / Square / Vagaro / Mindbody)",
      "Product / retail integration if you sell from the site",
      "Hours, location, click-to-call phone with structured data",
      "WCAG 2.1 AA — code-level, no overlay widgets",
      "Lighthouse 95+ mobile, real Core Web Vitals",
      "Published accessibility statement",
    ],
    faq: [
      {
        q: "What about my booking platform (Boulevard, Vagaro, Mindbody)?",
        a: "We embed it accessibly. Most modern booking platforms publish accessible widget options; we use those. If your booking platform's widget is fundamentally broken, we'll flag it.",
      },
      {
        q: "Do I really need alt text on every before/after photo?",
        a: "Yes. Every image needs a meaningful alt — 'Lip filler before treatment, frontal view' is fine, generic 'before' is not. We write the alts as part of the rebuild; you don't have to.",
      },
      {
        q: "Can I keep my existing photographer?",
        a: "Yes. We treat your existing photo library as input. We add alt text and optimize for the web; we don't replace your photography unless you ask us to.",
      },
      {
        q: "I sell products on Instagram, not my site. Do I still need this?",
        a: "Yes. The lawsuit usually names your website regardless of where most sales happen — what matters is that a screen-reader user can use your site. The booking flow is the most-cited element after photo alt-text.",
      },
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    fullName: "Lifestyle, fashion & apparel",
    lawsuitCount: 1025,
    lawsuitPercent: "25.96%",
    industryNoun: "apparel brand or boutique",
    industryNounPlural: "apparel brands and boutiques",
    hero: {
      eyebrow: "— For apparel brands & boutiques",
      headlineLead: "Fashion ecomm that ",
      headlineAccent: "everyone can shop.",
    },
    lede:
      "1,025 fashion and apparel businesses got hit with ADA web lawsuits in 2025 — 25.96% of all filings, the second most-targeted industry. Every product page, every size/color picker, every checkout step is a potential litigation surface. We rebuild fashion ecommerce to WCAG 2.1 AA in 1–2 weeks.",
    pains: [
      {
        title: "Product images without alt text",
        body: "The single highest-volume failure on apparel sites. 80–200 product photos × no descriptive alt = 80–200 WCAG failures, copy-pasted across the catalog. Litigators love this.",
      },
      {
        title: "Size & color pickers without ARIA",
        body: "Custom-built color swatches and size buttons usually rendered as <div>s with onclick. No role, no aria-pressed, no keyboard support. Screen readers don't know they're interactive.",
      },
      {
        title: "Cart and checkout with placeholder-only labels",
        body: "First name / Last name / Address fields with placeholder text instead of actual <label> elements. Disappears as soon as you start typing. Standard apparel-template pattern, standard fail.",
      },
      {
        title: "Image-heavy hero carousels",
        body: "Five rotating hero slides with text baked into the image. No alt, no carousel controls, autoplay with no pause. WCAG 1.1.1, 2.2.2, 4.1.2 — multiple failures in one component.",
      },
      {
        title: "Sale banners and badges with poor contrast",
        body: "\"-30% OFF\" in white over yellow, \"NEW\" in coral on cream. Brand-aesthetic-driven, contrast-failing, lawsuit-cited.",
      },
    ],
    packageIncluded: [
      "Product detail pages with descriptive alt text on every image",
      "Accessible size + color pickers (ARIA, keyboard-navigable)",
      "Checkout flow with proper <label> + autocomplete + error messaging",
      "Mobile cart that doesn't trap focus",
      "Hero carousel rebuilt with controls + reduced-motion respect",
      "Sale badges + brand assets adjusted to AA contrast",
      "Cart drawer + filter sidebar passing WCAG keyboard tests",
      "Published accessibility statement",
    ],
    faq: [
      {
        q: "We're on Shopify. Does this even apply?",
        a: "Yes. Shopify themes vary widely in accessibility; the platform doesn't enforce it. Most lawsuits target Shopify-based sites that use older or heavily-customized themes. We remediate the theme directly or rebuild on a more-accessible base.",
      },
      {
        q: "What about Klarna / Afterpay / Shop Pay buttons?",
        a: "Third-party payment buttons are typically accessible at the source. We make sure their containers and the surrounding flow don't break that. We don't force you to drop any payment method.",
      },
      {
        q: "Do I need to write alt text for every product?",
        a: "We auto-draft alts based on product title + variant + SKU then hand-review the top sellers. You don't have to write 200 of them yourself. We can also document the pattern so your team can add alts to new products going forward.",
      },
      {
        q: "Can you keep my brand aesthetic?",
        a: "Yes. We adjust contrast and accessibility-affecting details, not your overall look. Sale badges and hero text often need a small color tweak to clear AA — those are minor moves, not redesigns.",
      },
    ],
  },
  {
    slug: "dental",
    name: "Dental",
    fullName: "Dental & medical practices",
    lawsuitCount: 283,
    lawsuitPercent: "7.17%",
    industryNoun: "dental practice",
    industryNounPlural: "dental and medical practices",
    hero: {
      eyebrow: "— For dental & medical practices",
      headlineLead: "Practice sites that ",
      headlineAccent: "book new patients.",
    },
    lede:
      "283 dental and medical practices got hit with ADA web lawsuits in 2025. Practices are uniquely exposed: appointment-booking forms, insurance/financing flows, before-and-after smile galleries, and HIPAA-adjacent intake — most of it built by the dental-marketing companies that don't audit a thing. We rebuild practice sites to WCAG 2.1 AA in 1–2 weeks.",
    pains: [
      {
        title: "Appointment booking forms with no field labels",
        body: "The most-clicked element on a practice site, and the most likely to fail. Old form-builder embeds (especially Jotform/Formstack-of-2014) ship without semantic labels.",
      },
      {
        title: "Smile galleries with no alt text",
        body: "Before/after veneers, Invisalign progress, full-mouth restorations — every photo is a litigation surface. Generic 'after' or no alt at all is the standard practice-site fail.",
      },
      {
        title: "Insurance & financing pages as PDF",
        body: "CareCredit forms, in-network insurance lists, financial policy — almost universally PDF. Screen readers can't read them; you can't index them; lawsuits cite them.",
      },
      {
        title: "Service descriptions buried in icon-grid layouts",
        body: "\"General · Cosmetic · Implants · Pediatric\" rendered as four icon-only links. No accessible names, no descriptive labels. WCAG 2.4.4 fail every time.",
      },
      {
        title: "New-patient intake forms not keyboard-navigable",
        body: "The 14-field intake form is a common keyboard-trap (modal that doesn't close on Esc, focus not returned, required-field errors that don't announce). HIPAA flows on top — high-stakes accessibility.",
      },
    ],
    packageIncluded: [
      "Appointment booking with semantic labels + ARIA",
      "Smile gallery with hand-written alt text per photo",
      "Insurance + financing pages as semantic HTML",
      "Service detail pages with keyboard-friendly nav",
      "New-patient intake form: WCAG 2.1 AA + reduced-motion + error announcements",
      "Click-to-call phone, hours, address with LocalBusiness schema",
      "Lighthouse 95+ on mobile",
      "Published accessibility + privacy statement",
    ],
    faq: [
      {
        q: "I'm with a dental marketing company. Will you replace them?",
        a: "Not necessarily. We can either rebuild your site and hand it back, or audit + remediate what they built. Most dental-marketing companies don't do code-level accessibility; we slot in for that piece.",
      },
      {
        q: "Will the new site work with my booking software (Dentrix, Eaglesoft, NexHealth)?",
        a: "Yes. Modern practice-management vendors publish accessible widgets; we wire them in. If the embed itself is broken, we'll flag the alternatives.",
      },
      {
        q: "Do you handle HIPAA?",
        a: "We don't store PHI on your site. The contact and intake forms post directly to your existing booking/EMR system over HTTPS — we don't add a database or store data ourselves. Your existing HIPAA posture isn't changed.",
      },
      {
        q: "Smile gallery alt text — can you write it?",
        a: "Yes. We draft descriptive alts for each photo (e.g., 'Adult patient, three months into Invisalign — anterior alignment improving') and have you sign off on them. You're not writing 80 alts.",
      },
    ],
  },
  {
    slug: "home",
    name: "Home & Decor",
    fullName: "Home, furniture & decor",
    lawsuitCount: 303,
    lawsuitPercent: "7.67%",
    industryNoun: "home-goods retailer",
    industryNounPlural: "home-goods retailers",
    hero: {
      eyebrow: "— For furniture & home-goods retailers",
      headlineLead: "Home retail that ",
      headlineAccent: "ships to everyone.",
    },
    lede:
      "303 home, furniture, and decor businesses got hit with ADA web lawsuits in 2025. The pattern: visual-heavy product detail pages, custom 'see in your room' visualizers, and dimension/spec sheets rendered as images. We rebuild home retail to WCAG 2.1 AA in 1–2 weeks.",
    pains: [
      {
        title: "Product images without alt — and at high volume",
        body: "Furniture sites typically have 5–10 photos per SKU × thousands of SKUs. Almost universally untagged. The most-cited failure on home-goods sites in 2025 demand letters.",
      },
      {
        title: "Dimensions & specs rendered as images",
        body: "\"73 W × 36 D × 31 H\" baked into a JPG diagram. Screen readers can't read it; conversion-killing for sighted users on mobile too. WCAG 1.1.1 fail.",
      },
      {
        title: "Color / fabric / finish pickers without ARIA",
        body: "Custom swatch grids rendered as <div>s. No role='radio', no aria-checked, no keyboard support. The most-cited interaction-failure on furniture sites.",
      },
      {
        title: "Virtual room visualizers with no fallback",
        body: "Augmented-reality 'see this couch in your room' tools — mostly inaccessible. WCAG-compliant fallback (a static photo + dimensions in text) is rare. Sites that ship the visualizer without the fallback get sued.",
      },
      {
        title: "Free-shipping / sale banners with poor contrast",
        body: "\"Free White-Glove Delivery\" in cream over a peach background. Common pattern, common fail. Easy litigator's screenshot.",
      },
    ],
    packageIncluded: [
      "Product detail pages with descriptive alt text per photo",
      "Dimensions + specs rendered as semantic HTML (not images)",
      "Color/fabric/finish pickers with proper ARIA + keyboard support",
      "Visualizer fallback: static photo + readable dimensions",
      "Cart, checkout, and saved-room flows passing WCAG keyboard tests",
      "Free-shipping + sale badges adjusted to AA contrast",
      "LocalBusiness + Product schema for SEO",
      "Published accessibility statement",
    ],
    faq: [
      {
        q: "What about my AR / room-visualizer tool?",
        a: "We keep it for sighted users and add a WCAG-compliant text alternative — every product needs a static photo + dimensions + description that conveys the same info. The visualizer becomes the enhancement, not the gate.",
      },
      {
        q: "Do you work with my existing inventory system (NetSuite, Shopify, custom)?",
        a: "Yes. We don't replace your backend. We rebuild the front-end (or just the accessibility-failing parts), backed by your existing inventory + checkout.",
      },
      {
        q: "Furniture has a lot of SKUs. Do we need alt text on every image?",
        a: "Yes, per WCAG. We auto-draft from product title + variant, then hand-review the top 50–100 sellers. We document the pattern so your team can apply it to new products going forward.",
      },
      {
        q: "Can you keep my photographer's editorial style?",
        a: "Yes. Photography stays; we just add alts and optimize for the web. We don't replace your visual brand.",
      },
    ],
  },
];

export const cities: City[] = [
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    population: "456,000",
    neighborhoods: ["Belmont Shore", "Naples", "East Village", "Bixby Knolls", "Downtown"],
    descriptor: "harborside SoCal city",
    blurb:
      "Long Beach has a dense web of independent restaurants, salons, and small retailers — most operating sites built five to ten years ago by a marketing agency that never audited them. Belmont Shore alone has more than two-hundred small businesses, the majority of them litigation-exposed.",
    bgFrom: "#0F2845",
    bgTo: "#2E6796",
    accent: "waves",
    accentColor: "#9FC4D9",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    population: "3.9M",
    neighborhoods: ["Silver Lake", "Echo Park", "Venice", "Koreatown", "Highland Park"],
    descriptor: "creative-class SoCal city",
    blurb:
      "Los Angeles concentrates more independent SMB websites than any other county in the country — most of them built by the same dozen design shops, most of them never tested for accessibility. The 2025 ADA filing data shows LA-county defendants overrepresented at every revenue tier under $25M.",
    bgFrom: "#3A1F0A",
    bgTo: "#D87A4B",
    accent: "palms",
    accentColor: "#F0CDA8",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    county: "San Diego County",
    population: "1.4M",
    neighborhoods: ["North Park", "Hillcrest", "Little Italy", "La Jolla", "Pacific Beach"],
    descriptor: "Pacific-coast SoCal city",
    blurb:
      "San Diego's restaurant-and-retail strip in North Park, the boutique cluster in Hillcrest, the family-restaurant set in Pacific Beach — all heavy on independently-owned sites that pre-date current WCAG enforcement. The county's small-business economy is exactly the cohort 2025's litigation wave is targeting.",
    bgFrom: "#1B3552",
    bgTo: "#E8B584",
    accent: "sun",
    accentColor: "#F4D7A8",
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    population: "346,000",
    neighborhoods: ["Anaheim Hills", "Platinum Triangle", "West Anaheim", "Anaheim Canyon"],
    descriptor: "Orange County destination city",
    blurb:
      "Anaheim's restaurant and lodging concentration around the resort district sits next to a much larger ecosystem of independent neighborhood businesses across Anaheim Hills and West Anaheim — most on older sites, most never audited, most exactly the cohort 2025's litigation wave is naming.",
    bgFrom: "#3B1A1A",
    bgTo: "#C5704A",
    accent: "grid",
    accentColor: "#F4D5BC",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    county: "Los Angeles County",
    population: "138,000",
    neighborhoods: ["Old Pasadena", "South Lake", "Playhouse District", "Bungalow Heaven"],
    descriptor: "San Gabriel-foothills city",
    blurb:
      "Pasadena's commercial corridors — Old Pasadena, the South Lake retail strip, the Playhouse District — concentrate the kind of independent restaurants, boutiques, and practices that 2025's accessibility-litigation wave is targeting. Polished storefronts, dated websites, low audit awareness.",
    bgFrom: "#3D2614",
    bgTo: "#D9A36F",
    accent: "mountains",
    accentColor: "#E8C9A4",
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
