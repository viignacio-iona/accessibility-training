# Accessibility Testing Guide

This guide will help QA consultants test for accessibility issues in this training application.

## Getting Started

1. **Install and Run the Application**
   ```bash
   npm install
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

2. **Familiarize Yourself with the Application**
   - Browse the homepage
   - Navigate to product listing page
   - View a product detail page
   - Add items to cart
   - Complete the checkout flow

## Testing Tools

### Automated Testing Tools

#### 1. axe DevTools (Recommended)
- **Installation**: Browser extension for Chrome, Firefox, Edge
- **Usage**: 
  - Open the application in your browser
  - Click the axe DevTools icon
  - Click "Scan All of My Page"
  - Review violations and warnings
- **What it finds**: Missing alt text, ARIA issues, color contrast, form labels, etc.

#### 2. WAVE (Web Accessibility Evaluation Tool)
- **Installation**: Browser extension or online tool at wave.webaim.org
- **Usage**:
  - Install the extension or use the online tool
  - Navigate to a page
  - Click the WAVE icon
  - Review errors, alerts, and features
- **What it finds**: Structural issues, missing labels, contrast problems, ARIA issues

#### 3. Lighthouse (Built into Chrome)
- **Usage**:
  - Open Chrome DevTools (F12)
  - Go to "Lighthouse" tab
  - Select "Accessibility" category
  - Click "Generate report"
- **What it finds**: Overall accessibility score and common issues

### Screen Readers

#### Windows
- **NVDA** (Free): Download from nvaccess.org
- **JAWS** (Paid): Industry standard, available with trial version

#### Mac/iOS
- **VoiceOver**: Built-in, activate with Cmd+F5

#### Testing with Screen Readers
1. Navigate through pages using keyboard only
2. Listen to how content is announced
3. Check if interactive elements are properly identified
4. Verify form labels are read correctly
5. Test dynamic content announcements (cart updates, errors)

### Keyboard Navigation Testing

1. **Tab Navigation**
   - Press Tab to move forward through interactive elements
   - Press Shift+Tab to move backward
   - Verify focus order matches visual order
   - Check that all interactive elements are reachable

2. **Keyboard Shortcuts**
   - Enter/Space to activate buttons
   - Arrow keys for dropdowns and radio buttons
   - Escape to close modals/dialogs

3. **Focus Indicators**
   - Verify visible focus indicators on all interactive elements
   - Check that focus is clearly visible

## Testing Checklist

### Page Structure
- [ ] Page has a descriptive title
- [ ] Page has a main heading (h1)
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Skip to main content link is present
- [ ] Page has proper landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`)

### Images
- [ ] All images have alt text
- [ ] Decorative images have `alt=""`
- [ ] Product images have descriptive alt text
- [ ] Complex images have detailed descriptions

### Forms
- [ ] All form fields have associated labels
- [ ] Required fields are marked (visually and with aria-required)
- [ ] Error messages are associated with fields (aria-describedby)
- [ ] Form sections use fieldset/legend
- [ ] Form validation errors are announced to screen readers

### Navigation
- [ ] Navigation is keyboard accessible
- [ ] Focus order is logical
- [ ] Active page is indicated (aria-current)
- [ ] Links have descriptive text
- [ ] Breadcrumbs use proper semantic structure

### Color and Contrast
- [ ] Text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Links have sufficient contrast from body text
- [ ] Error messages have sufficient contrast
- [ ] Information is not conveyed by color alone

### Dynamic Content
- [ ] Cart count updates are announced (aria-live)
- [ ] Search results are announced
- [ ] Error messages are announced
- [ ] Success messages are announced
- [ ] Loading states are indicated (aria-busy)

### Tables
- [ ] Tables have headers (`<th>`)
- [ ] Headers have scope attributes
- [ ] Tables have captions if needed
- [ ] Table cells are associated with headers

### Focus Management
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Focus order matches visual order
- [ ] No keyboard traps
- [ ] Modals/dialogs manage focus properly

## Common Issues to Look For

### 1. Missing Alt Text
- Check product images, icons, decorative images
- Verify alt text is descriptive for product images
- Verify decorative images have `alt=""`

### 2. Form Label Issues
- Check if inputs use placeholders instead of labels
- Verify labels are associated with inputs (for/id or aria-labelledby)
- Check if required fields are marked

### 3. Heading Hierarchy
- Verify h1 exists on each page
- Check heading order (h1 → h2 → h3, no skipping)
- Verify headings describe page structure

### 4. Color Contrast
- Use contrast checker tools
- Test text on colored backgrounds
- Verify links are distinguishable from body text
- Check error messages have sufficient contrast

### 5. Keyboard Navigation
- Tab through entire page
- Verify all interactive elements are reachable
- Check focus indicators are visible
- Test keyboard traps in dropdowns/modals

### 6. ARIA Issues
- Check if ARIA attributes are used correctly
- Verify aria-live regions for dynamic content
- Check aria-expanded on collapsible content
- Verify aria-label on icon-only buttons

## Testing Each Page

### Homepage
1. Check for skip link
2. Verify h1 heading exists
3. Test product card images for alt text
4. Test category navigation links
5. Test search functionality

### Product Listing Page
1. Test search input label
2. Test filter sidebar keyboard navigation
3. Test sort dropdown
4. Verify product grid images have alt text
5. Test pagination (if present)

### Product Detail Page
1. Test product gallery keyboard navigation
2. Verify product images have alt text
3. Test quantity input label
4. Test size/color selects
5. Test "Add to Cart" button
6. Verify toast notification announcements

### Shopping Cart
1. Test table structure and headers
2. Test quantity inputs for labels
3. Test remove buttons for accessible names
4. Test checkout button
5. Verify price information structure

### Checkout Page
1. Test all form fields for labels
2. Test form validation error announcements
3. Test required field indicators
4. Test form sections (fieldset/legend)
5. Test submit button

## Reporting Issues

When documenting accessibility issues, include:
1. **Issue Type**: WCAG criterion (e.g., "1.1.1 Non-text Content")
2. **Severity**: Level A, AA, or AAA
3. **Location**: Page/component and specific element
4. **Description**: What's wrong and why it's an issue
5. **Impact**: How it affects users
6. **Recommendation**: How to fix it
7. **Screenshot/Code**: Visual or code reference

## Example Issue Report

```
**Issue**: Missing alt text on product images
**WCAG**: 1.1.1 Non-text Content (Level A)
**Location**: ProductCard component, homepage
**Description**: Product images lack alt text, making them inaccessible to screen reader users
**Impact**: Screen reader users cannot understand what products are displayed
**Recommendation**: Add descriptive alt text: `alt={product.name}`
**Code Reference**: components/ProductCard.tsx, line 15
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Documentation](https://www.deque.com/axe/devtools/)
- [WAVE Documentation](https://wave.webaim.org/)
- [Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)

## Next Steps

After identifying issues:
1. Document all findings
2. Prioritize by severity (Level A > Level AA)
3. Suggest fixes for each issue
4. Test fixes to ensure they resolve the problems
5. Verify fixes don't introduce new issues
