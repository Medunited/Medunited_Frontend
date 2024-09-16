import * as NavStyle from "./NavBarStyle";
import { Container, Logo } from "../../components";
import { IoIosMenu } from "react-icons/io";
import { bgColor } from "../../variables/Variables";
import { ReactNode } from "react";

type NavLink = {
	name: string;
	icon: ReactNode;
};

interface NavLinkProps {
	navLink: NavLink[];
}

const NavBar = ({ navLink }: NavLinkProps) => {
	return (
		<NavStyle.Nav>
			<Container>
				<div className="wrapper">
					<Logo />
					<NavStyle.NavList>
						{navLink.map((param) => (
							<NavStyle.NavListItems key={param.name}>
								<span>{param.icon}</span>
								<span>{param.name}</span>
							</NavStyle.NavListItems>
						))}
					</NavStyle.NavList>
					<NavStyle.NavMenu>
						<div className="icon-container">
							<div className="icon">
								<IoIosMenu color={bgColor.bg_white} size={18} />
							</div>
						</div>
					</NavStyle.NavMenu>
				</div>
			</Container>
		</NavStyle.Nav>
	);
};

export default NavBar;
