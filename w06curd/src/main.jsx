import React from 'react'
import ReactDOM from 'react-dom/client'
import App_xx from './App_xx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App_xx />
  </QueryClientProvider>
)
