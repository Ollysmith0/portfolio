import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App2 from './App2';
import SkillPage from './Pages/Skill.tsx';
import ProjectPage from './Pages/Project.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App2 />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
