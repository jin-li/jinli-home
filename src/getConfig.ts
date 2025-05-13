import config from './config/config.yml';
import i18n from './i18n';

export const getConfig = () => {
  const currentLanguage = i18n.language || 'en'; // Default to 'en' if no language is set
  return config[currentLanguage];
};