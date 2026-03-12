# Aman Architects Portfolio

![Banner](https://socialify.git.ci/your-repo-path/your-repo-name/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-v20.x-21325e?style=flat-square)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-v18.x-61DAFB?style=flat-square)](https://react.dev/) [![Next.js](https://img.shields.io/badge/Next.js-v14.x-000000?style=flat-square)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-3178C6?style=flat-square)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.x-06B6D4?style=flat-square)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-v10.x-9675FF?style=flat-square)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-v1.x-333333?style=flat-square)](https://github.com/studio-freight/lenis) [![ESLint](https://img.shields.io/badge/ESLint-v8.x-4B3264?style=flat-square)](https://eslint.org/) 

## Executive Summary

This project is a high-performance, visually engaging frontend portfolio application built with Next.js and React, leveraging TypeScript for robust development. It is engineered to showcase architectural projects with a focus on smooth animations and a seamless user experience.

The application successfully delivers a polished presentation of the studio's work, highlighting achievements such as **over 50 projects completed** and **10 years of industry experience**. The use of modern frontend technologies ensures a responsive and dynamic interface that captivates visitors and effectively communicates the studio's design philosophy and capabilities.

## Architecture & Tech Stack

This table outlines the core technologies powering the portfolio application:

| Technology     | Version | Key Responsibility                                                     |
| :------------- | :------ | :---------------------------------------------------------------------- |
| Node.js/JS/TS | v20.x   | Runtime environment and primary language support.                      |
| React          | v18.x   | Component-based UI library for building interactive interfaces.         |
| Next.js        | v14.x   | React framework for server-side rendering, static site generation, and API routes. |
| Framer Motion  | v10.x   | Advanced animation library for sophisticated UI transitions and effects. |
| Lenis          | v1.x    | Smooth scrolling library for an enhanced, fluid navigation experience. |
| Tailwind CSS   | v3.x    | Utility-first CSS framework for rapid UI styling and customization.    |
| TypeScript     | v5.x    | Static typing for improved code quality, maintainability, and scalability. |
| ESLint         | v8.x    | Code linting utility for enforcing coding standards and detecting errors. |

## System Signatures

The following components and functions contribute to the dynamic and interactive nature of the application:

*   **`RootLayout` (src/app/layout.tsx):** Implements the fundamental structure and global styling for the entire application, ensuring a consistent look and feel across all pages.
*   **`Home` (src/app/page.tsx):** Serves as the main entry point and orchestrates the rendering of various sections and components that constitute the homepage.
*   **`Magnetic` (src/components/Magnetic.tsx) & `handleMouseMove`:** Implements a magnetic effect, likely using `framer-motion`, to create an interactive hover effect that pulls elements towards the cursor, enhancing user engagement.
*   **`Navbar` (src/components/Navbar.tsx) & `handleScroll`:** Manages the navigation bar's behavior, potentially with scroll-based effects or dynamic styling, ensuring a user-friendly navigation experience.
*   **`ProjectCard` (src/components/ProjectCard.tsx):** A reusable component for displaying individual project details, including images, titles, and categories, within the projects section.
*   **`SmoothScroll` (src/components/SmoothScroll.tsx):** Integrates the `lenis` library to provide an exceptionally smooth and natural scrolling experience throughout the application.
*   **`About` (src/sections/About.tsx):** Renders the "About Us" section, presenting the studio's mission, experience, and team statistics.
*   **`Contact` (src/sections/Contact.tsx):** Displays the contact information and a form or call to action for users to reach out.
*   **`Hero` (src/sections/Hero.tsx) & `handleMouseMove`:** Likely responsible for the initial landing section, featuring a prominent call to action and potentially animated elements, possibly with cursor-interactive effects.
*   **`Projects` (src/sections/Projects.tsx):** Aggregates and displays a collection of `ProjectCard` components, showcasing the studio's portfolio.
*   **`Services` (src/sections/Services.tsx):** Details the architectural and design services offered by the studio.
*   **`SiteConfig`, `NavLinks`, `ProjectsData`, `AboutData`, `ServicesData`, `ContactData` (src/constants/index.ts):** Centralized configuration objects and arrays that hold static content, navigation links, project details, about information, services offered, and contact details, ensuring data consistency and easy updates.

## Directory Blueprint

```
.
├── next.config.ts          # Next.js configuration file
├── package.json            # Project dependencies and scripts
├── postcss.config.ts       # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript compiler options
├── src
│   ├── app                 # Next.js App Router directory for routing and layouts
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page component
│   ├── components          # Reusable UI components
│   │   ├── Magnetic.tsx    # Interactive magnetic effect component
│   │   ├── Navbar.tsx      # Navigation bar component
│   │   ├── ProjectCard.tsx # Component for displaying individual projects
│   │   └── SmoothScroll.tsx # Smooth scrolling integration component
│   ├── constants           # Application-wide constants and data
│   │   └── index.ts        # Site configuration, navigation links, project data, etc.
│   └── sections            # Major page sections
│       ├── About.tsx       # About Us section component
│       ├── Contact.tsx     # Contact section component
│       ├── Hero.tsx        # Hero/landing section component
│       ├── Projects.tsx    # Projects showcase section component
│       └── Services.tsx    # Services offered section component
└── README.md               # This README file
```

## Deployment & Operation

This project utilizes `npm` for package management and script execution.

### Prerequisites

*   Node.js (v20.x or higher recommended)
*   npm (installed with Node.js)

### Installation

To install all project dependencies, run the following command in your terminal:

```bash
npm install
```

### Local Development

To start the development server and preview the application locally, execute:

```bash
npm run dev
```

This will typically start the server at `http://localhost:3000`.

### Production Build

To create an optimized production build of your application, run:

```bash
npm run build
```

To serve the production build locally:

```bash
npm run start
```

## Acknowledgements & Contact

This project was brought to life with a dedication to design excellence and user experience.

For inquiries or collaborations, please reach out:

📧 Email: `contact@amanarchitects.com`
📱 WhatsApp: `+919876543210`
📍 Location: Lucknow, Uttar Pradesh, India

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.