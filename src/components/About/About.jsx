import "./About.css";

const About = () => {
    return (
      <div>
                        <div className="about-card">
                            <div className="about-img">
                                <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/526583688_1188166543335182_4103561911743280463_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH-nKrJ0D_Usfdxcykn56mg4L3NfQGK6cDgvc19AYrpwFYzYIVEqpGCrHNine0fDMgBbilnY5NqsdNxoQJo3jbX&_nc_ohc=hUpDPPAjJXEQ7kNvwHZQZPb&_nc_oc=AdlsCrD9EXJyqOhIXsrDPGqCu2Zowa7JCwpw2TzR1y63pxN6Jna9xOfpoN6owDhu6MI&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=aNnUZYbg0vJIBrGmndyCyA&oh=00_AfVcpRSoL7KZ_vm52gJQlT4j9hKsBBLLUIZJlC8mGY_mbA&oe=68AB7EB5" alt="avatar" />
                            </div>
                            <div className="about-info">
                                <h1>Giới thiệu về chúng tôi</h1>
                                <br />
                                <p>
                                    <b>Trần Hữu Hiếu</b><br/>
                                    
                                    Sinh ngày: 16/09/2004<br/>
                                    
                                    Địa chỉ: Đà Nẵng, Việt Nam<br/>
                                </p>
                            </div>
                            <div className="about-social about-social-row">
                                <a href="https://www.facebook.com/tran.hieu.565760" className="about-btn fb" target="_blank" rel="noopener noreferrer">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 8, verticalAlign: 'middle'}}><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg>
                                    Facebook
                                </a>
                                <a href="https://zalo.me/yourzalo" className="about-btn zalo" target="_blank" rel="noopener noreferrer">
                                    <svg width="22" height="22" viewBox="0 0 48 48" fill="currentColor" style={{marginRight: 8, verticalAlign: 'middle'}}><g><ellipse cx="24" cy="24" rx="20" ry="20" fill="#008fe5"/><path d="M24.1 10.2c-7.7 0-13.9 5.1-13.9 11.4 0 3.2 1.7 6.1 4.5 8.1-.2.7-.7 2.2-.8 2.6-.1.4.1.6.5.5.7-.1 2.2-.7 2.7-.9 2.1.6 4.4.9 6.7.9 7.7 0 13.9-5.1 13.9-11.4s-6.2-11.2-13.6-11.2zm-2.2 13.7h-2.1v-6.2h2.1v6.2zm4.2 0h-2.1v-6.2h2.1v6.2zm4.2 0h-2.1v-6.2h2.1v6.2z" fill="#fff"/></g></svg>
                                    Zalo
                                </a>
                                <a href="tel:0987654321" className="hotline-btn">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:8,verticalAlign:'middle'}}><circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2.2" fill="#e0f7fa"/><path d="M15.05 17.5c-2.5 0-6.55-4.05-6.55-6.55 0-.45.05-.9.15-1.32.13-.54-.13-1.12-.65-1.32l-1.7-.68c-.5-.2-1.08.02-1.28.53C4.1 9.6 4 10.3 4 11c0 5.52 4.48 10 10 10 .7 0 1.4-.1 2.07-.3.51-.2.73-.78.53-1.28l-.68-1.7c-.2-.52-.78-.78-1.32-.65-.42.1-.87.15-1.32.15z" stroke="#10b981" strokeWidth="1.5"/></svg>
                                    <span>Hotline: <b>0934 221 1914</b></span>
                                </a>
                            </div>
                        </div>
      </div>
        
    );
}
export default About;