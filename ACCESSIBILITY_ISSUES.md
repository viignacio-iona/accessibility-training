# Accessibility Issues Checklist

This document lists all the accessibility issues intentionally included in this training application. Use this as a reference after you've completed your testing to verify your findings.

## WCAG 2.1 Level A Issues

### 1. Images and Media
- [ ] Missing or empty `alt` text on product images (ProductCard, ProductGallery, CartItem)
- [ ] Decorative images without `alt=""` attribute (hero banner background, decorative elements)
- [ ] Product images in gallery without descriptive alt text
- [ ] Thumbnail images in product gallery without alt text
- [ ] Logo image in header without alt text (Header.tsx)
- [ ] Social media icon images without alt text (Footer.tsx)
- [ ] Category images without alt text (Homepage category section)
- [ ] Promotional banner images without alt text (Product Listing Page)
- [ ] Sale badge images without alt text (ProductCard)
- [ ] Stock status badge images without alt text (Product Detail Page)
- [ ] Trust badge images without alt text (Product Detail Page - Secure, Fast Ship, Returns)
- [ ] Security badge images without alt text (CheckoutForm - Secure badge)
- [ ] Payment method icon images without alt text (CheckoutForm - Visa, Mastercard, Amex)

### 2. Language and Semantics
- [ ] Missing `lang` attribute on `<html>` element (layout.tsx)
- [ ] Using `<div>` instead of semantic HTML (`<button>`, `<nav>`, `<header>`, etc.)
- [ ] Missing `<main>` landmark element
- [ ] Missing navigation landmarks (`<nav>`)
- [ ] Non-semantic breadcrumb structure (using divs instead of `<nav>` with `<ol>`)

### 3. Forms and Inputs
- [ ] Missing `<label>` elements (using placeholder as label)
- [ ] Form fields without associated error messages via `aria-describedby`
- [ ] Missing `aria-required` or `required` attributes
- [ ] Form field groups without `fieldset` and `legend`
- [ ] Quantity inputs without labels
- [ ] Search input without label
- [ ] Filter inputs without labels

### 4. Navigation and Structure
- [ ] Missing skip links (skip to main content)
- [ ] Missing or incorrect heading hierarchy (h1 → h3 skipping h2, or h2 without h1)
- [ ] Poor tab order (elements not in logical sequence)
- [ ] Missing page titles or non-descriptive titles

### 5. Links and Buttons
- [ ] Links without descriptive text ("click here", "read more")
- [ ] Buttons without accessible names (icon-only buttons)
- [ ] Missing `type` attributes on buttons
- [ ] Non-descriptive link text in footer and navigation

### 6. Tables
- [ ] Missing `<th>` elements or missing `scope` attributes
- [ ] Missing `<caption>` for data tables
- [ ] Cart table without proper header structure
- [ ] Table cells without proper header association

## WCAG 2.1 Level AA Issues

### 7. Color and Contrast
- [ ] Text with insufficient color contrast (WCAG AA requires 4.5:1 for normal text, 3:1 for large text)
- [ ] Links without sufficient contrast from body text
- [ ] Footer links with poor contrast
- [ ] Error messages with potentially insufficient contrast

