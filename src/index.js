import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster, toast } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        style:{
          background: "rgb(51 65 85)",
          position: "top-center",
          reverseOrder:"true"
        }
      }}
    
    />

  </React.StrictMode>
);




reportWebVitals();
