# Aman Architects Portfolio

![Banner](https://socialify.git.ci/aman-architects/portfolio/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-2E8B57?style=for-the-badge&logo=lenis&logoColor=white)](https://github.com/studio-frek/lenis) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/) 

## Executive Summary

This project is a sophisticated frontend portfolio application meticulously crafted using Node.js, TypeScript, and the Next.js framework. It leverages React for component-based architecture and Tailwind CSS for utility-first styling. The core objective is to present architectural projects and services with a highly engaging and performant user experience, emphasizing smooth interactions and modern aesthetics.

The application is engineered to showcase the studio's expertise, highlighted by **over 50 completed projects** and **a decade of experience**. It serves as a digital gateway to communicate the studio's design philosophy, architectural prowess, and commitment to creating inspiring living and working spaces, ultimately driving client engagement and project inquiries.

## Architecture & Tech Stack

| Technology     | Version | Key Responsibility                                            |
| :------------- | :------ | :------------------------------------------------------------- |
| Node.js        | N/A     | Runtime environment for server-side operations and development |
| React          | N/A     | Declarative UI component library                               |
| Next.js        | N/A     | React framework for server-side rendering, static site generation, and API routes |
| TypeScript     | N/A     | Static typing for enhanced code quality and maintainability    |
| Tailwind CSS   | N/A     | Utility-first CSS framework for rapid UI development           |
| Framer Motion  | N/A     | Animation library for creating complex and fluid UI interactions |
| Lenis          | N/A     | Smooth scrolling library for enhanced user experience          |
| ESLint         | N/A     | Code linting and static analysis for maintaining code standards |
| PostCSS        | N/A     | CSS processing and transformation                              |

## System Signatures

The analysis of the codebase reveals several key components and functionalities that contribute to the application's advanced user experience:

*   **`RootLayout` (src/app/layout.tsx):** The foundational layout component in Next.js, responsible for the overall page structure, including meta tags, global styles, and providers.
*   **`Home` (src/app/page.tsx):** The primary page component, likely orchestrating the rendering of various sections of the portfolio.
*   **`Magnetic` Component (src/components/Magnetic.tsx):** Implements a magnetic effect, likely using Framer Motion, to create interactive visual elements that respond dynamically to mouse movement, enhancing user engagement.
*   **`handleMouseMove` Function (src/components/Magnetic.tsx, src/sections/Hero.tsx):** Event handler functions that capture mouse coordinates to drive animations and interactive effects within components like `Magnetic` and the `Hero` section.
*   **`Navbar` Component (src/components/Navbar.tsx):** Renders the navigation bar, likely incorporating scroll-aware features or animations managed by `handleScroll`.
*   **`handleScroll` Function (src/components/Navbar.tsx):** Manages scroll-related logic, potentially for sticky navigation, scroll progress indicators, or dynamic style changes based on scroll position.
*   **`ProjectCard` Component (src/components/ProjectCard.tsx):** A reusable UI component designed to display individual project details, including title, category, and image.
*   **`SmoothScroll` Component (src/components/SmoothScroll.tsx):** Integrates the Lenis library to provide a highly polished and performant smooth scrolling experience throughout the application.
*   **Constants (src/constants/index.ts):** Centralizes application configuration and static data, including site metadata (`SiteConfig`), navigation links (`NavLinks`), project details (`ProjectsData`), about information (`AboutData`), services offerings (`ServicesData`), and contact information (`ContactData`). This promotes maintainability and easy updates.
*   **Section Components (src/sections/*):** Dedicated components (`About`, `Contact`, `Hero`, `Projects`, `Services`) for organizing and rendering distinct content sections of the portfolio, promoting modularity and reusability.

## Directory Blueprint

```plaintext
├── next.config.ts              # Next.js configuration settings
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler options
├── src/                        # Source code directory
│   ├── app/                    # Next.js App Router directory
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page component
│   ├── components/             # Reusable UI components
│   │   ├── Magnetic.tsx        # Interactive magnetic effect component
│   │   ├── Navbar.tsx          # Navigation bar component
│   │   ├── ProjectCard.tsx     # Component for displaying project cards
│   │   └── SmoothScroll.tsx    # Smooth scrolling integration component
│   ├── constants/              # Application constants and static data
│   │   └── index.ts            # Exported site configuration and data
│   └── sections/               # Components representing different page sections
│       ├── About.tsx           # About section component
│       ├── Contact.tsx         # Contact section component
│       ├── Hero.tsx            # Hero section component
│       ├── Projects.tsx        # Projects section component
│       └── Services.tsx        # Services section component
└── .eslintrc.json              # ESLint configuration
└── .gitignore                  # Files and directories to ignore in Git
```

## Deployment & Operation

### Prerequisites

*   Node.js (LTS version recommended)
*   npm, yarn, or pnpm package manager

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Local Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Navigate to `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Acknowledgements & Contact

The development of this portfolio is a testament to modern frontend engineering practices, leveraging the power of Next.js, React, and Tailwind CSS to create an engaging and performant experience.

---

**Contact Us:**

📧 **Email:** contact@amanarchitects.com
📱 **WhatsApp:** +919876543210
📍 **Location:** Lucknow, Uttar Pradesh, India

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.