import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import './index.css'  
import './themes.css'
import './button.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Hero />
      <App />
      <Footer />  
  </StrictMode>,
)
