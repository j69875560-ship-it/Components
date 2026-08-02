import React from "react";
import ProjectCard from "./ProjectCard";

// Receives filtered projects array and delete handler from App
const ProjectList = ({ projects, onDeleteProject, searchTerm }) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          {searchTerm && (
            <p className="results-info">
              Showing {projects.length} result{projects.length !== 1 ? "s" : ""}{" "}
              for "{searchTerm}"
            </p>
          )}
        </div>

        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search or add a new project.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={onDeleteProject}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
