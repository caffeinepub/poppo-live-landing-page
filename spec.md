# Specification

## Summary
**Goal:** Clean up the footer by removing marked link columns and add a Privacy Policy page accessible from the footer.

**Planned changes:**
- Remove the four marked footer link columns (div[2] through div[5]) including their headings and list items, leaving only the logo, social icons, and copyright area
- Create a new `PrivacyPolicy.tsx` component styled consistently with the site theme (dark background, Poppins/Inter fonts, Tailwind classes), including Navbar and Footer, with all standard privacy policy sections
- Add routing in `App.tsx` to display the Privacy Policy page
- Add a "Privacy Policy" link in the footer's bottom bar (near the copyright notice) that navigates to the Privacy Policy page

**User-visible outcome:** The footer is simplified with no broken link columns, and users can click a "Privacy Policy" link in the footer to view a fully styled Privacy Policy page, then navigate back to the landing page.
