// main.jsx or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import axios from "axios";

// Set base URL for axios
axios.defaults.baseURL = "http://localhost:7000/api/v1";

// Ensure the DOM element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No root element found with id 'root'");
}

// Render the app
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
