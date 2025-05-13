import './i18n.ts';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getConfig } from './getConfig.ts';

const config = getConfig();

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      {/* Helmet for managing head elements */}
      <Helmet>
        <html lang="zh" />
        <title>{config.site.title}</title>
        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={config.site.keywords} />
        <meta name="author" content={config.site.author} />
        <link id="favicon" rel="icon" href={config.site.favicon} type="image/x-icon" />
        <link rel="apple-touch-icon" href={config.site.apple_touch_icon} />
      </Helmet>
      <App />
    </StrictMode>
  </HelmetProvider>
)

