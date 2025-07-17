import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './contextApi/ContextApi.jsx';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <ContextProvider>
     <QueryClientProvider client={queryClient}>
        <StrictMode>
             <App />
        </StrictMode>
     </QueryClientProvider>
  </ContextProvider>
  
)
