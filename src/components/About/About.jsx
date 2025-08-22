
import "./About.css";

const About = () => {
    return (
        <div className="about-hero-bg">
            <div className="about-hero-card">
                <div className="about-hero-content">
                    <div className="about-hero-hi">Hello, I'm</div>
                    <h1 className="about-hero-name">Trần Hữu Hiếu  </h1>
                    <div className="about-hero-role">Fullstack Developer</div>
                    <div className="about-hero-underline" />
                    <div className="about-hero-btns">
                        <a href="#hotline-section" className="about-hero-btn main">Liên Hệ</a>
                        <a href="#project-section" className="about-hero-btn"> Projects</a>
                    </div>
                </div>
                <div className="about-hero-avatar-block">
                    <img
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/526583688_1188166543335182_4103561911743280463_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH-nKrJ0D_Usfdxcykn56mg4L3NfQGK6cDgvc19AYrpwFYzYIVEqpGCrHNine0fDMgBbilnY5NqsdNxoQJo3jbX&_nc_ohc=hUpDPPAjJXEQ7kNvwHZQZPb&_nc_oc=AdlsCrD9EXJyqOhIXsrDPGqCu2Zowa7JCwpw2TzR1y63pxN6Jna9xOfpoN6owDhu6MI&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=aNnUZYbg0vJIBrGmndyCyA&oh=00_AfVcpRSoL7KZ_vm52gJQlT4j9hKsBBLLUIZJlC8mGY_mbA&oe=68AB7EB5"
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
        </div>
    );
};

export default About;