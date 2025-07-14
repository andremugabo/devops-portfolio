import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import profileImage from '../../assets/image.jpg'; 

const Banner = () => {
    return (
        <section 
            className="banner d-flex align-items-center" 
            style={{
                minHeight: '60vh',
                padding: '2rem 5%',
                background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                color: '#f1f5f9'
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Text Content */}
                    <div className="col-12 col-lg-6 text-center text-lg-start order-2 order-lg-1 mt-4 mt-lg-0">
                        <p style={{
                            background: '#0f766e',
                            display: 'inline-block',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '999px',
                            fontSize: '0.9rem',
                            color: '#a7f3d0',
                            marginBottom: '1rem'
                        }}>
                            Software Developer & Mathematician
                        </p>

                        <h1 className="fw-bold" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                            Hi, I'm <span style={{ color: '#3b82f6' }}>MUGABO</span> <span style={{ color: '#a78bfa' }}>Andre</span>
                        </h1>

                        <h2 style={{
                            marginTop: '1rem',
                            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                            fontWeight: '700'
                        }}>
                            Developer,<br/>Mathematician,<br/>Innovator
                        </h2>

                        <p className="mt-3" style={{ 
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                            color: '#cbd5e1' 
                        }}>
                            B.Sc in Software Engineering & Applied Mathematics | Full-Stack Developer | Spring Boot & Swift Enthusiast
                        </p>

                        <p style={{
                            color: '#14b8a6',
                            fontWeight: '600',
                            marginTop: '0.5rem'
                        }}>
                            Andela Rwanda Alumni
                        </p>

                        {/* Buttons */}
                        <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                            <Link 
                                to="/"
                                className="btn px-4 py-2"
                                style={{
                                    background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                                    border: 'none',
                                    borderRadius: '30px',
                                    color: '#fff',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                                }}
                            >
                                View My Work
                            </Link>

                            <a 
                                href="/resume.pdf" 
                                download 
                                className="btn px-4 py-2"
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #06b6d4',
                                    borderRadius: '30px',
                                    color: '#06b6d4',
                                    fontWeight: '600',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                                }}
                            >
                                <FaFileDownload style={{ marginRight: '0.5rem' }} />
                                Download Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-4 d-flex gap-4 justify-content-center justify-content-lg-start">
                            <a href="https://github.com/andremugabo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/mugabo-andr%C3%A9-9a1a0774/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                                <FaLinkedin />
                            </a>
                            {/* Add more icons as needed */}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
                        <img 
                            src={profileImage} 
                            alt="MUGABO" 
                            className="img-fluid rounded-circle"
                            style={{ 
                                maxWidth: 'min(100%, 300px)',
                                width: '100%',
                                height: 'auto',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                                border: '5px solid #3b82f6',
                                padding: '5px',
                                marginBottom: '1.5rem'
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
