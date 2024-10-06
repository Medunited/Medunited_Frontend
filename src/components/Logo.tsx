import { Link } from "react-router-dom";
import { LogoImg } from "../assets";

const Logo = () => {
	return (
		<div>
			<Link to="/">
				<img src={LogoImg} alt="Logo" style={{ width: "50px" }} />
				<span style={{ fontSize: "2rem", fontWeight: "600", fontFamily: "monospace", color: "rgb(89,89,89)" }}>HospitalBridge</span>
			</Link>
		</div>
	);
};

export default Logo;
