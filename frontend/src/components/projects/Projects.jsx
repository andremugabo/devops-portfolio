import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Health Symptom Analyzer",
      description: "Python-based application for analyzing health symptoms and providing preliminary assessments.",
      technologies: ["Python"],
      category: "Healthcare",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "EaseShop E-Commerce",
      description: "Full-featured online shopping platform with secure payment integration and user-friendly UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "E-Commerce",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "ATLP E-Commerce Platform",
      description: "Custom e-commerce solution developed for Rwanda's 30 Billion program with tailored features.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "E-Commerce",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "Enterprise-grade employee management with Flutter frontend and Spring Boot backend.",
      technologies: ["Dart", "Flutter", "Java", "Spring Boot"],
      category: "Enterprise",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-5" style={{ background: '#0f172a', color: '#f8fafc' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#3b82f6', fontSize: '2.5rem' }}>
          My Projects
        </h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 d-flex">
              <div className="card flex-fill border-0 shadow-sm project-card" style={{ background: '#1e293b', borderRadius: '12px' }}>
                <div className="card-body d-flex flex-column p-4">

                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="fw-bold text-white">{project.title}</h5>
                    <span className="badge rounded-pill" style={{
                      background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                      color: '#fff',
                      fontSize: '0.75rem'
                    }}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-light small flex-grow-1 mb-3" style={{ opacity: 0.85 }}>
                    {project.description}
                  </p>

                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge text-white" style={{ backgroundColor: '#3b82f6' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
                    >
                      <i className="bi bi-github"></i> Code
                    </a>

                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm d-flex align-items-center gap-1"
                      style={{
                        background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                        color: '#fff',
                        border: 'none'
                      }}
                    >
                      <i className="bi bi-eye-fill"></i> Live Demo
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;