### 8. Focus Management
- [ ] Missing visible focus indicators (or very subtle ones)
- [ ] Focus order issues (tab order doesn't match visual order)
- [ ] Focus not managed in modals/dialogs
- [ ] Keyboard traps in mobile menu and filters

### 9. Dynamic Content
- [ ] Missing `aria-live` regions for dynamic updates (cart count, search results)
- [ ] Missing `aria-expanded` on collapsible content (filters, mobile menu)
- [ ] Missing `aria-controls` for expandable sections
- [ ] Content changes without notification (cart updates, toast notifications)
- [ ] Missing `aria-busy` on loading states

### 10. ARIA Issues
- [ ] Missing ARIA labels where needed
- [ ] Incorrect ARIA usage (e.g., `role="button"` on `<div>`)
- [ ] Missing `aria-label` or `aria-labelledby` on icon-only buttons
- [ ] Missing `aria-current` on active navigation items
- [ ] Missing `aria-hidden="true"` on decorative icons
- [ ] Missing `aria-describedby` for form error messages

### 11. Additional Common Issues
- [ ] Missing breadcrumb navigation ARIA (should use `<nav aria-label="Breadcrumb">` with `<ol>`)
- [ ] Toast notifications without `aria-live` regions
- [ ] Empty states without proper heading structure
- [ ] 404 pages without clear error messages or navigation options
- [ ] Missing loading indicators or loading states without `aria-busy`
- [ ] Missing `title` attributes on links that open in new windows
- [ ] Missing skip to main content link
- [ ] Product count not announced to screen readers
- [ ] Rating stars without accessible text alternative
- [ ] Price information without proper semantic markup or currency indication

## Issue Locations by Page

### Homepage (`app/page.tsx`)
- Missing skip link
- Poor heading hierarchy (h2 without h1)
- Missing alt text on featured product images
- Category links without descriptive text
- Text color contrast on gradient background

### Product Listing Page (`app/products/page.tsx`)
- Missing h1 heading
- Search bar without label
- Sort dropdown without label
- Filter sidebar with keyboard traps
- Missing aria-expanded on collapsible filters
- Product count not announced

### Product Detail Page (`app/products/[id]/page.tsx`)
- Should be h1 for product name (currently h2)
- Product gallery images without alt text
- Quantity input without label
- Size/color selects without labels
- Related products section heading hierarchy
- Toast notification without aria-live

### Shopping Cart (`app/cart/page.tsx`)
- Table without caption
- Table headers without scope attributes
- Quantity inputs without labels
- Remove buttons without accessible names
- Price information without semantic markup

### Checkout Page (`app/checkout/page.tsx`)
- Form fields without labels (using placeholders)
- Missing fieldset/legend for form sections
- Error messages not associated with fields via aria-describedby
- Missing aria-required on required fields
- Security indicator without proper semantic markup

### Checkout Success/Failure Pages
- Should be h1 for main heading (currently h2)
- Success/error messages not announced via aria-live
- Non-descriptive link text

### 404 Page (`app/not-found.tsx`)
- Should be h1 for main heading (currently h2)
- Missing clear navigation options

### Components

#### Header (`components/Header.tsx`)
- Missing semantic `<nav>` element
- Navigation links without ARIA labels
- Cart link without proper aria-label
- Cart count not announced
- Mobile menu without aria-expanded, aria-controls
- Keyboard trap potential in mobile menu

#### Footer (`components/Footer.tsx`)
- Links without sufficient contrast
- Social media links without descriptive text
- Missing heading structure

#### ProductCard (`components/ProductCard.tsx`)
- Missing alt text on product images
- Non-descriptive link text
- Price without proper semantic markup
- Rating stars without accessible text

#### Breadcrumbs (`components/Breadcrumbs.tsx`)
- Missing `<nav>` element with aria-label
- Missing `<ol>` ordered list structure
- Non-semantic div structure

#### Toast (`components/Toast.tsx`)
- Missing aria-live region
- Close button without aria-label
- May not be dismissible with keyboard only

#### FilterSidebar (`components/FilterSidebar.tsx`)
- Collapsible sections without aria-expanded
- Radio buttons without fieldset/legend
- Input fields without labels
- Buttons without type attributes

## Testing Recommendations

1. Use automated tools: axe DevTools, WAVE, Lighthouse
2. Test with screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
3. Test keyboard navigation: Tab through all interactive elements
4. Test color contrast: Use contrast checker tools
5. Test with browser zoom: Ensure content remains usable at 200% zoom
6. Test form validation: Ensure errors are announced and associated with fields

## Total Issues Count

This application contains **30+ distinct accessibility issues** across WCAG 2.1 Level A and AA criteria, covering:
- Images and media (5+ issues)
- Forms and inputs (10+ issues)
- Navigation and structure (8+ issues)
- Color and contrast (4+ issues)
- ARIA and dynamic content (8+ issues)
- Tables (3+ issues)
- Focus management (4+ issues)
