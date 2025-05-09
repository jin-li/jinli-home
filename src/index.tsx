import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <React.StrictMode>
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
    </React.StrictMode>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
