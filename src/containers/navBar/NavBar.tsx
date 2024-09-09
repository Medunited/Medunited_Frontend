import { Link } from "react-router-dom";
import * as NavStyle from "./NavBarStyle";
import { Logo } from "../../components";
import { navLink } from "./useNavBar";
import { IoIosMenu } from "react-icons/io";
import { bgColor } from "../../variables/Variables";

const NavBar = () => {
	return (
		<NavStyle.Nav>
			{/* <div className="d-flex"> */}
			<Logo />

			<NavStyle.NavList>
				{navLink.map((param) => (
					<NavStyle.NavListItems key={param.name}>
						<Link to={param.link}>
							<span>{param.icon}</span>
							<span>{param.name}</span>
						</Link>
					</NavStyle.NavListItems>
				))}
			</NavStyle.NavList>
			{/* </div> */}

			<NavStyle.NavMenu>
				<div className="icon-container">
					<div className="icon">
						<IoIosMenu color={bgColor.bg_white} size={18} />
					</div>
				</div>
			</NavStyle.NavMenu>
		</NavStyle.Nav>
	);
};

export default NavBar;
