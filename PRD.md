# Product Requirements Document: chawana.online

**Version:** 1.0  
**Date:** September 19, 2025  
**Author:** Chawana Maseka & Gemini  
**Status:** Final Draft

---

## 1. Introduction & Vision

### 1.1. Background

Chawana Maseka is a multi-disciplinary creative entrepreneur working at the intersection of music, culture, and technology. This project is to design and develop a personal website, chawana.online, that serves as a central professional hub. This platform will consolidate his personal brand, showcase his diverse portfolio of work, and act as a primary point of contact for various opportunities.

### 1.2. Vision Statement

chawana.online will be a cinematic, minimalist, and professional digital identity that establishes Chawana's credibility and directs different audiences to relevant content. It will allow fans to connect with his music, potential collaborators to see his work, and investors to understand his business ventures, all through a clean, professional, and easily navigable interface.

---

## 2. Goals & Objectives

### 2.1. Primary Goal

The single most important action a user can take is to initiate a direct, owned connection.

- **For Fans:** Join the "Insider List" (mailing list).
- **For Collaborators/Partners:** Fill out the contact form.

### 2.2. Secondary Goals

- **Showcase Work:** Clearly present a portfolio of music, projects, and ventures (Luminary Co., Vibes Suite, Arc Synthesis).
- **Attract Opportunities:** Enable media, collaborators, and partners to easily download a media kit and get in touch.

---

## 3. Target Audience (User Personas)

### 3.1. Persona 1: The Fan / Supporter

**Profile:** Age 18–35, music lover (Zambian/African talent), active on social media.

**Motivation:** Wants to connect with Chawana's journey, hear new releases, and be part of his story.

**Needs:** Quick, mobile-friendly access to music links and updates. Wants to feel a personal connection.

### 3.2. Persona 2: The Collaborator / Creative Professional

**Profile:** Age 25–45, artists, producers, designers, filmmakers, tech innovators.

**Motivation:** Exploring opportunities to work with Chawana.

**Needs:** Proof of work (portfolio, credits), clear contact/booking info, and a professional presentation that demonstrates synergy.

### 3.3. Persona 3: The Investor / Partner / Corporate Stakeholder

**Profile:** Age 30–55, decision-makers in business, media, entertainment, or tech.

**Motivation:** Interested in ventures (Luminary Co., Vibes Suite) and potential partnerships.

**Needs:** A quick, polished way to understand the vision, credibility, and track record. Requires easy access to a professional media kit.

---

## 4. Features & Functionality

### 4.1. Homepage

The homepage will serve as a strategic landing page designed to funnel each persona to their desired content.

#### Hero Section
- Full-screen cinematic visual with a clear headline, subline, and primary CTAs ("Join the List," "Listen Now").
- **Current Implementation:** ✅ Implemented with background image, clear CTAs, and scroll indicator

#### Highlights Section
- A grid of 2-3 cards showcasing the latest music, a signature project, and a key venture. Includes a "Work With Me" CTA.
- **Current Implementation:** ✅ Implemented with 3 cards: "Ve Ni Mvela" (music), "Luminary Co.", and "Arc Synthesis"

#### About Snapshot
- A brief, impactful bio to establish identity and mission.
- **Current Implementation:** ✅ Implemented with compelling quote and "Read My Story" CTA

#### Credibility Section
- Logos of trusted partners and media features. Includes a prominent "Download Media kit" CTA.
- **Current Implementation:** ✅ Implemented with partner logos and media kit download button

#### Insider List Signup
- An embedded form framed as "Join My Creative Circle."
- **Current Implementation:** ✅ Implemented with email capture form

#### Contact Prompt
- A final, clear CTA to "Get in Touch."
- **Current Implementation:** ✅ Implemented with email contact CTA

### 4.2. Core Features

#### Insider List Email Capture
- A simple form to collect email addresses. Must use framing like "Join my creative circle" or "Be first to know..."
- **Current Implementation:** ✅ Implemented with proper framing

