import { createContext, useContext, useState } from 'react';
import { projects } from '../data';

const ProjectsContext = createContext();
export const useProjects = () => {
  return useContext(ProjectsContext);
};
export const ProjectsProvider = ({ children }) => {
  const myProjects = projects();
  const [modalProject, setModalProject] = useState(myProjects[0]);
  const setModal = (name) => {
    const filter = myProjects.filter((project) => project.name == name);
    setModalProject(filter[0]);
  };
  const value = {
    myProjects,
    modalProject,
    setModal,
  };
  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
