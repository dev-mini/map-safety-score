import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const SUCCESS_URL = import.meta.env.VITE_AUTH0_SUCCESS_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{ redirect_uri: SUCCESS_URL }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
