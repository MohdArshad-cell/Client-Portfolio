# Aman Architects Portfolio

![Banner](https://socialify.git.ci/amanarchitects/amanarchitects-portfolio/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-000000?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=lenis&logoColor=white)](https://github.com/studio-neko/lenis) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

## Executive Summary

This project is a frontend web application meticulously crafted with Node.js, leveraging the power of React and the Next.js framework. It serves as a modern, visually engaging portfolio for Aman Architects, showcasing their architectural designs and services. The application prioritizes a seamless user experience through advanced animation and smooth scrolling techniques.

The platform effectively communicates the studio's expertise, highlighted by **50+ Projects Completed** and **10 years of experience**. The digital presence is designed to attract new clientele by presenting a professional and aesthetically refined portfolio, driving business growth through compelling visual storytelling and clear calls to action.

## Architecture & Tech Stack

| Technology     | Version | Key Responsibility                                                     |
| :------------- | :------ | :---------------------------------------------------------------------- |
| Node.js        | N/A     | JavaScript runtime environment for server-side operations and tooling |
| React          | N/A     | Declarative UI library for building interactive user interfaces       |
| Next.js        | N/A     | React framework for production, enabling SSR, static generation, etc. |
| TypeScript     | N/A     | Superset of JavaScript providing static typing for enhanced robustness    |
| Framer Motion  | N/A     | Animation library for creating complex and fluid UI animations        |
| Lenis          | N/A     | Smooth scrolling library for an enhanced user navigation experience   |
| Tailwind CSS   | N/A     | Utility-first CSS framework for rapid UI styling                        |
| ESLint         | N/A     | Pluggable JavaScript linter for maintaining code quality and consistency |

## System Signatures

This section details the core components and their technical roles within the application:

*   **`RootLayout` (`src/app/layout.tsx`):** Implements the foundational structure of the Next.js application, defining global styles, metadata, and the overall page structure.
*   **`Home` (`src/app/page.tsx`):** Serves as the main landing page component, orchestrating the rendering of various sections and potentially handling initial page load logic.
*   **`Magnetic` (`src/components/Magnetic.tsx`):** Likely utilizes `framer-motion` to create interactive elements that follow the user's cursor, providing a subtle yet engaging visual feedback mechanism.
*   **`handleMouseMove` (`src/components/Magnetic.tsx`, `src/sections/Hero.tsx`):** Custom event handler functions responsible for tracking mouse coordinates and translating them into animation parameters for dynamic visual effects.
*   **`Navbar` (`src/components/Navbar.tsx`):** Manages the navigation interface, potentially including sticky behavior and scroll-linked animations.
*   **`handleScroll` (`src/components/Navbar.tsx`):** A utility function to detect scroll events, enabling dynamic changes to the Navbar's appearance or behavior.
*   **`ProjectCard` (`src/components/ProjectCard.tsx`):** A presentational component responsible for rendering individual project details within the projects section, likely including image, title, and category.
*   **`SmoothScroll` (`src/components/SmoothScroll.tsx`):** Integrates the `lenis` library to provide a highly customized and performant smooth scrolling experience across the application.
*   **`About`, `Contact`, `Hero`, `Projects`, `Services` (`src/sections/...`):** These components represent distinct sections of the portfolio, each encapsulating specific content and functionality related to the respective architectural domain.
*   **`SiteConfig` (`src/constants/index.ts`):** A configuration object holding essential site metadata such as the studio name, tagline, and contact information.
*   **`NavLinks` (`src/constants/index.ts`):** An array defining the structure and destinations for the primary navigation links.
*   **`ProjectsData` (`src/constants/index.ts`):** A dataset containing details for each architectural project showcased in the portfolio.
*   **`AboutData` (`src/constants/index.ts`):** Static content for the "About Us" section, including descriptive text, key statistics, and an representative image.
*   **`ServicesData` (`src/constants/index.ts`):** A collection of services offered by Aman Architects, detailing each service's title and a brief description.
*   **`ContactData` (`src/constants/index.ts`):** Holds the contact details for the architectural firm, including address, email, and potentially phone numbers.

## Directory Blueprint

```
.
├── next.config.ts              # Next.js build and runtime configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler options
└── src/                        # Source code directory
    ├── app/                    # App Router directory for routing and layout
    │   ├── layout.tsx          # Root layout component
    │   └── page.tsx            # Homepage component
    ├── components/             # Reusable UI components
    │   ├── Magnetic.tsx        # Interactive magnetic effect component
    │   ├── Navbar.tsx          # Navigation bar component
    │   ├── ProjectCard.tsx     # Component for displaying project cards
    │   └── SmoothScroll.tsx    # Smooth scrolling integration component
    ├── constants/              # Application-wide constants and data
    │   └── index.ts            # Exports for site configuration, nav links, etc.
    └── sections/               # Page sections components
        ├── About.tsx           # About Us section
        ├── Contact.tsx         # Contact section
        ├── Hero.tsx            # Hero banner/introduction section
        ├── Projects.tsx        # Projects showcase section
        └── Services.tsx        # Services offered section
```

## Deployment & Operation

### Prerequisites

*   Node.js (LTS recommended)
*   npm, Yarn, or pnpm package manager

### Installation

```bash
# Using npm
npm install

# Using Yarn
yarn install

# Using pnpm
pnpm install
```

### Local Development

```bash
# Using npm
npm run dev

# Using Yarn
yarn dev

# Using pnpm
pnpm dev
```

Navigate to `http://localhost:3000` in your browser.

### Production Build

```bash
# Using npm
npm run build

# Using Yarn
yarn build

# Using pnpm
pnpm build
```

To start the production server:

```bash
# Using npm
npm run start

# Using Yarn
yarn start

# Using pnpm
pnpm start
```

## Acknowledgements & Contact

This project was built with a focus on modern frontend technologies to create a compelling and functional architectural portfolio.

### Contact Aman Architects

*   📧 Email: `contact@amanarchitects.com`
*   📱 WhatsApp: `+919876543210`
*   📍 Location: Lucknow, Uttar Pradesh, India

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.