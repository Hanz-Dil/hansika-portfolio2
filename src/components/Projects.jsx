
function Projects() {
    const projects = [
        {
            number: "01",
            title: "Personal Portfolio",
            category: "WEB DEVELOPMENT",
            description:
                "A personal portfolio website built to showcase my skills, journey and projects using React and CSS.",
            technologies: ["React", "JavaScript", "CSS"],
            link: "#"
        },
        {
            number: "02",
            title: "Creative Project",
            category: "COMING SOON",
            description:
                "A new project currently in my learning journey. More details and features coming soon.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "#"
        },
        {
            number: "03",
            title: "Future Innovation",
            category: "EXPLORING IDEAS",
            description:
                "An upcoming project where I'll experiment with new technologies and creative ideas.",
            technologies: ["React", "UI Design"],
            link: "#"
        }
    ];

    return (
        <section className="projects" id="projects">

            <div className="section-heading">
                <p className="section-label">MY RECENT WORK</p>
                <h2>Things I've <span>created.</span></h2>
                <p className="projects-intro">
                    A collection of projects, experiments and ideas
                    I'm bringing to life.
                </p>
            </div>

            <div className="project-grid">

                {projects.map((project) => (
                    <div className="project-card" key={project.number}>

                        <div className="project-top">
                            <span>{project.number}</span>
                            <span className="project-arrow">↗</span>
                        </div>

                        <p className="project-category">
                            {project.category}
                        </p>

                        <h3>{project.title}</h3>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-tags">
                            {project.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                        <a href={project.link} className="project-link">
                            Explore Project ↗
                        </a>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;
