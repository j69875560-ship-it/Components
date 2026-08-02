import React, { useState } from "react";

// Local state manages form inputs; on submit, lifts data to parent via onAddProject prop
const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    "Web App",
    "Mobile App",
    "Full Stack",
    "UI/UX",
    "AI/ML",
    "Other",
  ];

  // Dynamic input handler using computed property names
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in at least the title and description.");
      return;
    }

    const newProject = {
      id: Date.now(), // simple unique id
      title: formData.title,
      description: formData.description,
      category: formData.category || "Other",
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
      date: new Date().toISOString().split("T")[0],
    };

    onAddProject(newProject); // lift state up to App

    // Reset and collapse form
    setFormData({ title: "", description: "", category: "", image: "" });
    setIsExpanded(false);
  };

  return (
    <section className="form-section">
      <div className="form-container">
        {!isExpanded ? (
          <button
            className="btn-toggle-form"
            onClick={() => setIsExpanded(true)}
          >
            <span>+</span> Add New Project
          </button>
        ) : (
          <div className="form-card">
            <div className="form-header">
              <h2>Add New Project</h2>
              <button
                className="btn-close"
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Project Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter project title"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the project..."
                  rows="3"
                  required
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setIsExpanded(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Add Project
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectForm;
