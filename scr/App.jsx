import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import "./App.css";

// Sample seed data so the landing page isn't empty on first load
const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time sales tracking and inventory management.",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    date: "2026-01-15",
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    description:
      "Full-stack travel reservation system with interactive maps, payment integration, and itinerary planning.",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
    date: "2026-02-20",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Machine learning powered application that generates marketing copy and blog posts using NLP.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    date: "2026-03-10",
  },
];

function App() {
  // Lifted state: projects array lives in the nearest common parent
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchTerm, setSearchTerm] = useState("");

  // Handler passed down to ProjectForm via props
  const addProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  // Handler passed down to ProjectCard via props
  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Derived state: filter projects dynamically based on search input
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <Header projectCount={projects.length} />
      <main className="main-content">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProjectForm onAddProject={addProject} />
        <ProjectList
          projects={filteredProjects}
          onDeleteProject={deleteProject}
          searchTerm={searchTerm}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
