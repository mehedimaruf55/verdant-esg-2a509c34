## Goal

Restructure the site to match the new (much smaller) Verdant sitemap focused on greenwashing / green-claims compliance. Update the Navbar, routes, sitemap.xml, and footer to mirror this structure. Old built-environment / corporate-sustainability / net-zero pages will be retired from navigation.

## Final site structure

```
/                                Home
/about                           About
/services                        Services hub
  /services/green-claims-risk-audit
  /services/ongoing-compliance-support          (placeholder — no content yet)
  /services/supply-chain-transparency-review
  /services/regulatory-response-readiness
/ai-screening-tool               AI-Assisted Green Claims Screening (linked from Services nav)
/resources                       Resources / Insights hub
  /resources/8-greenwashing-risks
/contact                         (keep, linked from nav CTA)
```

## Changes

### 1. Navbar (`src/components/Navbar.tsx`)
Replace the existing multi-level mega-menu (Built Environment / Corporate Sustainability / Net Zero / PPN / Carbon Credits) with a simple structure:

- **Home**
- **About**
- **Services** (dropdown)
  - Green Claims Risk Audit
  - Ongoing Compliance Support
  - Supply Chain Transparency Review
  - Regulatory Response Readiness
  - — divider —
  - AI-Assisted Green Claims Screening *(highlighted as tool/product)*
- **Resources**
- **Contact** (CTA button)

Apply the same change to the mobile drawer.

### 2. Routes (`src/App.tsx`)
- Add routes for the 4 new service pages + `/ai-screening-tool` + `/resources/8-greenwashing-risks`.
- Remove (or keep but un-link — see Question 1 below) the old built-environment / corporate-sustainability / net-zero / PPN / carbon-credits routes plus Team / Press / Partners / Careers / Projects / CPD / Masterclass / PlanningTool.

### 3. New page stubs
Create new page files using the existing `PageLayout` + `PageHero` pattern, with placeholder hero + section copy so the routes resolve cleanly:
- `src/pages/services/GreenClaimsRiskAudit.tsx`
- `src/pages/services/OngoingComplianceSupport.tsx` (clearly marked as coming soon)
- `src/pages/services/SupplyChainTransparencyReview.tsx`
- `src/pages/services/RegulatoryResponseReadiness.tsx`
- `src/pages/AIScreeningTool.tsx`
- `src/pages/resources/EightGreenwashingRisks.tsx`

Update `src/pages/Services.tsx` hub to list the 4 services + link to the AI screening tool. Update `src/pages/Resources.tsx` to feature the greenwashing-risks article.

### 4. Footer (`src/components/Footer.tsx`)
Mirror the new nav structure; drop dead links.

### 5. Sitemap + robots
Create `scripts/generate-sitemap.ts` wired via `predev`/`prebuild` per the project's sitemap convention, listing exactly the 8 public routes above (BASE_URL `https://projectverdant.xyz`). Create `public/robots.txt` (allow all).

## Questions before I build

1. **Old pages**: do you want me to **delete** the retired page files (Built Environment, Corporate Sustainability, Net Zero, PPN, Carbon Credits, Team, Press, Partners, Careers, Projects, CPD, Masterclass, PlanningTool) — or just remove them from the nav/sitemap and leave the files in place for now?
2. **Content for the 4 new service pages + AI tool + article**: should I generate reasonable placeholder copy in the Verdant tone, or wait until you supply real content and just scaffold empty layouts?
