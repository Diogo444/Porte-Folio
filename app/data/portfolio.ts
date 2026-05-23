export type NavLink = {
  label: string
  to: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'mail'
}

export type Technology = {
  name: string
  shortName?: string
  family: string
  description: string
  color: string
  textColor: string
  icon?: string
}

export type ProjectLink = {
  label: string
  href: string
  primary?: boolean
}

export type Project = {
  slug: string
  title: string
  cardTitle: string
  category: string
  subtitle: string
  summary: string
  image: string
  links: ProjectLink[]
  tags: string[]
}

export const site = {
  name: 'Diogo Andrade',
  role: 'Développeur Front-end',
  tagline: 'Développeur Front-end · Angular, Vue.js & APIs NestJS/Node',
  email: 'da7822000@gmail.com',
  avatar: '/assets/img/android-chrome-192x192.png',
  cv: '/assets/CV/CV - Andrade Diogo.pdf',
  url: 'https://diogo-andrade.org',
}

export const navLinks: NavLink[] = [
  { label: 'À propos', to: '/a-propos' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Projets', to: '/#projects' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks: NavLink[] = [
  { label: 'Accueil', to: '/' },
  ...navLinks,
]

export const legalLinks: NavLink[] = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/politique-de-confidentialite' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diogo-andrade-3874b0305',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/Diogo444', icon: 'github' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
]

export const homeTechnologies: Technology[] = [
  { name: 'Tailwind CSS', family: 'UI', description: '', color: '#06B6D4', textColor: '#000000' },
  { name: 'JavaScript', family: 'Langage', description: '', color: '#F7DF1E', textColor: '#000000' },
  { name: 'Angular', family: 'Frontend', description: '', color: '#DD0031', textColor: '#ffffff' },
  { name: 'Vue.js', family: 'Frontend', description: '', color: '#4FC08D', textColor: '#000000' },
  { name: 'Node.js', family: 'Backend', description: '', color: '#5FA04E', textColor: '#000000' },
  { name: 'NestJS', family: 'Backend', description: '', color: '#E0234E', textColor: '#ffffff' },
  { name: 'Symfony', family: 'Backend', description: '', color: '#000000', textColor: '#ffffff' },
  { name: 'Docker', family: 'Déploiement', description: '', color: '#2496ED', textColor: '#000000' },
  { name: 'Elasticsearch', family: 'Recherche', description: '', color: '#005571', textColor: '#ffffff' },
]

export const technologies: Technology[] = [
  {
    name: 'Angular',
    family: 'Framework principal',
    description:
      "Framework TypeScript complet pour applications d'entreprise. J'utilise les standalone components, les signaux, et l'injection de dépendances pour créer des architectures modulaires et testables.",
    color: '#7D0019',
    textColor: '#ffffff',
    icon: '/assets/SVG/angular.svg',
  },
  {
    name: 'Vue.js 3',
    shortName: 'Vue.js',
    family: 'Framework progressif',
    description:
      "Framework progressif idéal pour les projets de toutes tailles. La Composition API offre une excellente réutilisabilité du code et une intégration parfaite avec TypeScript.",
    color: '#4FC08D',
    textColor: '#000000',
    icon: '/assets/SVG/VueJS.svg',
  },
  {
    name: 'Tailwind CSS',
    family: 'Framework CSS utility-first',
    description:
      'Approche utility-first pour un styling rapide et cohérent. Le système de design tokens et le mode dark natif permettent de créer des interfaces accessibles et personnalisables.',
    color: '#025B7F',
    textColor: '#ffffff',
    icon: '/assets/SVG/tailwindcss.svg',
  },
  {
    name: 'TypeScript',
    family: 'Langage typé',
    description:
      "JavaScript avec typage statique pour un code plus robuste et maintenable. L'autocomplétion et la détection d'erreurs à la compilation améliorent la productivité.",
    color: '#3178C6',
    textColor: '#ffffff',
    icon: '/assets/SVG/TS.svg',
  },
  {
    name: 'NestJS',
    family: 'Framework Node.js',
    description:
      "Framework Node.js inspiré d'Angular avec une architecture modulaire. Parfait pour créer des APIs REST robustes avec authentification JWT, validation, et documentation Swagger.",
    color: '#701827',
    textColor: '#ffffff',
    icon: '/assets/SVG/NestJS.svg',
  },
  {
    name: 'Node.js',
    family: 'Runtime JavaScript',
    description:
      'Runtime JavaScript côté serveur pour des applications performantes et évolutives. Idéal pour les APIs, les serveurs temps réel, et les outils de build.',
    color: '#2D4A25',
    textColor: '#ffffff',
    icon: '/assets/SVG/nodejs.svg',
  },
  {
    name: 'Symfony',
    family: 'Framework PHP',
    description:
      "Framework PHP robuste pour les applications web complexes. Architecture MVC, ORM Doctrine, et écosystème mature pour les projets d'entreprise.",
    color: '#000000',
    textColor: '#ffffff',
    icon: '/assets/SVG/symfony.svg',
  },
  {
    name: 'Elasticsearch',
    family: 'Moteur de recherche',
    description:
      "Moteur de recherche distribué pour l'indexation et la recherche full-text. Parfait pour implémenter des fonctionnalités de recherche avancée.",
    color: '#005571',
    textColor: '#ffffff',
    icon: '/assets/SVG/elasticsearch.svg',
  },
  {
    name: 'Docker',
    family: 'Conteneurisation',
    description:
      'Conteneurisation des applications pour des déploiements reproductibles. Docker Compose pour orchestrer plusieurs services.',
    color: '#084A7B',
    textColor: '#ffffff',
    icon: '/assets/SVG/docker.svg',
  },
  {
    name: 'Caddy',
    family: 'Serveur web',
    description:
      "Serveur web moderne avec gestion automatique des certificats SSL Let's Encrypt. Configuration simple et reverse proxy intégré.",
    color: '#084A7F',
    textColor: '#ffffff',
    icon: '/assets/SVG/Caddy.svg',
  },
]

