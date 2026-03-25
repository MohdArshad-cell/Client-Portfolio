// Define Interfaces so TypeScript doesn't lose its mind
export interface SiteConfigType {
  name: string;
  tagline: string;
  email: string;
  whatsapp: string;
  location: string; // Ye line add kar
}

export interface NavLinkType {
  name: string;
  href: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
}

export const SiteConfig: SiteConfigType = {
  name: "Aman Architects",
  tagline: "Designing Spaces, Defining Lifestyles.",
  email: "aman@example.com",
  whatsapp: "+919876543210",
  location: "Lucknow, Uttar Pradesh",
};

export const NavLinks: NavLinkType[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];


export const ProjectsData = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    year: "2024",
    location: "Lucknow, Uttar Pradesh",
    description: "A transparent residential masterpiece designed to blend indoor luxury with the surrounding landscape using high-performance glass and steel structures.",
    details: "The Glass Pavilion was a study in minimalism and structural transparency. Our team engineered a cantilevered roof system that allows for uninterrupted 360-degree views, effectively dissolving the boundary between the living space and the private gardens. High-emissivity glass was utilized to maintain thermal efficiency while maximizing natural light penetration."
  },
  {
    id: 2,
    title: "Industrial Loft",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
    year: "2023",
    location: "Noida, NCR",
    description: "Revitalizing a historic warehouse into a modern, open-concept living space that celebrates raw materials and industrial heritage.",
    details: "This adaptive reuse project focused on the honest expression of materials. We exposed the original brickwork and structural concrete, contrasting them with polished steel finishes and warm walnut wood. The layout features a central mezzanine that serves as a private studio, overlooking a high-ceiling gallery designed to showcase the client's extensive art collection."
  },
  {
    id: 3,
    title: "Skyline Corporate",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    year: "2024",
    location: "Gurugram, Haryana",
    description: "A high-concurrency corporate headquarters featuring a kinetic facade and optimized workflow environments for the digital era.",
    details: "Engineered for a leading tech firm, Skyline Corporate integrates sustainable architecture with cutting-edge workplace design. The building utilizes a modular floor plan to allow for maximum flexibility as the company scales. A signature feature is the central atrium, which acts as a 'thermal chimney,' naturally ventilating the office floors and reducing energy consumption by 30%."
  },
  {
    id: 4,
    title: "Minimalist Retreat",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070",
    year: "2022",
    location: "Rishikesh, Uttarakhand",
    description: "A serene getaway designed around silence and shadow, focusing on local stone and traditional craftsmanship.",
    details: "The Minimalist Retreat was designed as a sanctuary for mental clarity. We utilized locally sourced granite and treated timber to create a structure that feels as though it emerged from the terrain. The design prioritizes the 'Ma' (negative space) concept, using carefully placed apertures to frame the surrounding mountain peaks and create a shifting play of light throughout the day."
  },
];

export const AboutData = {
  title: "Design with Purpose",
  description: "At Aman Architects, we believe that architecture is not just about building structures; it's about crafting environments that inspire.",
  // Isko object hi rakho, array nahi!
  stats: {
    experience: 10,
    projects: 50,
  },
  image: "/hero-arch.jpg", 
};

// Icons ke liye casing check kar lo yahan
export const SocialLinks = [
  { platform: "LinkedIn", url: "#" },
  { platform: "Instagram", url: "#" },
  { platform: "GitHub", url: "#" },
];

export const ServicesData = [
  {
    title: "Architectural Planning",
    description: "Comprehensive blueprints and structural planning for modern living spaces.",
  },
  {
    title: "Interior Design",
    description: "Curating textures, furniture, and lighting to create soul-stirring interiors.",
  },
  {
    title: "3D Visualization",
    description: "Photo-realistic renders to help you visualize your dream before it's built.",
  },
  {
    title: "Project Management",
    description: "End-to-end site supervision ensuring the design is executed to perfection.",
  }
];

export const ContactData = {
  address: "Lucknow, Uttar Pradesh, India",
  phone: "+91 98765 43210",
  email: "contact@amanarchitects.com",
};