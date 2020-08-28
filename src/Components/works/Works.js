import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./works.css";
import GalerieOne from "../galeries/Galerie1";
import GalerieTwo from "../galeries/Galerie2";
import GalerieThree from "../galeries/Galerie3";

function Works() {
	return (
		<Router>
			<section className="works">
				<h2 className="h2-section">Works</h2>
				<p className="p-section">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
					asperiores?
				</p>
				<nav className="nav-tag">
					<ul className="nav-ul">
						<li className="nav-li">
							<Link className="nav-link" to="/works/galerie1">
								Galerie 1
							</Link>
						</li>
						<li className="nav-li">
							<Link className="nav-link" to="/works/galerie2">
								Galerie 2
							</Link>
						</li>
						<li className="nav-li">
							<Link className="nav-link" to="/works/galerie3">
								Galerie 3
							</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/works/galerie1" exact component={GalerieOne} />
					<Route path="/works/galerie2" exact component={GalerieTwo} />
					<Route path="/works/galerie3" exact component={GalerieThree} />
				</Switch>
			</section>
		</Router>
	);
}

export default Works;
