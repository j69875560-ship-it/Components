import React from "react";

// Pure presentational component: receives project data and delete callback via props
const ProjectCard = ({ project, onDelete }) => {
  return (
    <article className="project-card">
      <div className="card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          onError={(e) => {
            // Fallback if external image fails to load
            e.target.src =
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop";
          }}
        />
        <span className="card-category">{project.category}</span>
        <button
          className="btn-delete"
          onClick={() => onDelete(project.id)}
          title="Delete project"
        >
          🗑
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <div className="card-footer">
          <span className="card-date">{project.date}</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
