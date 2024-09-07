import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeWrapper from './ThemeWrapper.tsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <ThemeWrapper>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeWrapper>
)
