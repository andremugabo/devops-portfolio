import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer 
            className="text-white py-4" 
            style={{
                background: 'linear-gradient(90deg, #0f172a, #1e293b)',
                borderTop: '1px solid #334155'
            }}
        >
            <div className="container text-center d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0">
                    &copy; {new Date().getFullYear()} <span className="fw-bold">MUGABO</span> | All Rights Reserved
                </p>

                <div>
                    <a 
                        href="https://github.com/andremugabo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-light mx-2"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/mugabo-andr%C3%A9-9a1a0774/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-light mx-2"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a 
                        href="https://twitter.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-light mx-2"
                    >
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
