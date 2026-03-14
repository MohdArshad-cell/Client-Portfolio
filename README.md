# Aman Architects

![Banner](https://socialify.git.ci/aman-architects/aman-architects/network?theme=Dark)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-454545?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/) [![Lenis](https://img.shields.io/badge/Lenis-1E1E1E?style=for-the-badge&logo=lenis&logoColor=white)](https://lenis.design/) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

## Executive Summary

This project implements a modern, visually engaging frontend portfolio website using the Next.js framework. It's engineered to showcase architectural projects with a focus on dynamic user experiences, leveraging advanced animation and scrolling techniques. The primary objective is to provide an immersive and professional online presence that effectively communicates the studio's design philosophy and capabilities.

The platform is designed to elevate the studio's brand perception by highlighting its achievements, such as **over 50 completed projects** and **10 years of industry experience**. The interactive design elements and curated project showcases aim to captivate potential clients and partners, driving engagement and facilitating new business opportunities.

## Architecture & Tech Stack

| Technology    | Version      | Key Responsibility                                        |
| :------------ | :----------- | :--------------------------------------------------------- |
| Node.js       | (runtime)    | JavaScript runtime environment for Next.js server-side rendering |
| Next.js       | (framework)  | React framework for server-side rendering, routing, and API routes |
| React         | (library)    | UI component library for building interactive interfaces     |
| TypeScript    | (language)   | Static typing for enhanced code quality and maintainability |
| Tailwind CSS  | (utility-first) | CSS framework for rapid, utility-first styling             |
| Framer Motion | (animation)  | Declarative animations and transitions for rich UX         |
| Lenis         | (scrolling)  | Implements smooth, performant scrolling experiences        |
| ESLint        | (linter)     | Enforces code style and identifies potential errors        |

## System Signatures: Deep Scan Analysis

The codebase reveals a sophisticated approach to frontend development, with several key components and functionalities designed to enhance user interaction and visual appeal:

*   **`Magnetic` Component:** Implements a magnetic effect on UI elements, creating an interactive and responsive feel as the user's mouse hovers over them. This likely uses event listeners to track mouse movement and apply subtle transformations.
*   **`handleMouseMove` (within `Hero` and `Magnetic`):** This function is central to the magnetic effect, capturing mouse coordinates to drive animations and positional changes of elements. It's crucial for creating dynamic visual feedback.
*   **`SmoothScroll` Component:** Integrates the `lenis` library to provide a significantly smoother and more fluid scrolling experience than native browser scrolling, enhancing the perceived quality of the website.
*   **`Navbar` (`handleScroll`):** This function likely manages the behavior of the navigation bar based on the user's scroll position, such as changing its appearance (e.g., background color, stickiness) for better usability.
*   **`ProjectCard` Component:** A reusable UI component designed to display individual architectural projects, encapsulating project details, images, and categories.
*   **`About`, `Projects`, `Contact`, `Services`, `Hero` Section Components:** These represent distinct, modular sections of the website, each responsible for rendering specific content and UI elements related to their respective domains.

## Directory Blueprint

```
.
├── next.config.ts             # Next.js configuration file
├── public/                    # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                   # App Router directory for routing and layout
│   │   ├── page.tsx           # Main page component (root route)
│   │   └── layout.tsx         # Root layout component for the entire application
│   ├── components/            # Reusable UI components
│   │   ├── Magnetic.tsx       # Component for magnetic effect interactions
│   │   ├── SmoothScroll.tsx   # Component for implementing Lenis smooth scrolling
│   │   ├── ProjectCard.tsx    # Component for displaying individual project details
│   │   └── Navbar.tsx         # Navigation bar component
│   ├── sections/              # Major page sections
│   │   ├── About.tsx          # About Us section component
│   │   ├── Projects.tsx       # Projects showcase section component
│   │   ├── Contact.tsx        # Contact information section component
│   │   ├── Services.tsx       # Services offered section component
│   │   └── Hero.tsx           # Hero/landing section component
│   └── constants/             # Global constants and configuration data
│       └── index.ts           # Exports for site configuration, nav links, project data, etc.
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore file
├── next-env.d.ts              # Next.js TypeScript declaration file
├── package.json               # Project metadata and dependencies
├── postcss.config.js          # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript compiler options
```

## Deployment & Operation

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    Use your preferred package manager:

    *   **npm:**
        ```bash
        npm install
        ```
    *   **Yarn:**
        ```bash
        yarn install
        ```
    *   **pnpm:**
        ```bash
        pnpm install
        ```

### Local Development

Start the development server to view the application locally:

*   **npm:**
    ```bash
    npm run dev
    ```
*   **Yarn:**
    ```bash
    yarn dev
    ```
*   **pnpm:**
    ```bash
    pnpm dev
    ```

This will typically start the server at `http://localhost:3000`.

### Production Build

To create an optimized production build:

*   **npm:**
    ```bash
    npm run build
    ```
*   **Yarn:**
    ```bash
    yarn build
    ```
*   **pnpm:**
    ```bash
    pnpm build
    ```

After building, you can start the production server:

*   **npm:**
    ```bash
    npm run start
    ```
*   **Yarn:**
    ```bash
    yarn start
    ```
*   **pnpm:**
    ```bash
    pnpm start
    ```

## Acknowledgements & Contact

*   **Built with:** Node.js, Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lenis.
*   **Studio:** Aman Architects

**Contact Us:**

📧 Email: `contact@amanarchitects.com`
📱 WhatsApp: `+919876543210`
📍 Location: Lucknow, Uttar Pradesh, India

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.