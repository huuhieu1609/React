
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-hero-bg">
                <div className="about-hero-card">
                    <div className="about-hero-content">
                        <div className="about-hero-hi">Hello, I'm</div>
                        <h1 className="about-hero-name">Trần Hữu Hiếu</h1>
                        <div className="about-hero-role">Fullstack Developer</div>
                        <div className="about-hero-underline" />
                                    <div className="about-hero-btns">
                                        <a href="#hotline-section" className="about-hero-btn main">Liên Hệ</a>
                                        <a href="#hotline-section" className="about-hero-btn">
                                           <path d="M15.05 17.5c-2.5 0-6.55-4.05-6.55-6.55 0-.45.05-.9.15-1.32.13-.54-.13-1.12-.65-1.32l-1.7-.68c-.5-.2-1.08.02-1.28.53C4.1 9.6 4 10.3 4 11c0 5.52 4.48 10 10 10 .7 0 1.4-.1 2.07-.3.51-.2.73-.78.53-1.28l-.68-1.7c-.2-.52-.78-.78-1.32-.65-.42.1-.87.15-1.32.15z" stroke="#10b981" strokeWidth="1.5"/>
                                            <span>Hotline: <b>0934 221 1914</b></span>
                                        </a>
                                    </div>
                    </div>
                    <div className="about-hero-avatar-block">
                        <img
                            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/526583688_1188166543335182_4103561911743280463_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH-nKrJ0D_Usfdxcykn56mg4L3NfQGK6cDgvc19AYrpwFYzYIVEqpGCrHNine0fDMgBbilnY5NqsdNxoQJo3jbX&_nc_ohc=z56yqbz8amgQ7kNvwEduanz&_nc_oc=Adk0XmFSkiy3rp__HakkfS_MNd3kGQs386b-Ij23wmstI548nvZZapEA54upTOVfIDA&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=rQPw6umV-YK_APlZF5vcOw&oh=00_AfUlDMdzrRJFQvPiHF4bGhChwgniV-WmfyKUqm7nfVVMTw&oe=68B308F7"
                            alt="avatar"
                            className="about-hero-avatar"
                        />
                    </div>
                    {/* Hiệu ứng bóng mờ tròn */}
                    <div className="about-hero-bubble b1" />
                    <div className="about-hero-bubble b2" />
                    <div className="about-hero-bubble b3" />
                    <div className="about-hero-bubble b4" />
                    <div className="about-hero-bubble b5" />
                </div>
              <div className="about-bg-network">
  <div className="about-bg-dot dot1"></div>
  <div className="about-bg-dot dot2"></div>
  <div className="about-bg-dot dot3"></div>
  <div className="about-bg-dot dot4"></div>
  <div className="about-bg-dot dot5"></div>
  <div className="about-bg-dot dot6"></div>
  <div className="about-bg-dot dot7"></div>
  <div className="about-bg-line line1"></div>
  <div className="about-bg-line line2"></div>
  <div className="about-bg-line line3"></div>
  <div className="about-bg-line line4"></div>
  <div className="about-bg-line line5"></div>
</div>
            </div>
            {/* Xóa nút hotline bên dưới card */}
        </>
    );
};

export default About;