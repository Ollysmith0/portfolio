import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App2 from './App2';
import SkillPage from './Pages/Skill.tsx';
import ProjectPage from './Pages/Project.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
