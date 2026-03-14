# Aman Architects Portfolio

![Banner](https://socialify.git.ci/your-username/your-repo-name/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-v20.x-green)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-v18.x-blue)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-v14.x-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.x-cyan)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-v10.x-red)](https://framer.com/motion) [![Lenis](https://img.shields.io/badge/Lenis-v1.x-orange)](https://github.com/studio-freight/lenis) [![ESLint](https://img.shields.io/badge/ESLint-v8.x-purple)](https://eslint.org/)

## Executive Summary

This project is a high-performance, visually engaging frontend portfolio website engineered with Next.js and React, leveraging TypeScript for robust development practices. It is meticulously crafted to showcase architectural projects and services, prioritizing a seamless user experience through advanced animation and smooth scrolling techniques.

The platform serves as a digital showroom, effectively communicating the studio's expertise and design philosophy. With a foundation built on modern web technologies, it has successfully documented **over 50 completed projects**, highlighting **10+ years of experience** and **12 prestigious awards**, underscoring a commitment to design excellence and client satisfaction.

## Architecture & Tech Stack

| Technology      | Version   | Key Responsibility                                          |
| :-------------- | :-------- | :----------------------------------------------------------- |
| Node.js         | v20.x     | Runtime environment for server-side operations and development tooling. |
| React           | v18.x     | Component-based UI library for building interactive interfaces. |
| Next.js         | v14.x     | React framework for server-side rendering, static site generation, and API routes. |
| TypeScript      | v5.x      | Static typing for enhanced code quality, maintainability, and developer productivity. |
| Framer Motion   | v10.x     | Declarative animations and transitions for rich user interactions. |
| Lenis           | v1.x      | JavaScript library for implementing smooth scrolling experiences. |
| Tailwind CSS    | v3.x      | Utility-first CSS framework for rapid UI development.         |
| ESLint          | v8.x      | Code linting for enforcing coding standards and identifying potential errors. |

## System Signatures

The codebase reveals a thoughtful integration of libraries to enhance user interaction and visual appeal:

*   **`Magnetic` Component (`src/components/Magnetic.tsx`)**: Implements a "magnetic" effect on elements, likely using mouse tracking to create a subtle, attractive pull. This enhances interactive elements, drawing user attention and providing delightful micro-interactions.
*   **`handleMouseMove` Function (within `Magnetic.tsx` and `src/sections/Hero.tsx`)**: This function is central to capturing cursor position and translating it into visual feedback, powering the magnetic effect and potentially other dynamic animations.
*   **`Navbar` Component (`src/components/Navbar.tsx`)**: Features a `handleScroll` function, indicating logic to manage navigation bar behavior based on user scroll position, such as sticky positioning or transparency changes.
*   **`SmoothScroll` Component (`src/components/SmoothScroll.tsx`)**: Integrates the `lenis` library to provide a highly customized and fluid scrolling experience, moving beyond native browser scroll behavior for a more polished feel.
*   **`RootLayout` Component (`src/app/layout.tsx`)**: The primary React component for structuring the application's layout, responsible for global styles, metadata, and the overall page structure.
*   **`Home` Component (`src/app/page.tsx`)**: Represents the main landing page of the application, orchestrating the various sections and content.

## Directory Blueprint

```plaintext
.
├── next.config.ts             # Next.js application configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript compiler options
└── src/                       # Source code directory
    ├── app/                   # Next.js App Router directory
    │   ├── favicon.ico        # Application favicon
    │   ├── globals.css        # Global CSS styles
    │   ├── layout.tsx         # Root layout component for the application
    │   └── page.tsx           # Home page component
    ├── components/            # Reusable UI components
    │   ├── Magnetic.tsx       # Component for magnetic hover effects
    │   ├── Navbar.tsx         # Navigation bar component
    │   ├── ProjectCard.tsx    # Component to display individual project details
    │   └── SmoothScroll.tsx   # Component to enable smooth scrolling behavior
    ├── constants/             # Static data and configuration constants
    │   └── index.ts           # Exports for site configuration, navigation links, project data, etc.
    └── sections/              # Page sections for content organization
        ├── About.tsx          # About section component
        ├── Contact.tsx        # Contact section component
        ├── Hero.tsx           # Hero section component
        ├── Projects.tsx       # Projects section component
        └── Services.tsx       # Services section component
```

## Deployment & Operation

This project is managed using npm, as indicated by the `package.json` file.

### Prerequisites

*   Node.js (v20.x or higher recommended)
*   npm package manager

### Installation

```bash
npm install
```

### Local Development

To run the development server and preview the website locally:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

To build the application for production:

```bash
npm run build
```

This command creates an optimized build of your application in the `.next` directory. To serve the production build locally:

```bash
npm run start
```

## Acknowledgements & Contact

This project was built with dedication and a focus on engineering excellence.

**Contact Information:**

*   **Email:** 📧 contact@amanarchitects.com
*   **WhatsApp:** 📱 +91 9876543210
*   **Location:** 📍 Lucknow, Uttar Pradesh, India

---

## License

This project is licensed under the MIT License.
```