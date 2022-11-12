import React from 'react';
import ReactDOM from 'react-dom/client';
import { FichaCadastro } from './pages/FichaCadastro';
import { FormularioProvider } from './hooks/FormularioContext';
import { ToastLoadingProvider } from './hooks/toastLoading';
import { ToastProvider } from './hooks/toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FormularioProvider>
      <ToastLoadingProvider>
        <ToastProvider>
          <FichaCadastro />
        </ToastProvider>
      </ToastLoadingProvider>
    </FormularioProvider>
  </React.StrictMode>
)
