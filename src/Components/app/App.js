import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import Works from "../works/Works";
import About from "../about/About";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Works />
			<About />
		</div>
	);
}

export default App;
