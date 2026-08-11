import type { AppConfig } from './types';

const configCache = new Map<string, Promise<AppConfig>>();

export const normalizeLanguage = (language: string): string =>
  language.toLowerCase().split('-')[0] || 'en';

const configUrl = (directory: string, language: string): string =>
  `${import.meta.env.BASE_URL}${directory}/config.${language}.json`;

const isAppConfig = (value: unknown): value is AppConfig => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const config = value as Partial<AppConfig>;
  return Boolean(
    config.site &&
      typeof config.site === 'object' &&
      Array.isArray(config.socials) &&
      Array.isArray(config.links),
  );
};

const fetchConfig = async (url: string): Promise<AppConfig | undefined> => {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
    return undefined;
  }

  const config: unknown = await response.json();
  if (!isAppConfig(config)) {
    throw new Error(`Invalid configuration in ${url}`);
  }

  return config;
};

const loadConfig = async (language: string): Promise<AppConfig> => {
  const normalizedLanguage = normalizeLanguage(language);
  const candidates = [
    configUrl('config', normalizedLanguage),
    ...(normalizedLanguage === 'en' ? [] : [configUrl('config', 'en')]),
    configUrl('default-config', normalizedLanguage),
    ...(normalizedLanguage === 'en' ? [] : [configUrl('default-config', 'en')]),
  ];

  for (const url of candidates) {
    const config = await fetchConfig(url);
    if (config) {
      return config;
    }
  }

  throw new Error(`No configuration file found for language "${normalizedLanguage}".`);
};

export const getConfig = (language: string): Promise<AppConfig> => {
  const normalizedLanguage = normalizeLanguage(language);
  const cached = configCache.get(normalizedLanguage);
  if (cached) {
    return cached;
  }

  const request = loadConfig(normalizedLanguage).catch((error: unknown) => {
    configCache.delete(normalizedLanguage);
    throw error;
  });
  configCache.set(normalizedLanguage, request);
  return request;
};
