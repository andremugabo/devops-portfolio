import React, { useState } from 'react';
import Button from '../button/Button';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        alert('CV Download Coming Soon!');
    };

    const scrollToSection = (sectionId) => {
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" 
             style={{ 
                 background: 'linear-gradient(90deg, #0f172a, #1e293b)',
                 boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                 padding: '0.8rem 1rem',
                 zIndex: 1000
             }}>
            <div className="container-fluid px-3 px-lg-4">
                <button 
                    onClick={() => scrollToSection('home')}
                    className="navbar-brand fw-bold fs-3 text-gradient bg-transparent border-0"
                >
                    MUGABO
                </button>

                <div className="d-flex align-items-center">
                    <div className="d-lg-none me-2">
                        <Button 
                            color="btn-success" 
                            text="CV" 
                            action={handleClick}
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                        />
                    </div>

                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="nav-link fw-semibold px-2 px-lg-3 py-2 bg-transparent border-0"
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="nav-link fw-semibold px-2 px-lg-3 py-2 bg-transparent border-0"
                            >
                                About
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection('skills')}
                                className="nav-link fw-semibold px-2 px-lg-3 py-2 bg-transparent border-0"
                            >
                                Skills
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="nav-link fw-semibold px-2 px-lg-3 py-2 bg-transparent border-0"
                            >
                                Projects
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="nav-link fw-semibold px-2 px-lg-3 py-2 bg-transparent border-0"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    <div className="d-none d-lg-flex ms-lg-3">
                        <Button color="btn-success" text="Download CV" action={handleClick} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;