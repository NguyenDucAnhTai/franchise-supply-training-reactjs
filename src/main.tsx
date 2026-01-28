import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoute from './routes/admin/MainRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>,
)
