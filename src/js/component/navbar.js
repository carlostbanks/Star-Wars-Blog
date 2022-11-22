import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">Home</Link>
			<Link to="/people">People</Link>
			<Link to="/planets">Planets</Link>
			<Link to="/vehicles">Vehicles</Link>
		</nav>
	);
};
