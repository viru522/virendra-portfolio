import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard title="Portfolio" desc="React portfolio website" />
      </div>
    </div>
  </section>
);
export default Projects;