import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: ["React", "Flutter", "HTML5", "CSS3", "JavaScript", "TypeScript"]
        },
        {
            title: "Backend Development",
            skills: ["Node.js", "Spring Boot", "Java", "C#", "Express.js"]
        },
        {
            title: "Mobile Development",
            skills: ["Flutter", "Swift", "React Native"]
        },
        {
            title: "Database Management",
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        },
        {
            title: "DevOps & Cloud",
            skills: ["Linux", "Docker", "AWS"]
        },
        {
            title: "Cybersecurity",
            skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment"]
        },
        {
            title: "Mathematics & Analysis",
            skills: ["Mathematical Modeling", "Statistics", "Data Analysis"]
        },
        {
            title: "Teaching & Mentoring",
            skills: ["Mentoring Students", "Technical Training", "Project Supervision"]
        }
    ];

    const badgeColors = [
        "#0ea5e9", "#10b981", "#8b5cf6", "#f59e0b",
        "#ef4444", "#ec4899", "#14b8a6", "#6366f1", "#22c55e"
    ];

    return (
        <section 
            className="skills-section py-5"
            style={{
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                color: "#f1f5f9"
            }}
        >
            <div className="container px-3">
                <h2 
                    className="mb-5 text-center fw-bold"
                    style={{ fontSize: "2.75rem", lineHeight: "1.2" }}
                >
                    My Core <span 
                        style={{ 
                            background: "linear-gradient(90deg, #06b6d4, #3b82f6)", 
                            WebkitBackgroundClip: "text", 
                            color: "transparent" 
                        }}
                    >
                        Skills & Technologies
                    </span>
                </h2>

                <div className="row gy-4">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="col-sm-12 col-md-6 col-lg-4"
                            style={{
                                animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
                                opacity: 0
                            }}
                        >
                            <div 
                                className="card h-100 shadow-sm border-0 rounded-4 p-4"
                                style={{
                                    backgroundColor: "#1e293b",
                                    color: "#f8fafc",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "default"
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                <h5 className="card-title mb-3 text-center fw-semibold" style={{ fontSize: "1.2rem" }}>
                                    {category.title}
                                </h5>
                                <div className="d-flex flex-wrap justify-content-center">
                                    {category.skills.map((skill, i) => (
                                        <span 
                                            key={i}
                                            className="badge m-1 px-3 py-2"
                                            style={{
                                                borderRadius: '999px',
                                                fontSize: '0.85rem',
                                                backgroundColor: badgeColors[i % badgeColors.length],
                                                color: "#ffffff",
                                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                                transition: "transform 0.2s ease"
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframe Animation */}
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            transform: translateY(30px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    @media (max-width: 576px) {
                        .card-title {
                            font-size: 1rem !important;
                        }
                        h2 {
                            font-size: 2rem !important;
                        }
                        .badge {
                            font-size: 0.75rem !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Skills;
