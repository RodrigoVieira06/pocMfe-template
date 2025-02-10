import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import TemplateApp from './TemplateApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemplateApp />
  </StrictMode>,
)
