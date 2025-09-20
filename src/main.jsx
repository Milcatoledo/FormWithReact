import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './styles/inputForm.css'
import './styles/buttonSocialForm.css'
import './styles/contentForm.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
