import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projectsData';

function Projects() {
  return (
   <div className="projects">
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>


  );
}

export default Projects;
