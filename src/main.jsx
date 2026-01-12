import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'

import './index.css'
import App from './App.jsx'
import Creativity from './Creativity.jsx'
import Rationality from './Rationality.jsx'
import Nature from './Nature.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creativity" element={<Creativity />} />
        <Route path="/rationality" element={<Rationality />} />
        <Route path="/nature" element={<Nature />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
