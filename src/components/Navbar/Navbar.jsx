import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
								<div className="navbar-logo">
									<img
										src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/526583688_1188166543335182_4103561911743280463_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH-nKrJ0D_Usfdxcykn56mg4L3NfQGK6cDgvc19AYrpwFYzYIVEqpGCrHNine0fDMgBbilnY5NqsdNxoQJo3jbX&_nc_ohc=hUpDPPAjJXEQ7kNvwHZQZPb&_nc_oc=AdlsCrD9EXJyqOhIXsrDPGqCu2Zowa7JCwpw2TzR1y63pxN6Jna9xOfpoN6owDhu6MI&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=aNnUZYbg0vJIBrGmndyCyA&oh=00_AfVcpRSoL7KZ_vm52gJQlT4j9hKsBBLLUIZJlC8mGY_mbA&oe=68AB7EB5"
										alt="avatar"
										className="navbar-avatar"
									/>
									Hữu Hiếu
                             
								</div>
				<ul className="navbar-menu">
					<li><Link to="/about">Home</Link></li>
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="/projects">My Portfolio</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;