#### Media Kit Download
- A direct link/button for downloading a professional PDF media kit.
- **Current Implementation:** ✅ Implemented with download link (requires actual PDF file)

#### Embedded Music Players
- Integration with platforms like Spotify/Apple Music to allow direct listening.
- **Current Implementation:** ✅ Implemented with Spotify embed for "Ve Ni Mvela"

#### Responsive Design
- The entire site must be fully functional and visually optimized for desktop, tablet, and mobile devices.
- **Current Implementation:** ✅ Implemented with Tailwind CSS responsive classes and mobile menu

---

## 5. Design & User Experience (UX)

### 5.1. Brand Keywords
Visionary, Minimalist, Cinematic, Tech-forward, Cultural.

### 5.2. Color Palette
- **Base:** Black (#000000)
- **Accent:** Golden Yellow (#ffc75b)
- **Neutrals:** White (#ffffff) & mid-grays

### 5.3. Typography
- **Headlines:** Bold, modern sans-serif (Inter)
- **Body Text:** Clean, readable serif (Lora)

### 5.4. Imagery Style
- **Photography:** Professional, cinematic, high-contrast editorial portraits
- **Graphics:** Subtle cultural textures and abstract tech motifs

### 5.5. Overall Feel
A fusion of sleek tech minimalism and cultural storytelling. The guiding principle is: "If Apple launched in Lusaka with a cinematic documentary crew."

**Current Implementation Status:** ✅ All design elements implemented according to specifications

---

## 6. Success Metrics (KPIs)

The success of the website will be measured at the 6-month post-launch checkpoint against the following targets:

- **Mailing List Growth:** 500+ new subscribers to the "Insider List."
- **Inquiries:** 10+ serious collaboration or partnership inquiries via the contact form.
- **Music Engagement:** 1,000+ click-throughs from the website to streaming platforms.
- **Traffic:** Double the baseline monthly visitors from launch.

---

## 7. Technical Implementation

### 7.1. Current Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Inter, Lora)
- **Icons:** Heroicons (SVG)
- **Hosting:** Static site (ready for deployment)

### 7.2. Features Implemented
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Fade-in animations on scroll
- ✅ Mobile hamburger menu
- ✅ Header scroll effects
- ✅ Spotify music embed
- ✅ Email capture form
- ✅ Media kit download link
- ✅ Social media links
- ✅ Professional typography and color scheme

### 7.3. Pending Implementation
- ⏳ Email form backend integration (requires server-side processing)
- ⏳ Media kit PDF file creation
- ⏳ Analytics tracking setup
- ⏳ SEO optimization
- ⏳ Performance optimization

---

## 8. Scope for Future Phases (Phase 2)

The following items are out of scope for the initial launch (v1.0) but are planned for future development:

- **Blog / Insights Section:** A dedicated page for articles and reflections on creativity, music, and tech.
- **Full Newsletter Integration:** Evolving the email capture into a full-fledged newsletter with regular content delivery via a platform like ConvertKit or Mailchimp.
- **Vibes Vault Integration:** Potential future API integration to dynamically pull from the catalog.

---

## 9. Deployment & Launch Checklist

### 9.1. Pre-Launch
- [ ] Create and upload media kit PDF
- [ ] Set up email collection backend (e.g., Netlify Forms, Formspree)
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test all links and forms
- [ ] Optimize images and performance
- [ ] Set up custom domain (chawana.online)

### 9.2. Post-Launch
- [ ] Monitor email signups
- [ ] Track user engagement metrics
- [ ] Gather user feedback
- [ ] Plan Phase 2 features based on user behavior

---

## 10. Maintenance & Updates

### 10.1. Regular Updates
- Update music releases and project showcases
- Refresh partner logos and testimonials
- Monitor and respond to contact form submissions
- Update social media links as needed

### 10.2. Quarterly Reviews
- Analyze KPIs and user behavior
- Update content based on current projects
- Plan new features based on user feedback
- Review and update design elements

---

*This PRD serves as the foundational document for the chawana.online website project. All implementations should align with the goals, user personas, and success metrics outlined above.*
