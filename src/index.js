import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { CategoriesProvider, TransactionProvider } from 'context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesProvider>
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </CategoriesProvider>
  </React.StrictMode>
);
