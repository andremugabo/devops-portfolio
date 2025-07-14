import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-5" style={{ background: '#0f172a' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#3b82f6', fontSize: '2.5rem' }}>
          Get In Touch
        </h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ background: '#1e293b', borderRadius: '12px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold text-light mb-4">Contact Information</h5>
                <ul className="list-unstyled text-light opacity-85">
                  <li className="mb-3">
                    <i className="bi bi-envelope me-2"></i> info@andremugabo.rw
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-phone me-2"></i> (+250) 788-112-233
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-geo-alt me-2"></i> Kigali, Rwanda
                  </li>
                </ul>

                <div className="mt-4 d-flex gap-3">
                  <a href="#" className="text-light fs-4" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" className="text-light fs-4" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="text-light fs-4" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg" style={{ background: '#1e293b', borderRadius: '12px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold text-light mb-4">Send a Message</h5>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-light">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control text-light"
                      style={{ background: '#334155', border: 'none' }}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control text-light"
                      style={{ background: '#334155', border: 'none' }}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-light">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="form-control text-light"
                      style={{ background: '#334155', border: 'none' }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 fw-bold"
                    disabled={submitting}
                    style={{
                      background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                      border: 'none',
                      color: '#fff',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx="true">{`
        .opacity-85 {
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
};

export default Contact;
