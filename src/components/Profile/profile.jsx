
import React from "react";
import './profile.css';

const ProfileAbout = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-image">
          <img
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/512684708_1156082779876892_4383178089795850920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFRm9Ur2Y1HP9uf_rCMM1xqaltvZiqTJTpqW29mKpMlOnDC2E4S4hMCx7b-UIK4LrC2WysXZpwk6_DPEmlANgtA&_nc_ohc=Wp41PAEk0mcQ7kNvwF-vojE&_nc_oc=AdlpC3eGpvAFluOvPaMoeSK8SD6PnYd9HPZ9fwiP0EWVXMsrmvgKlbKWyVGB6df8Yiw&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=DgrC-tEaksPB9xlFaK9d4Q&oh=00_AfVxo6jYB6sLOUGQpfLtksEXr1JpHbY1u-HI-_rqITI6kw&oe=68AC85D2"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>👋 Giới thiệu bản thân</h2>
          <p>
            Xin chào! Tôi là <strong>Trần Hữu Hiếu</strong>, một lập trình viên
            đam mê công nghệ và sáng tạo.
          </p>
          <p>
            Tôi yêu thích xây dựng các sản phẩm web hiện đại, tối ưu trải nghiệm
            người dùng và luôn học hỏi công nghệ mới.
          </p>
          <ul className="info-list">
            <li><span>📍 Địa chỉ:</span> Đà Nẵng, Việt Nam</li>
            <li><span>📧 Email:</span> huuhieutt12.1@gmail.com</li>
            <li><span>✨ Sở thích:</span> VueJs,React</li>
          </ul>
        </div>
      </div>
      <div className="profile-skill-card">
        <h3>Kỹ năng & Năng lực</h3>
        <div className="profile-skill-list">
          {/* HTML/CSS */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{width:'38px',height:'38px'}} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{width:'38px',height:'38px',marginLeft:'-10px'}} />
            </div>
            <div className="profile-skill-title">HTML/CSS</div>
            <div className="profile-skill-desc">Thiết kế giao diện web hiện đại, responsive, hiệu ứng CSS.</div>
          </div>
          {/* ReactJS */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" style={{width:'38px',height:'38px'}} />
            </div>
            <div className="profile-skill-title">ReactJS</div>
            <div className="profile-skill-desc">Xây dựng SPA, component, hook, tối ưu hiệu suất.</div>
          </div>
          {/* VueJS */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="VueJS" style={{width:'38px',height:'38px'}} />
            </div>
            <div className="profile-skill-title">VueJS</div>
            <div className="profile-skill-desc">Phát triển ứng dụng web với Vue, Vue Router, Vuex.</div>
          </div>
            {/* PHP */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://tse3.mm.bing.net/th/id/OIP.CmR_xQULrXJrBNo7Q4EUYgHaHa?pid=Api&P=0&h=220" alt="VueJS" style={{width:'38px',height:'38px'}} />
            </div>
            <div className="profile-skill-title">PHP</div>
            <div className="profile-skill-desc">đặc biệt phù hợp với phát triển web.
Nhanh chóng, linh hoạt và thực dụng, PHP hỗ trợ mọi thứ</div>
          </div>
            {/* My SQL */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://tse2.mm.bing.net/th/id/OIP.63jNc3AqvI3loUog55YBhwHaHa?pid=Api&P=0&h=220" alt="VueJS" style={{width:'38px',height:'38px'}} />
            </div>
            <div className="profile-skill-title">My SQL</div>
            <div className="profile-skill-desc">Xây dựng các ứng dụng hiện đại với cơ sở dữ liệu miễn phí trên AWS</div>
          </div>
          {/* JavaScript */}
          <div className="profile-skill-item">
            <div className="profile-skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width:'38px',height:'38px'}} />
            </div>
            <div className="profile-skill-title">JavaScript</div>
            <div className="profile-skill-desc">Xử lý logic, DOM, API, ES6+, bất đồng bộ.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;