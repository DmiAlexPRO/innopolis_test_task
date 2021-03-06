import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const app = (
    <BrowserRouter>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(app);

