import React from "react";
import './project.css';

const projects = [
	{
		title: "Portfolio Website",
		desc: "Website cá nhân giới thiệu bản thân, kỹ năng và dự án.",
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		link: "#"
	},
	{
		title: "E-commerce Shop",
		desc: "Xây dựng website bán hàng với ReactJS, giao diện hiện đại, responsive.",
		img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
		link: "#"
	},
	{
		title: "Blog App",
		desc: "Ứng dụng blog cá nhân, cho phép đăng bài, bình luận, quản lý nội dung.",
		img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
		link: "#"
	},
    {
		title: "javascript",
		desc: "phát minh ra ngôn ngữ lập trình JavaScript, một ngôn ngữ lập trình hướng đối tượng, động và đa năng.",
		img: "https://tse2.mm.bing.net/th/id/OIP.bbYw9a3fwTgtqUn9c0bU9wHaEc?pid=Api&P=0&h=220",
		link: "#"
	},
    {
		title: "ReactJS",
		desc: "react là một thư viện JavaScript mã nguồn mở được sử dụng để xây dựng giao diện người dùng, đặc biệt là cho các ứng dụng web đơn trang (SPA).",
		img: "https://d31ezp3r8jwmks.cloudfront.net/nr9p5isqq3yn41tqrh1tr4lttr1v",
		link: "#"
	},
    {
		title: "VueJS",
		desc: "Vue.js là một framework JavaScript mã nguồn mở được sử dụng để xây dựng giao diện người dùng và ứng dụng web đơn trang.",
		img: "https://tse3.mm.bing.net/th/id/OIP.4yKO8tali7AEbn-WFmB78wHaDh?pid=Api&P=0&h=220",
		link: "#"
	},
];

const Project = () => {
	return (
		<div className="project-wrapper">
			<h2 className="project-title">My Portfolio</h2>
            <hr />
			<div className="project-list">
				{projects.map((p, idx) => (
					<div className="project-card" key={idx}>
						<div className="project-img">
							<img src={p.img} alt={p.title} />
						</div>
						<div className="project-info">
							<h3>{p.title}</h3>
							<p>{p.desc}</p>
							<a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">Xem chi tiết</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
