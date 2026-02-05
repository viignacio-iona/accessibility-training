# Accessibility Training Ecommerce App

For internal use only. This project provides a hands-on experience to help QA consultants spot and try to fix common accessibility issues.

## Overview

This is a fully functional ecommerce web application built with Next.js, TypeScript, and Tailwind CSS. The application intentionally contains **30+ accessibility issues** across WCAG 2.1 Level A and AA criteria. The purpose is to provide QA consultants with a realistic training environment to practice identifying and fixing accessibility problems.

## Features

- **Complete Ecommerce Flow**: Homepage → Product Listing → Product Detail → Cart → Checkout → Success/Failure
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Realistic Data**: 30 mock products across multiple categories
- **Full Functionality**: Search, filter, add to cart, checkout (with stubbed API)
- **Accessibility Issues**: Intentionally included issues for training purposes

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (UI component library)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd accessibility-training
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
accessibility-training/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── data/                 # Mock product data
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## Pages

- **Homepage** (`/`): Featured products and category navigation
- **Product Listing** (`/products`): Browse all products with search and filters
- **Product Detail** (`/products/[id]`): Individual product page with gallery
- **Shopping Cart** (`/cart`): Review and manage cart items
- **Checkout** (`/checkout`): Shipping and payment forms
- **Checkout Success** (`/checkout/success`): Order confirmation
- **Checkout Failure** (`/checkout/failure`): Payment error page
- **404 Page**: Custom not-found page

## Testing for Accessibility

### Quick Start

1. **Run the application** (see Getting Started above)
2. **Use automated tools**:
   - Install [axe DevTools](https://www.deque.com/axe/devtools/) browser extension
   - Install [WAVE](https://wave.webaim.org/) browser extension
   - Use Chrome Lighthouse (built into DevTools)

3. **Test with screen readers**:
   - **Windows**: NVDA (free) or JAWS (trial)
   - **Mac**: VoiceOver (built-in, activate with Cmd+F5)

4. **Test keyboard navigation**:
   - Tab through all interactive elements
   - Verify focus indicators are visible
   - Check for keyboard traps

### Documentation

- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)**: Comprehensive testing guide with tools and methodologies
- **[ACCESSIBILITY_ISSUES.md](./ACCESSIBILITY_ISSUES.md)**: Complete checklist of all accessibility issues (reference after testing)

## Common Accessibility Issues Included

This application contains intentional accessibility issues including:

- Missing alt text on images
- Form fields without labels
- Poor color contrast
- Missing heading hierarchy
- Keyboard navigation issues
- Missing ARIA attributes
- Table structure problems
- Dynamic content not announced
- And many more...

**Note**: These issues are intentional for training purposes. In a production application, all of these should be fixed.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Issues

If you want to add more accessibility issues for training:

1. Add the issue to the code (without comments - let QAs discover them)
2. Update `ACCESSIBILITY_ISSUES.md` with the new issue
3. Document it in the testing guide if it requires specific testing methods

## Notes for QA Consultants

1. **Don't peek at the code first**: Try to identify issues through testing before checking `ACCESSIBILITY_ISSUES.md`
2. **Use multiple tools**: Combine automated tools with manual testing
3. **Document everything**: Keep detailed notes of issues found
4. **Suggest fixes**: For each issue, suggest how to fix it

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/) - Web accessibility resources
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing tool
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool

## License

Internal use only.
