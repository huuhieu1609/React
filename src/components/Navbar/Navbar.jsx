import React from "react";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-logo-block">
					<div className="navbar-logo">
						<img
							src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/526583688_1188166543335182_4103561911743280463_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH-nKrJ0D_Usfdxcykn56mg4L3NfQGK6cDgvc19AYrpwFYzYIVEqpGCrHNine0fDMgBbilnY5NqsdNxoQJo3jbX&_nc_ohc=z56yqbz8amgQ7kNvwEduanz&_nc_oc=Adk0XmFSkiy3rp__HakkfS_MNd3kGQs386b-Ij23wmstI548nvZZapEA54upTOVfIDA&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=rQPw6umV-YK_APlZF5vcOw&oh=00_AfUlDMdzrRJFQvPiHF4bGhChwgniV-WmfyKUqm7nfVVMTw&oe=68B308F7"
							alt="avatar"
							className="navbar-avatar"
						/>
									<div className="navbar-text">Hữu hiếu</div>
					</div>
					<div className="navbar-subtitle">Fullstack Developer</div>
				</div>
				<ul className="navbar-menu">
					<li><a href="#about-section">About</a></li>
					<li><a href="#profile-section">Services</a></li>
					<li><a href="#project-section">Portfolio</a></li>
					<li><a href="#hotline-section">Contact</a></li>
				</ul>
				<div className="navbar-social">
					<a href="https://www.facebook.com/tran.hieu.565760" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="navbar-social-icon">
						<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#222e3a" d="M17.525 8.998h-3.02V7.37c0-.7.465-.865.792-.865h2.2V4.13L14.7 4.12c-3.01 0-3.7 2.26-3.7 3.71v1.17H8.5v2.98h2.5v7.89h3.5v-7.89h2.36l.665-2.98Z"/></svg>
					</a>
					<a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="navbar-social-icon">
						<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#229ED9" d="M21.954 4.667a1.5 1.5 0 0 0-1.62-.22L3.7 11.09a1.5 1.5 0 0 0 .13 2.8l3.6 1.13 1.37 4.13a1.5 1.5 0 0 0 2.36.77l2.02-1.62 3.36 2.47a1.5 1.5 0 0 0 2.37-.87l2.13-12.13a1.5 1.5 0 0 0-.07-.82ZM10.5 16.5l-1.13-3.41 7.98-6.99-6.85 7.9Zm1.5 1.13 1.13-3.41 2.98 2.19-4.11 1.22Zm6.13 1.12-3.36-2.47 4.11-1.22-2.13 3.69a.5.5 0 0 1-.62.22ZM4.5 12.5l13.98-6.09-2.13 3.69-11.85 2.4Z"/></svg>
					</a>
					<a href="https://www.instagram.com/hie.uu1609/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="navbar-social-icon">
						<svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="#fff" stroke="#222e3a" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" stroke="#222e3a" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#222e3a"/></svg>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;