import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Header, Hero, App, Footer } from './components/Index';
import './index.css';
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Hero />
      <App />
      <Footer />  
  </StrictMode>,
)
