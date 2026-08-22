export type NavLink = {
  label: string;
  to: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail";
};

export type Technology = {
  name: string;
  shortName?: string;
  family: string;
  description: string;
  color: string;
  textColor: string;
  icon?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  cardTitle: string;
  category: string;
  subtitle: string;
  summary: string;
  image: string;
  cardImage?: string;
  links: ProjectLink[];
  tags: string[];
};

export const site = {
  name: "Diogo Andrade",
  role: "Développeur front-end Angular à Besançon",
  tagline: "Développeur front-end basé à Besançon",
  description:
    "Développeur front-end Angular basé à Besançon, spécialisé en interfaces accessibles, Vue.js et intégration d'API Node.js.",
  email: "contact@diogo-andrade.org",
  avatar: "/assets/img/android-chrome-192x192.png",
  ogImage: "/assets/img/android-chrome-512x512.png",
  cv: "/assets/CV/CV-Andrade-Diogo-HTML.pdf",
  url: "https://diogo-andrade.org",
};

export const navLinks: NavLink[] = [
  { label: "À propos", to: "/a-propos" },
  { label: "Technologies", to: "/technologies" },
  { label: "Projets", to: "/#projects" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Accueil", to: "/" },
  ...navLinks,
];

export const legalLinks: NavLink[] = [
  { label: "Mentions légales", to: "/mentions-legales" },
  {
    label: "Politique de confidentialité",
    to: "/politique-de-confidentialite",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diogo-andrade-3874b0305",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/Diogo444", icon: "github" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const homeTechnologies: Technology[] = [
  {
    name: "Tailwind CSS",
    family: "UI",
    description: "",
    color: "var(--tech-tailwind)",
    textColor: "var(--color-black)",
  },
  {
    name: "JavaScript",
    family: "Langage",
    description: "",
    color: "var(--tech-javascript)",
    textColor: "var(--color-black)",
  },
  {
    name: "Angular",
    family: "Frontend",
    description: "",
    color: "var(--tech-angular)",
    textColor: "var(--color-white)",
  },
  {
    name: "Vue.js",
    family: "Frontend",
    description: "",
    color: "var(--tech-vue)",
    textColor: "var(--color-black)",
  },
  {
    name: "Node.js",
    family: "Backend",
    description: "",
    color: "var(--tech-node)",
    textColor: "var(--color-black)",
  },
  {
    name: "NestJS",
    family: "Backend",
    description: "",
    color: "var(--tech-nest)",
    textColor: "var(--color-white)",
  },
  {
    name: "Symfony",
    family: "Backend",
    description: "",
    color: "var(--tech-symfony)",
    textColor: "var(--color-white)",
  },
  {
    name: "Docker",
    family: "Déploiement",
    description: "",
    color: "var(--tech-docker)",
    textColor: "var(--color-black)",
  },
  {
    name: "Elasticsearch",
    family: "Recherche",
    description: "",
    color: "var(--tech-elasticsearch)",
    textColor: "var(--color-white)",
  },
];

export const technologies: Technology[] = [
  {
    name: "Angular",
    family: "Framework principal",
    description:
      "Framework TypeScript complet pour applications d'entreprise. J'utilise les standalone components, les signaux, et l'injection de dépendances pour créer des architectures modulaires et testables.",
    color: "var(--tech-angular-dark)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/angular.svg",
  },
  {
    name: "Vue.js 3",
    shortName: "Vue.js",
    family: "Framework progressif",
    description:
      "Framework progressif idéal pour les projets de toutes tailles. La Composition API offre une excellente réutilisabilité du code et une intégration parfaite avec TypeScript.",
    color: "var(--tech-vue)",
    textColor: "var(--color-black)",
    icon: "/assets/SVG/VueJS.svg",
  },
  {
    name: "Tailwind CSS",
    family: "Framework CSS utility-first",
    description:
      "Approche utility-first pour un styling rapide et cohérent. Le système de design tokens et le mode dark natif permettent de créer des interfaces accessibles et personnalisables.",
    color: "var(--tech-tailwind-dark)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    family: "Langage typé",
    description:
      "JavaScript avec typage statique pour un code plus robuste et maintenable. L'autocomplétion et la détection d'erreurs à la compilation améliorent la productivité.",
    color: "var(--tech-typescript)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/TS.svg",
  },
  {
    name: "NestJS",
    family: "Framework Node.js",
    description:
      "Framework Node.js inspiré d'Angular avec une architecture modulaire. Parfait pour créer des API REST robustes avec authentification JWT, validation et documentation Swagger.",
    color: "var(--tech-nest-dark)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/NestJS.svg",
  },
  {
    name: "Node.js",
    family: "Runtime JavaScript",
    description:
      "Runtime JavaScript côté serveur pour des applications performantes et évolutives. Idéal pour les API, les serveurs temps réel et les outils de build.",
    color: "var(--tech-node-dark)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/nodejs.svg",
  },
  {
    name: "Symfony",
    family: "Framework PHP",
    description:
      "Framework PHP robuste pour les applications web complexes. Architecture MVC, ORM Doctrine, et écosystème mature pour les projets d'entreprise.",
    color: "var(--tech-symfony)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/symfony.svg",
  },
  {
    name: "Elasticsearch",
    family: "Moteur de recherche",
    description:
      "Moteur de recherche distribué pour l'indexation et la recherche full-text. Parfait pour implémenter des fonctionnalités de recherche avancée.",
    color: "var(--tech-elasticsearch)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/elasticsearch.svg",
  },
  {
    name: "Docker",
    family: "Conteneurisation",
    description:
      "Conteneurisation des applications pour des déploiements reproductibles. Docker Compose pour orchestrer plusieurs services.",
    color: "var(--tech-docker-dark)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/docker.svg",
  },
  {
    name: "Caddy",
    family: "Serveur web",
    description:
      "Serveur web moderne avec gestion automatique des certificats SSL Let's Encrypt. Configuration simple et reverse proxy intégré.",
    color: "var(--tech-caddy)",
    textColor: "var(--color-white)",
    icon: "/assets/SVG/Caddy.svg",
  },
];

export const projects: Project[] = [
  {
    slug: "ginku",
    title: "Ginku — Consulter les transports de Besançon sur le Web et Android",
    cardTitle: "Ginku — Transports à Besançon",
    category: "Projet personnel",
    subtitle:
      "Une application Vue.js disponible sur le Web et Android pour consulter les informations du réseau Ginko",
    summary:
      "Une application Vue.js et Android permettant de consulter les horaires, les arrêts proches et les informations du réseau de transport de Besançon.",
    image: "/projets/ginku/accueil-favoris.png",
    cardImage: "/assets/img/project-ginku.webp",
    tags: ["Vue.js", "Node.js", "Capacitor", "Docker"],
    links: [
      {
        label: "Ouvrir l’application",
        href: "https://ginku.diogo-andrade.org",
        primary: true,
      },
      {
        label: "Télécharger l’application Android",
        href: "https://github.com/Diogo444/Ginku/releases/latest",
      },
      { label: "Consulter le code source", href: "https://github.com/Diogo444/Ginku" },
    ],
  },
  {
    slug: "coursfinder",
    title: "CoursFinder : découvrir Elasticsearch avec mes documents de cours",
    cardTitle: "CoursFinder — Projet Elasticsearch",
    category: "Projet expérimental",
    subtitle:
      "Un prototype local pour comprendre l’indexation de documents Word et la recherche plein texte",
    summary:
      "Projet expérimental créé pour découvrir Elasticsearch : extraction de cours Word, indexation de leur contenu et recherche plein texte depuis une interface Vue.js.",
    image: "/assets/img/project-coursfinder.png",
    tags: ["Elasticsearch", "Vue.js", "Node.js", "Mammoth", "Tailwind CSS", "Docker"],
    links: [
      { label: "Consulter le code source", href: "https://github.com/Diogo444/CoursFinder" },
    ],
  },
  {
    slug: "miam-dv",
    title: "Miam DV — Consulter les menus de l’internat plus simplement",
    cardTitle: "Miam DV — Menus accessibles",
    category: "Projet personnel",
    subtitle:
      "Une application Angular pour consulter et administrer les menus d’un internat",
    summary:
      "Une application Angular et NestJS conçue pour consulter et administrer les menus d’un internat en tenant compte de l’accessibilité.",
    image: "/assets/img/project-miam-dv.webp",
    tags: ["Angular", "NestJS", "MySQL", "Accessibilité"],
    links: [
      {
        label: "Voir l’application",
        href: "https://miamdv.diogo-andrade.org/",
        primary: true,
      },
      { label: "Consulter le code source", href: "https://github.com/Diogo444/Miam-DV" },
    ],
  },
  {
    slug: "qrela",
    title: "Qrela : créer un QR code gratuitement et sans inscription",
    cardTitle: "Qrela — Générateur de QR code",
    category: "Outil web",
    subtitle:
      "Un générateur personnalisable qui fonctionne directement dans le navigateur, sans compte",
    summary:
      "Générateur de QR code gratuit et personnalisable développé en JavaScript vanilla. Création locale, sans inscription, avec export PNG ou SVG.",
    image: "/assets/img/project-qrela.webp",
    tags: ["JavaScript", "Vite", "Tailwind CSS", "qr-code-styling", "Docker"],
    links: [
      {
        label: "Voir la démonstration",
        href: "https://qrela.diogo-andrade.org/",
        primary: true,
      },
      { label: "Consulter le code source", href: "https://github.com/Diogo444/Qrela" },
    ],
  },
];
