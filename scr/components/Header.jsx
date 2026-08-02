import React from "react";

// Receives projectCount via props to display dynamic stats
const Header = ({ projectCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Creative Portfolio</h1>
        <p className="header-subtitle">
          Showcasing innovative projects and digital experiences
        </p>
        <div className="header-stats">
          <span className="stat-badge">{projectCount} Projects</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
