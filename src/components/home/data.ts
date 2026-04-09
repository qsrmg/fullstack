export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroSlide = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  comingSoon?: boolean;
};

export type NearbySeller = {
  name: string;
  image: string;
  sqlBadge: string;
  distance: string;
};

export type Product = {
  name: string;
  image: string;
  price: string;
  seller: string;
  sqlLevel: string;
  deliveryTime: string;
};

export type ProductCategory = {
  category: string;
  products: Product[];
};

export type FranchiseOpportunity = {
  title: string;
  subtitle: string;
  investmentRange: string;
  expectedIncome: string;
};

export type Department = {
  code: "PSS" | "EDR" | "EMO";
  title: string;
  description: string;
};

export type RoadmapItem = {
  title: string;
  description: string;
};

export type SqlVerificationLevel = {
  level: "Free" | "Basic" | "Silver" | "Gold" | "Platinum" | "VIP";
  benefits: string;
  trustScore: number;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Marketplace", href: "#categories" },
  { label: "Services", href: "#nearby-sellers" },
  { label: "Franchise", href: "#franchise" },
  { label: "Jobs (JPS)", href: "#popular-products" },
  { label: "Departments", href: "#departments" },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Global Franchise System",
    description:
      "Launch, operate, and scale high-trust franchise networks with AI-backed regional intelligence.",
  },
  {
    title: "E-commerce + Local Services Marketplace",
    description:
      "Discover products and book local services in one modern marketplace with verified providers.",
  },
  {
    title: "EHB Departments (PSS, EDR, EMO)",
    description:
      "Security, certification, and operations modules designed to power a global digital ecosystem.",
  },
  {
    title: "Future Technology (AI + Blockchain)",
    description:
      "Intelligent discovery, transparent trust signals, and scalable infrastructure for the next era.",
  },
];

export const sqlFilterLevels: SqlVerificationLevel["level"][] = [
  "Free",
  "Basic",
  "Silver",
  "Gold",
  "Platinum",
  "VIP",
];

export const serviceCategories: ServiceCategory[] = [
  { title: "GoSellr", description: "E-commerce Marketplace" },
  { title: "AI Service Marketplace", description: "AI-powered global services network" },
  { title: "Job Providing Service (JPS)", description: "Talent and opportunity marketplace" },
  { title: "Health Services", description: "Clinics, telehealth, and wellness providers" },
  { title: "Law Services", description: "Legal support and advisory services" },
  { title: "Education Services", description: "Learning, certifications, and skilling" },
  { title: "Global Shopping Mall", description: "Cross-border product ecosystem", comingSoon: true },
  { title: "EHB Tube", description: "Video commerce and media platform", comingSoon: true },
  { title: "EHB Aid", description: "Community assistance and support services", comingSoon: true },
];

export const nearbySellers: NearbySeller[] = [
  {
    name: "Nova Mart Express",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1200&q=80",
    sqlBadge: "SQL Gold Verified",
    distance: "1.2 km away",
  },
  {
    name: "CityCare Pharmacy",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    sqlBadge: "SQL Platinum Verified",
    distance: "2.8 km away",
  },
  {
    name: "SmartFix Services",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    sqlBadge: "SQL Silver Verified",
    distance: "4.1 km away",
  },
  {
    name: "Fresh Basket Hub",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    sqlBadge: "SQL Basic Verified",
    distance: "5.3 km away",
  },
];

export const popularProductCategories: ProductCategory[] = [
  {
    category: "Frequently Used Items",
    products: [
      {
        name: "Smart Home Hub",
        image:
          "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
        price: "$149",
        seller: "GoSellr Prime",
        sqlLevel: "Gold",
        deliveryTime: "2-3 days",
      },
      {
        name: "Portable Health Tracker",
        image:
          "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=1200&q=80",
        price: "$59",
        seller: "Health Hub",
        sqlLevel: "Basic",
        deliveryTime: "3-4 days",
      },
    ],
  },
  {
    category: "Grocery Items",
    products: [
      {
        name: "Premium Grocery Pack",
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
        price: "$39",
        seller: "Fresh Basket",
        sqlLevel: "Silver",
        deliveryTime: "Same day",
      },
      {
        name: "Organic Essentials Box",
        image:
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
        price: "$44",
        seller: "Nature Cart",
        sqlLevel: "Gold",
        deliveryTime: "Next day",
      },
    ],
  },
  {
    category: "New Market Products",
    products: [
      {
        name: "AI Voice Assistant",
        image:
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
        price: "$89",
        seller: "Neura Systems",
        sqlLevel: "Platinum",
        deliveryTime: "1-2 days",
      },
      {
        name: "Blockchain Security Key",
        image:
          "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80",
        price: "$199",
        seller: "SecureChain",
        sqlLevel: "VIP",
        deliveryTime: "2 days",
      },
    ],
  },
];

export const franchiseOpportunities: FranchiseOpportunity[] = [
  {
    title: "Sub Franchise",
    subtitle: "Small area franchise",
    investmentRange: "$10,000 - $25,000",
    expectedIncome: "$2,000 - $6,000 / month",
  },
  {
    title: "Master Franchise",
    subtitle: "City level franchise",
    investmentRange: "$50,000 - $120,000",
    expectedIncome: "$12,000 - $35,000 / month",
  },
  {
    title: "Corporate Franchise",
    subtitle: "Country/state level franchise",
    investmentRange: "$250,000+",
    expectedIncome: "$60,000+ / month",
  },
];

export const departments: Department[] = [
  {
    code: "PSS",
    title: "Personal Security System",
    description: "KYC and verification system for trusted identity and account confidence.",
  },
  {
    code: "EDR",
    title: "Exam Decision Registration",
    description: "Skills testing and certification layer for jobs, hiring, and professional trust.",
  },
  {
    code: "EMO",
    title: "Easy Management Office",
    description: "Unified business management system for operations, workflow, and performance.",
  },
];

export const roadmapItems: RoadmapItem[] = [
  { title: "GoSellr Launch", description: "Launch the core e-commerce marketplace module." },
  { title: "AI Marketplace", description: "Expand into AI service listing and booking." },
  {
    title: "Global Franchise Expansion",
    description: "Scale franchise partners across countries and regions.",
  },
  {
    title: "Blockchain Integration",
    description: "Introduce transparent trust and validation records.",
  },
  {
    title: "Validator System",
    description: "Deploy quality and verification validators for ecosystem trust.",
  },
  {
    title: "Global Payment System",
    description: "Enable unified cross-border payment infrastructure.",
  },
];

export const sqlVerificationLevels: SqlVerificationLevel[] = [
  { level: "Free", benefits: "Starter profile visibility and basic discovery", trustScore: 45 },
  { level: "Basic", benefits: "Identity checks and improved listing confidence", trustScore: 58 },
  { level: "Silver", benefits: "Business validation and better search presence", trustScore: 71 },
  { level: "Gold", benefits: "Priority visibility and trusted seller badge", trustScore: 83 },
  { level: "Platinum", benefits: "Advanced checks and premium marketplace access", trustScore: 92 },
  { level: "VIP", benefits: "Top-tier verification, reputation, and strategic support", trustScore: 99 },
];