export const projects: Project[] = [
  {
    slug: 'ginku',
    title: 'Ginku · Application de transports accessible',
    cardTitle: 'Ginku · App transports Besançon',
    category: 'Projet Personnel',
    subtitle: 'Une alternative accessible pour consulter les horaires de bus et tramway à Besançon',
    summary:
      "Interface Vue.js pour horaires temps réel et itinéraires, backend Node.js et intégration API Ginko. Déploiement containerisé.",
    image: '/assets/img/project ginku.webp',
    tags: ['Vue.js 3', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Docker', 'Caddy'],
    links: [
      { label: 'Voir la démo', href: 'https://ginku.diogo-andrade.org', primary: true },
      { label: 'Code source', href: 'https://github.com/Diogo444/Ginku' },
    ],
  },
  {
    slug: 'coursfinder',
    title: 'CoursFinder · Moteur de recherche pour mes cours',
    cardTitle: 'CoursFinder · Moteur de recherche pour mes cours',
    category: 'Projet Personnel',
    subtitle: 'Première expérience concrète avec Elasticsearch, Vue.js et Tailwind CSS',
    summary:
      'Première expérience avec Elasticsearch, Vue.js et Tailwind CSS. Indexation de mes cours et recherche par mots-clés via une interface simple et rapide.',
    image: '/assets/img/project coursFinder.png',
    tags: ['Vue.js', 'Tailwind CSS', 'Elasticsearch', 'JavaScript'],
    links: [{ label: 'Code source', href: 'https://github.com/Diogo444/CoursFinder' }],
  },
  {
    slug: 'miam-dv',
    title: 'Miam DV · Menu de la semaine accessible',
    cardTitle: 'Miam DV · Menu de la semaine',
    category: 'Projet Personnel',
    subtitle: "Une application pour consulter les menus de l'internat en format accessible",
    summary:
      "Application web affichant le menu de la semaine de l'internat, pensée pour être accessible aux jeunes malvoyants et non-voyants.",
    image: '/assets/img/project Miam DV.webp',
    tags: ['Angular', 'Tailwind CSS', 'TypeScript', 'NestJS', 'TypeORM', 'MySQL', 'Docker'],
    links: [{ label: 'Code source', href: 'https://github.com/Diogo444/Miam-DV' }],
  },
  {
    slug: 'qrela',
    title: 'Qrela · Générateur de QR code gratuit',
    cardTitle: 'Qrela · Générateur de QR code gratuit',
    category: 'Projet Produit',
    subtitle: 'Un outil Vite.js sans inscription, personnalisable, avec export PNG/SVG',
    summary:
      'Générateur de QR code gratuit, sans inscription, personnalisable et développé avec Vite.js.',
    image: '/assets/img/project qrela.webp',
    tags: ['Vite.js', 'JavaScript', 'Tailwind CSS', 'qr-code-styling'],
    links: [
      { label: 'Voir la démo', href: 'https://qrela.diogo-andrade.org/', primary: true },
      { label: 'Code source', href: 'https://github.com/Diogo444/Qrela' },
    ],
  },
]
