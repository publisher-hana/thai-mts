import { HashRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <Router>
      <App />
    </Router>
)
