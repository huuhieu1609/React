import React, { useState } from 'react';
import './hotline.css';

const Hotline = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gửi liên hệ thành công!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="hotline-main">
      <h2 className="hotline-title">Get In Touch</h2>
      <div className="hotline-divider"></div>
      <div className="hotline-grid">
        <div className="hotline-info-list">
          <div className="hotline-info-card">
            <div className="hotline-info-icon">
              {/* Location icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3" fill="#f43f5e"/><path d="M12 22s8-7.58 8-12A8 8 0 0 0 4 10c0 4.42 8 12 8 12Z" stroke="#f43f5e" strokeWidth="2" fill="#fff"/></svg>
            </div>
            <div>
              <div className="hotline-info-label">Location</div>
              <div className="hotline-info-value">Da Nang, Viet Nam</div>
            </div>
          </div>
          <div className="hotline-info-card">
            <div className="hotline-info-icon">
              {/* Email icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#6366f1"/><path d="M6 8.5l6 5 6-5" stroke="#fff" strokeWidth="2"/><rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="2"/></svg>
            </div>
            <div>
              <div className="hotline-info-label">Email</div>
              <div className="hotline-info-value">huuhieutt12.1@gmail.com</div>
            </div>
          </div>
          <div className="hotline-info-card">
            <div className="hotline-info-icon">
              {/* Phone icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#f59e42"/><rect x="8" y="6" width="8" height="12" rx="2" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="#fff"/></svg>
            </div>
            <div>
              <div className="hotline-info-label">Hotline</div>
              <div className="hotline-info-value">0342211914</div>
            </div>
          </div>
        </div>
        <div className="hotline-form-card">
          <form onSubmit={handleSubmit} className="hotline-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hotline;