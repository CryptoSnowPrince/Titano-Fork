import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LOGO from "../assets/logo.png";
import DASHBOARD from "../assets/icons/dashboard.png";
import ACCOUNT from "../assets/icons/account.png";
import CALCULATOR from "../assets/icons/calculator.png";
import SWAP from "../assets/icons/swap.png";
import DOC from "../assets/icons/docs.png";

import TELEGTAM from "../assets/icons/telegram.png";
import MEDIUM from "../assets/icons/medium.png";
import TWITTER from "../assets/icons/twitter.png";
import REDDIT from "../assets/icons/reddit.png";

const Sidebar = (props) => {
	const path = useLocation().pathname;
	return (
		<div className={`d-flex flex-column flex-shrink-0 p-4 text-white sidebar ${props.sidebarStatus ? `active` : ``}`}>
			<div className="btn-close btn-close-white btn-close-sidebar" onClick={props.sidebarToggle}>
			</div>
			<div className="text-center">
				<Link to="/" className='fs-3 text-decoration-none'>
					<img width="50" src={LOGO} alt="" />
					&nbsp;&nbsp;Freedom
				</Link>
			</div>
			<ul className="nav nav-pills flex-column mb-auto sidebar-menu">
				<li>
					<Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`} aria-current="page">
						<img className="icon" width="18" src={DASHBOARD} alt="" />
						Dashboard
					</Link>
				</li>
				<li>
					<Link to="/account" className={`nav-link ${path === '/account' ? 'active' : ''}`}>
						<img className="icon" width="18" src={ACCOUNT} alt="" />
						Account
					</Link>
				</li>
				<li>
					<Link to="/calculator" className={`nav-link ${path === '/calculator' ? 'active' : ''}`}>
						<img className="icon" width="18" src={CALCULATOR} alt="" />
						Calculator
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-link">
						<img className="icon" width="18" src={SWAP} alt="" />
						Swap
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-link">
						<img className="icon" width="18" src={DOC} alt="" />
						Docs
					</Link>
				</li>
			</ul>
			<div className="social">
				<ul className="social-list">
					<li>
						<a href='https://t.me/titano_finance'>
							<img width="22" src={TELEGTAM} alt="" />
						</a>
					</li>
					<li>
						<a href='https://titano.medium.com/'>
							<img width="22" src={MEDIUM} alt="" />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/TitanoFinance'>
							<img width="22" src={TWITTER} alt="" />
						</a>
					</li>
					<li>
						<a href='https://discord.gg/titano'>
							<img width="22" src={REDDIT} alt="" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;