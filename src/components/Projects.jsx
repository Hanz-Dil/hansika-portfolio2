
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
            link: "https://github.com/Hanz-Dil/hansika-portfolio2"
        },
        {
            number: "02",
            title: "EventDNA",
            category: "COLLABORATIVE PROJECT",
            description:
                "A web-based event management platform developed collaboratively to support event discovery and management. Contributed to community groups, group membership and user management features.",
            technologies: ["HTML", "CSS", "JavaScript","PHP","MySQL"],
            link: "https://github.com/Hanz-Dil/EventDNA"
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
