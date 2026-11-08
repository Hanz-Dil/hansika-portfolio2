
import ProjectCard from "./ProjectCard";

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
                    <ProjectCard
                        key={project.number} //as react create multiple projectcards
                        number={project.number}
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                        />
                    
                ))}

            </div>

        </section>
    );
}

export default Projects;
