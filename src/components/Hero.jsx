
import { useEffect, useState } from "react";

import myPhoto from "../assets/profPic.png";

function Hero() {
    const words = [
        "digital experiences.",
        "creative websites.",
        "meaningful projects."
    ];

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timer = setTimeout(() => {
            if (!deleting) {
                setText(currentWord.substring(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setDeleting(true), 1200);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));

                if (text.length === 1) {
                    setDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, deleting ? 45 : 85);

        return () => clearTimeout(timer);
    }, [text, deleting, wordIndex]);

    return (
        <section className="hero" id="home">

            <div className="hero-glow"></div>
            <div className="floating-orb orb-one"></div>
<div className="floating-orb orb-two"></div>
<div className="floating-orb orb-three"></div>

            <div className="hero-content">

                <p className="hero-label">
                    <span className="status-dot"></span>
                    WELCOME TO MY PORTFOLIO
                </p>

                <h1>
                    Hi, I'm <span className="gradient-name">Hanzika.</span>
                    <br />
                    I create
                    <br />
                    <span className="typing-text">
                        {text}
                        <span className="typing-cursor">|</span>
                    </span>
                </h1>

                <p className="hero-description">
                    An aspiring software developer passionate about
                    technology, creativity, and building meaningful
                    digital experiences.
                </p>

                    <div className="hero-image-container">
                        <div className="hero-image-glow">
                            <div className="hero-image-border">
                            <img
                                 src={myPhoto}
                              alt="Hanzika"
                                className="hero-image"
                                />
                            </div>
                     </div>
                    </div>


                <div className="hero-buttons">
                    <a
                         href="/My_CV.pdf"
                         download
                             className="secondary-btn"
                            >
                     Download CV ↓
                    </a>
                    <a href="#projects" className="primary-btn">
                        Explore My Work ↗
                    </a>

                    <a href="#about" className="secondary-btn">
                        More About Me
                    </a>
                </div>

            </div>

            <div className="hero-bottom">
                <span>SCROLL TO EXPLORE</span>
                <span>✳ 2026</span>
            </div>

        </section>
    );
}

export default Hero;
