import styled from "styled-components";
import { bgColor, borderColor, fontSize, icon, textColor } from "../../variables/Variables";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 2rem 0rem 5rem;
	background-color: ${bgColor.bg_white};
	border-bottom: 1px solid ${borderColor.border_color};
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	align-self: stretch;
	margin: 0 0 0 3rem;
`;

const NavListItems = styled.li`
	margin: 0 5rem 0 0;
	display: flex;
	align-items: center;
	height: 100%;

	// position: relative;s

	// &:before {
	// 	content: "";
	// 	display: block;
	// 	position: absolute;
	// 	bottom: 0;
	// 	height: 2px;
	// 	width: 0;
	// 	background-color: ${bgColor.bg_primary_color};
	// 	border-radius: 3px;
	// 	transition: all 0.2s;
	// }

	// &:hover {
	// 	&:before {
	// 		width: 100%;
	// 	}
	// }

	& a {
		display: block;
		color: inherit;
		// font-size: ${fontSize.font_size_small};
		color: ${textColor.text_primary_light};
		transform: scale(0.8);
		transition: all 0.2s;

		&:hover {
			color: ${textColor.text_dark};
			transform: scale(0.9);
		}

		&:active {
			color: ${textColor.text_primary_light};
			transform: scale(0.8);
		}
	}

	& svg {
		fill: ${bgColor.bg_primary_color};
		height: ${icon.size};
		width: ${icon.size};
		margin: 0 0.5rem 0 0;
	}
`;

const NavMenu = styled.div``;

export { Nav, NavList, NavListItems, NavMenu };
