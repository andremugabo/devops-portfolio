import React from 'react';
import profileImage from '../../assets/coding.jpg'; 
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section 
            className="about-section py-5"
            style={{
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                color: "#f1f5f9"
            }}
        >
            <div className="container">
                <h2 
                    className="text-center mb-4 fw-bold"
                    style={{ fontSize: "2.5rem" }}
                >
                    About <span style={{
                        background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                    }}>Me</span>
                </h2>

                <p className="text-center lead mb-5" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
                    Software Engineer & Mathematician passionate about solving complex problems and building innovative solutions with impact.
                </p>

                <div className="row align-items-center">
                    <div className="col-md-5 mb-4 mb-md-0 text-center">
                        <img 
                            src={profileImage} 
                            alt="Mugabo coding" 
                            className="img-fluid rounded-4 shadow-lg"
                            style={{
                                maxHeight: "350px",
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                    </div>

                    <div className="col-md-7">
                        <h4 className="fw-semibold mb-3" style={{ fontSize: "1.75rem" }}>
                            Who I Am
                        </h4>
                        <p style={{ lineHeight: 1.8 }}>
                            I'm a versatile <strong>Software Engineer</strong> and <strong>Mathematician</strong> with a B.Sc in Software Engineering & Applied Mathematics. 
                            With hands-on experience in <strong>full-stack development</strong>, <strong>backend systems</strong>, and <strong>distributed applications</strong>, 
                            I tackle technical challenges from multiple perspectives.
                        </p>

                        <p style={{ lineHeight: 1.8 }}>
                            As an <a 
                                href="https://andela.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{
                                    color: "#0ea5e9",
                                    textDecoration: "underline"
                                }}
                            >
                                Andela Rwanda Alumni
                            </a>, 
                            I’ve collaborated with global teams, delivering scalable, high-quality solutions that meet international standards.
                        </p>

                        <p style={{ lineHeight: 1.8 }}>
                            Beyond coding, I'm passionate about <strong>teaching and mentoring</strong>. I’ve worked as a Teaching Assistant in Mathematics and Software Engineering, helping the next generation of developers grow.
                        </p>

                        <div className="d-flex flex-wrap mt-4">
                            {[
                                { text: "Software Engineering", color: "#10b981" },
                                { text: "Applied Mathematics", color: "#3b82f6" },
                                { text: "Full-Stack Development", color: "#f59e0b" },
                                { text: "Spring Boot", color: "#8b5cf6" },
                                { text: "Swift", color: "#ec4899" },
                                { text: "Andela Alumni", color: "#22d3ee" }
                            ].map((badge, idx) => (
                                <span 
                                    key={idx} 
                                    className="me-2 mb-2 px-3 py-2"
                                    style={{
                                        borderRadius: "999px",
                                        backgroundColor: badge.color,
                                        color: "#fff",
                                        fontSize: "0.85rem",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                                        transition: "transform 0.2s ease"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    {badge.text}
                                </span>
                            ))}
                        </div>

                        <Link 
                            to="/contact" 
                            className="btn btn-outline-info mt-4 px-4 py-2 rounded-pill"
                            style={{
                                transition: "all 0.3s ease",
                                fontWeight: "500"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "#0ea5e9";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#0ea5e9";
                            }}
                        >
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
