import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import { ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Auth0Provider
      domain="dev-cuxlafgmh6xr0r12.us.auth0.com"
      clientId="cWzHeKYm9Ei9Me63KoQVVR10AW0HDWOm"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >

      <App />
      <ToastContainer/>

    </Auth0Provider>
  </React.StrictMode>
);




reportWebVitals();
