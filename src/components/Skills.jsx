const Skills = () => (
  <section id="skills" className="py-20 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["React", "JavaScript", "HTML", "Tailwind"].map(skill => (
        <span key={skill} className="p-4 bg-gray-200 rounded text-center">{skill}</span>
      ))}
    </div>
  </section>
);
export default Skills;