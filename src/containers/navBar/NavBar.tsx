import { Link } from "react-router-dom";
import * as NavStyle from "./NavBarStyle";
import { Logo } from "../../components";
import { navLink } from "./useNavBar";

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
				<div className="">&nbsp;</div>
				<div className="">icon</div>
			</NavStyle.NavMenu>
		</NavStyle.Nav>
	);
};

export default NavBar;
