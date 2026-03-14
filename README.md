# Aman Architects Portfolio

![Banner](https://socialify.git.ci/repo_path/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-f0f0f0?style=flat-square)](https://github.com/studio-frek/lenis) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint)](https://eslint.org/)

## Executive Summary

This project is a meticulously crafted frontend portfolio application, engineered with **Node.js** and **TypeScript**, leveraging the power of **Next.js** and **React**. It is designed to showcase architectural projects with an emphasis on immersive user experiences and modern design principles. The application utilizes advanced animation libraries and smooth scrolling techniques to create an engaging and visually rich presentation.

The portfolio effectively communicates the studio's core values and achievements, highlighting a portfolio of **50+ projects completed** and **12 awards won** over **10 years of experience**. The use of dynamic visuals and clear calls to action aims to drive client engagement and inquiries, positioning Aman Architects as a leader in innovative and functional design.

## Architecture & Tech Stack

| Technology     | Version | Key Responsibility                                                                     |
| :------------- | :------ | :-------------------------------------------------------------------------------------- |
| Node.js        | -       | Runtime environment for the JavaScript/TypeScript application.                          |
| React          | -       | Component-based UI library for building interactive interfaces.                         |
| Next.js        | -       | React framework for server-side rendering, static site generation, and routing.         |
| TypeScript     | -       | Static typing for enhanced code quality, maintainability, and developer productivity.   |
| Framer Motion  | -       | Animation library for orchestrating complex layout transitions and micro-interactions. |
| Lenis          | -       | Advanced smooth scrolling library for an immersive and fluid user experience.         |
| Tailwind CSS   | -       | Utility-first CSS framework for rapid UI development and consistent styling.            |
| ESLint         | -       | Code linting utility for maintaining code style and catching potential errors.          |

## System Signatures

This project utilizes several key components and functions that contribute to its sophisticated user experience:

*   **`RootLayout` (src/app/layout.tsx):** The fundamental layout component in Next.js, responsible for establishing the global structure, meta tags, and essential providers for the entire application.
*   **`Home` (src/app/page.tsx):** The main page component, orchestrating the rendering of various sections and acting as the primary entry point for the portfolio's content.
*   **`Magnetic` (src/components/Magnetic.tsx):** Implements a magnetic hover effect on elements, providing a subtle yet engaging interactive feedback loop for users. This is likely powered by event listeners and `transform` CSS properties.
*   **`handleMouseMove` (src/components/Magnetic.tsx & src/sections/Hero.tsx):** A utility function likely used to track mouse coordinates and translate them into animation parameters for effects like magnetic hovering or parallax.
*   **`Navbar` (src/components/Navbar.tsx):** The primary navigation component, handling user interface elements for site navigation and potentially scroll-linked animations or states.
*   **`handleScroll` (src/components/Navbar.tsx):** A function designed to react to user scroll events, likely used to trigger visual changes in the Navbar (e.g., background changes, active link highlighting).
*   **`ProjectCard` (src/components/ProjectCard.tsx):** A reusable component for displaying individual project information, including titles, categories, and images.
*   **`SmoothScroll` (src/components/SmoothScroll.tsx):** Integrates the `lenis` library to provide a custom, performant, and highly customizable smooth scrolling experience throughout the application.
*   **`About` (src/sections/About.tsx), `Contact` (src/sections/Contact.tsx), `Hero` (src/sections/Hero.tsx), `Projects` (src/sections/Projects.tsx), `Services` (src/sections/Services.tsx):** These components represent distinct sections of the portfolio, each responsible for rendering and managing its specific content and related logic.

## Directory Blueprint

```
.
├── next.config.ts              # Next.js application configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler options
└── src                         # Source code directory
    ├── app                     # Next.js App Router directory
    │   ├── favicon.ico         # Application favicon
    │   ├── globals.css         # Global CSS styles
    │   ├── layout.tsx          # Root layout component
    │   └── page.tsx            # Home page component
    ├── components              # Reusable UI components
    │   ├── Magnetic.tsx        # Component for magnetic hover effects
    │   ├── Navbar.tsx          # Navigation bar component
    │   ├── ProjectCard.tsx     # Component for displaying project cards
    │   └── SmoothScroll.tsx    # Component for implementing smooth scrolling
    ├── constants               # Static configuration data
    │   └── index.ts            # Exports for site configuration, nav links, etc.
    └── sections                # Page-specific sections/modules
        ├── About.tsx           # About section component
        ├── Contact.tsx         # Contact section component
        ├── Hero.tsx            # Hero/banner section component
        ├── Projects.tsx        # Projects showcase section component
        └── Services.tsx        # Services offered section component
```

## Deployment & Operation

### Prerequisites

*   Node.js (LTS version recommended)
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

This command will start the development server, typically at `http://localhost:3000`.

### Production Build

```bash
# Using npm
npm run build

# Using Yarn
yarn build

# Using pnpm
pnpm build
```

This command compiles and optimizes the application for production.

### Start Production Server

```bash
# Using npm
npm run start

# Using Yarn
yarn start

# Using pnpm
pnpm start
```

This command serves the production build of the application.

## Acknowledgements & Contact

This project was built with meticulous attention to detail and a focus on creating an exceptional user experience.

📧 **Email:** `contact@amanarchitects.com`
📱 **WhatsApp:** `+919876543210`
📍 **Location:** Lucknow, Uttar Pradesh, India

### License

This project is licensed under the MIT License.