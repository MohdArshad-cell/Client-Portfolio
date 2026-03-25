// Define Interfaces so TypeScript doesn't lose its mind
export interface SiteConfigType {
  name: string;
  tagline: string;
  email: string;
  whatsapp: string;
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
  },
  {
    id: 2,
    title: "Industrial Loft",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
  },
  {
    id: 3,
    title: "Skyline Corporate",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    id: 4,
    title: "Minimalist Retreat",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1518005020951-ecc8493662cf?q=80&w=1992",
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