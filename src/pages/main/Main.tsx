import { Link } from "react-router-dom";
import * as MainStyles from "./MainStyles";
// import * as Container from "../../containers";

const Main = () => {
	return (
		<MainStyles.MainWrapper>
			<div className="d-flex flex-column h-100 justify-content-center align-items-center">
				<h1 style={{ fontSize: "4rem" }}>Medunite Website Coming Soon!!</h1>
				<p style={{ fontSize: "2rem" }}>Dashboard</p>
				<Link to="/login">Login</Link>
			</div>

			{/* <Container.NavBar />

			<Outlet /> */}
		</MainStyles.MainWrapper>
	);
};

export default Main;
