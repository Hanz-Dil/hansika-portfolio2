function ProjectCard({number,
    title,
    category,
    description,
    technologies,
    link}){
    return(
       <div className="project-card" >

                        <div className="project-top">
                            <span>{number}</span>
                            <span className="project-arrow">↗</span>
                        </div>

                        <p className="project-category">
                            {category}
                        </p>

                        <h3>{title}</h3>

                        <p className="project-description">
                            {description}
                        </p>

                        <div className="project-tags">
                            {technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                        <a href={link} className="project-link">
                            Explore Project ↗
                        </a>

                    </div> 

);
    }

    export default ProjectCard;