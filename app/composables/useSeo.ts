import { projects, site, socialLinks, type Project } from "~/data/portfolio";

type MaybeGetter<T> = T | (() => T);

type PageSeoInput = {
  title: MaybeGetter<string>;
  description: MaybeGetter<string>;
  path?: MaybeGetter<string>;
  image?: MaybeGetter<string>;
  type?: MaybeGetter<"website" | "article" | "profile">;
  robots?: MaybeGetter<string>;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const resolveValue = <T>(value: MaybeGetter<T>): T =>
  typeof value === "function" ? (value as () => T)() : value;

export const absoluteSiteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const [pathAndQuery, hash] = normalizedPath.split("#", 2);
  const [pathname, query] = pathAndQuery.split("?", 2);
  const hasFileExtension = /\/[^/]+\.[^/]+$/.test(pathname);
  const publicPath =
    pathname !== "/" && !pathname.endsWith("/") && !hasFileExtension
      ? `${pathname}/`
      : pathname;

  return `${site.url}${publicPath}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
};

const absoluteImageUrl = (path?: string) => absoluteSiteUrl(path || site.ogImage);

export const usePageSeo = (seo: PageSeoInput) => {
  const route = useRoute();

  const getPath = () => (seo.path ? resolveValue(seo.path) : route.path);
  const getTitle = () => resolveValue(seo.title);
  const getDescription = () => resolveValue(seo.description);
  const getImage = () => absoluteImageUrl(seo.image ? resolveValue(seo.image) : site.ogImage);
  const getCanonical = () => absoluteSiteUrl(getPath());
  const getType = () => (seo.type ? resolveValue(seo.type) : "website");
  const getRobots = () => (seo.robots ? resolveValue(seo.robots) : "index,follow");

  useSeoMeta({
    title: getTitle,
    description: getDescription,
    robots: getRobots,
    ogTitle: getTitle,
    ogDescription: getDescription,
    ogType: getType,
    ogUrl: getCanonical,
    ogImage: getImage,
    twitterTitle: getTitle,
    twitterDescription: getDescription,
    twitterCard: "summary",
    twitterImage: getImage,
  });

  useHead(() => ({
    link: [{ rel: "canonical", href: getCanonical() }],
  }));
};

export const useJsonLd = (
  id: string,
  data: MaybeGetter<Record<string, unknown> | Record<string, unknown>[]>,
) => {
  useHead(() => ({
    script: [
      {
        id,
        type: "application/ld+json",
        innerHTML: JSON.stringify(resolveValue(data)),
      },
    ],
  }));
};

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteSiteUrl(item.path),
  })),
});

export const createProjectJsonLd = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": absoluteSiteUrl(`/projects/${project.slug}#project`),
  name: project.cardTitle,
  headline: project.title,
  description: project.summary,
  image: absoluteImageUrl(project.image),
  url: absoluteSiteUrl(`/projects/${project.slug}`),
  creator: {
    "@type": "Person",
    "@id": absoluteSiteUrl("/#person"),
    name: site.name,
  },
  keywords: project.tags.join(", "),
  sameAs: project.links.map((link) => link.href),
});

export const createSiteJsonLd = () => [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteSiteUrl("/#website"),
    name: site.name,
    alternateName: [
      `${site.name} Portfolio`,
      `${site.name} Développeur Web`,
      "diogo-andrade.org",
    ],
    url: absoluteSiteUrl("/"),
    inLanguage: "fr-FR",
    description: site.description,
    publisher: {
      "@id": absoluteSiteUrl("/#person"),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteSiteUrl("/#person"),
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    image: absoluteImageUrl(site.avatar),
    email: site.email,
    logo: {
      "@type": "ImageObject",
      url: absoluteImageUrl(site.ogImage),
    },
    sameAs: socialLinks
      .filter((link) => link.icon !== "mail")
      .map((link) => link.href),
    knowsAbout: [
      "Angular",
      "Vue.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Accessibilité numérique",
      "Docker",
    ],
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.cardTitle,
      url: absoluteSiteUrl(`/projects/${project.slug}`),
    })),
  },
];
