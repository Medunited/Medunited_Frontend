import { ReactNode } from "react";
import { Container } from ".";
import { HeaderContainer } from "./ComponentStyles";

interface HeaderProps {
	children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	return (
		<HeaderContainer>
			<Container>
				<div className="wrapper">{children}</div>
			</Container>
		</HeaderContainer>
	);
};

export default Header;
