const ProjectCard = ({ title, desc }) => (
  <div className="bg-white shadow rounded-lg p-4">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-sm mt-2">{desc}</p>
  </div>
);
export default ProjectCard;