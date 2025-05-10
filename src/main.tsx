import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      {/* Helmet for managing head elements */}
      <Helmet>
        <html lang="zh" />
        <title>锦李本鲤</title>
        <meta name="description" content="锦李本鲤的个人主页" />
        <meta name="keywords" content="锦李本鲤,个人主页" />
        <meta name="author" content="锦李本鲤" />
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="logo192.png" />
      </Helmet>
      <App />
    </StrictMode>
  </HelmetProvider>
)
