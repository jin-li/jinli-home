export interface Social {
  label: string;
  name: string;
  icon: string;
  tip: string;
  url: string;
}

export interface Link {
  label: string;
  name: string;
  icon: string;
  url: string;
}

export interface SiteConfig {
  title: string;
  author: string;
  startYear: string;
  description: string;
  keywords: string[];
  favicon: string;
  appleTouchIcon: string;
  background: string;
  logoUrl: string;
  slogan: string;
  hello: string;
}

export interface AppConfig {
  site: SiteConfig;
  socials: Social[];
  links: Link[];
}
