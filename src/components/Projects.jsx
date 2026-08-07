function Projects() {
  const projects = [
    "Student Portfolio Website",
    "Weather App",
    "To-Do List Application"
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;