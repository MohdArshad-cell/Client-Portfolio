# Aman Architects Portfolio

![Banner](https://socialify.git.ci/username/repo/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-6.17.1-brightgreen)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-13.4.19-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-purple)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.0-cyan)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-1.0.10-orange)](https://github.com/studio-freight/lenis)

## Executive Summary

This project is a sophisticated frontend application built with **Node.js, React, and Next.js**, designed to showcase architectural portfolios with a focus on immersive user experiences. It leverages advanced frontend techniques and modern JavaScript/TypeScript to deliver a dynamic and visually engaging platform.

The application effectively communicates the studio's expertise, highlighting achievements such as **50+ Projects Completed** and **10+ Years of Experience**. It aims to attract and engage potential clients by presenting a compelling narrative of design philosophy and project execution, translating into increased client acquisition and brand recognition for Aman Architects.

## Architecture & Tech Stack

| Technology      | Version   | Key Responsibility                                           |
| :-------------- | :-------- | :------------------------------------------------------------ |
| Node.js         | 6.17.1    | Runtime environment for server-side logic and build tooling   |
| React           | 18.2.0    | Component-based UI library for building interactive interfaces |
| Next.js         | 13.4.19   | React framework for server-side rendering, static generation, and routing |
| TypeScript      | 5.1.6     | Static typing for enhanced code quality and maintainability   |
| Tailwind CSS    | 3.3.2     | Utility-first CSS framework for rapid UI development          |
| Framer Motion   | 10.16.0   | Animation and gesture library for creating engaging motion effects |
| Lenis           | 1.0.10    | Smooth scrolling library for enhanced user experience         |
| ESLint          | N/A       | Code linting for maintaining code style and quality           |
| @types/node     | N/A       | TypeScript definitions for Node.js                            |
| @types/react    | N/A       | TypeScript definitions for React                              |
| @types/react-dom| N/A       | TypeScript definitions for React DOM                          |
| PostCSS         | N/A       | CSS transformation tool, often used with Tailwind CSS         |

## System Signatures

*   **`RootLayout` (Next.js App Router):** Orchestrates the foundational structure of the application, including global CSS, meta tags, and provider configurations, ensuring a consistent layout across all pages.
*   **`Home` (Next.js Page):** Serves as the main entry point for the application, rendering the primary content and sections of the portfolio.
*   **`Magnetic` Component (Framer Motion):** Implements a magnetic-like effect on child elements, responding dynamically to mouse movement for an interactive and captivating user experience.
*   **`handleMouseMove` (within `Magnetic` & `Hero`):** A utility function likely used to track cursor position, enabling interactive visual feedback and animations.
*   **`Navbar` Component:** Manages navigation elements, including responsiveness and potentially scroll-based effects to enhance user interaction.
*   **`handleScroll` (within `Navbar`):** Captures scroll events to trigger visual changes in the navigation bar, such as background color or element visibility.
*   **`ProjectCard` Component:** Encapsulates the display of individual project details, likely featuring images, titles, and categories.
*   **`SmoothScroll` Component (Lenis Integration):** Integrates the Lenis library to provide a highly performant and smooth scrolling experience throughout the application.
*   **`About`, `Contact`, `Hero`, `Projects`, `Services` Components:** These components represent distinct sections of the portfolio, each dedicated to presenting specific information and content in a structured manner.
*   **`SiteConfig` (Constants):** Centralizes key application-wide configurations such as site name, tagline, contact details, and navigation links, promoting maintainability and easy updates.
*   **`NavLinks` (Constants):** Defines the navigation structure for the application, mapping display names to their corresponding routes.
*   **`ProjectsData` (Constants):** A data structure containing detailed information for each architectural project, including titles, categories, and image URLs.
*   **`AboutData` (Constants):** Holds content related to the studio's history, mission, statistics, and a representative image.
*   **`ServicesData` (Constants):** Outlines the various services offered by the architectural firm, with descriptions for each.
*   **`ContactData` (Constants):** Stores essential contact information such as address and email.

## Directory Blueprint

```
.
├── next.config.ts             # Next.js configuration file
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── src
    ├── app                     # Next.js App Router: Root layout, pages, API routes
    │   ├── layout.tsx          # Root layout component
    │   └── page.tsx            # Home page component
    ├── components              # Reusable UI components
    │   ├── Magnetic.tsx        # Interactive magnetic effect component
    │   ├── Navbar.tsx          # Navigation bar component
    │   ├── ProjectCard.tsx     # Component for displaying project details
    │   └── SmoothScroll.tsx    # Smooth scrolling integration component
    ├── constants               # Application-wide constants and configuration
    │   └── index.ts            # Exports for site configuration, data, and links
    └── sections                # Components representing distinct page sections
        ├── About.tsx           # About Us section
        ├── Contact.tsx         # Contact information section
        ├── Hero.tsx            # Hero/Landing section
        ├── Projects.tsx        # Projects showcase section
        └── Services.tsx        # Services offered section
```

## Deployment & Operation

### Prerequisites

*   Node.js (version specified in stack, or latest LTS)
*   npm, yarn, or pnpm package manager

### Installation

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Local Development

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### Production Build

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

### Preview Production Build

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## Acknowledgements & Contact

This project is a testament to modern frontend development practices, aiming to provide an exceptional user experience for showcasing architectural brilliance.

📧 **Email:** contact@amanarchitects.com
📍 **Location:** Lucknow, Uttar Pradesh, India

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.