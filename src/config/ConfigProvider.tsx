import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getConfig, normalizeLanguage } from './config';
import type { AppConfig } from './types';

interface ConfigContextValue {
  config: AppConfig;
  language: string;
}

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export const ConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  const language = normalizeLanguage(i18n.resolvedLanguage || i18n.language);
  const [config, setConfig] = useState<AppConfig>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let cancelled = false;

    getConfig(language)
      .then((loadedConfig) => {
        if (!cancelled) {
          setConfig(loadedConfig);
          setError(undefined);
        }
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError : new Error('Unable to load configuration.'));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  if (error) {
    return <p role="alert">Unable to load site configuration: {error.message}</p>;
  }

  if (!config) {
    return <p>Loading site configuration…</p>;
  }

  return (
    <ConfigContext.Provider value={{ config, language }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): ConfigContextValue => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used inside ConfigProvider.');
  }
  return context;
};
