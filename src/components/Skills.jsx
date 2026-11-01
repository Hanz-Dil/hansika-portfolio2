
function Skills() {
    const skillGroups = [
        {
            title: "Frontend Development",
            icon: "✧",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Tools & Technologies",
            icon: "⌘",
            skills: ["Git", "GitHub", "VS Code", "Vite"]
        },
        {
            title: "Currently Exploring",
            icon: "↗",
            skills: ["Responsive Design", "UI Design", "Web Development"]
        }
    ];

    return (
        <section className="skills" id="skills">

            <div className="section-heading">
                <p className="section-label">WHAT I WORK WITH</p>
                <h2>My creative <span>toolkit.</span></h2>
                <p className="skills-intro">
                    Technologies and tools I'm learning and using
                    to bring my ideas to life.
                </p>
            </div>

            <div className="skills-container">

                {skillGroups.map((group, index) => (
                    <div className="skill-card" key={index}>

                        <div className="skill-card-icon">
                            {group.icon}
                        </div>

                        <h3>{group.title}</h3>

                        <div className="skill-tags">
                            {group.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Skills;
