import { Link } from "react-router-dom";
import { LogoImg } from "../assets";
import { textColor } from "../variables/Variables";

const Logo = () => {
	return (
		<div>
			<Link to="/">
				<img src={LogoImg} alt="Logo" style={{ width: "50px" }} />
				<span style={{ fontSize: "2rem", fontWeight: "600", fontFamily: "monospace", color: textColor.text_primary_color }}>HospitalBridge</span>
			</Link>
		</div>
	);
};

export default Logo;
