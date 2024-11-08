import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './route.tsx';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <RecoilRoot>
    <Router />
  </RecoilRoot>
  </BrowserRouter>
);
