import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	return (
		<header className="header">
			<nav className="nav-tag">
				<ul className="nav-ul">
					<li className="nav-li">
						<Link className="nav-link" to="/">
							<h1>Eve Art</h1>
						</Link>
					</li>
					<li className="nav-li">
						<Link className="nav-link" to="/works">
							Works
						</Link>
					</li>
					<li className="nav-li">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
