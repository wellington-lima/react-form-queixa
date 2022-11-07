import React from 'react';
import ReactDOM from 'react-dom/client';
import { FichaCadastro } from './pages/FichaCadastro';
import { FormularioProvider } from './hooks/FormularioContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FormularioProvider>
      <FichaCadastro />
    </FormularioProvider>
  </React.StrictMode>
)
