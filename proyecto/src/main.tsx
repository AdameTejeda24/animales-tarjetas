import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import ListaAnimales from './components/ListaAnimales';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Header></Header>
  <ListaAnimales />
  </StrictMode>,
)
