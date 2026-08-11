// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './i18n';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { ConfigProvider } from './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <React.StrictMode>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </HelmetProvider>
);
