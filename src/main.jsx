import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RenderName from './RenderName.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderName />
  </StrictMode>,
)
