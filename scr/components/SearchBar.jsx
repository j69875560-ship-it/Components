import React from "react";

// Controlled component: value and onChange handler both passed from parent (App)
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-wrapper">
          <svg
            className="search-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search projects by title, description, or category..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => onSearchChange("")}>
              ✕
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
