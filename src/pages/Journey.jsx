import { Link } from "react-router-dom";

function Journey() {
    const journey = [
        {
            period: "School Years",
            title: "The Beginning",
            description:
                "Developed an interest in IT and technology during my school years."
        },
        {
            period: "University",
            title: "Starting My CS Journey",
            description:
                "Began pursuing a Computer Science degree at the University of Colombo School of Computing (UCSC)."
        },
        {
            period: "Present",
            title: "Learning and Building",
            description:
                "Currently a second-year undergraduate, exploring web development, learning React and building projects to strengthen my skills."
        }
    ];

    return (
        <section className="journey">
            <div className="journey-heading">
                <p className="journey-label">MY STORY</p>
                <h1>My <span>Journey.</span></h1>
                <p>
                    My interest in technology began during my school years.
                    Since then, I've continued exploring the world of
                    computing and developing my skills.
                </p>
            </div>

            <div className="journey-timeline">
                {journey.map((item, index) => (
                    <div className="journey-item" key={item.title}>
                        <div className="journey-number">
                            0{index + 1}
                        </div>

                        <div className="journey-content">
                            <span>{item.period}</span>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/" className="journey-home">
                ← Back to Home
            </Link>
        </section>
    );
}

export default Journey;