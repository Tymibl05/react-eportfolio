import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProjectsProvider } from './contexts/ProjectContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>
);
