import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<div>NavBar</div>
			<Link to="/login">Login</Link>
			<Link to="/appointments">Appointments</Link>
			<Link to="/doctors">Doctors</Link>
		</div>
	);
};

export default NavBar;
