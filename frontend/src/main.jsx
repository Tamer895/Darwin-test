import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "./input.css"
import "./media/fonts/font/stylesheet.css"

import './utils/translator/i18n.js';
import { Provider } from 'react-redux';
import { HelmetProvider } from "react-helmet-async";
import store from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
  </React.StrictMode>,
)
