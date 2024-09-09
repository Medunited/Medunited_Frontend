import styled from "styled-components";
import { bgColor, borderColor, icon, padding, textColor, transform } from "../../variables/Variables";
import { NavMenuImg } from "../../assets";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${padding.nav_padding};
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

	// position: relative;

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
		color: ${textColor.text_primary_light};
		${transform.text_transform};

		&:hover {
			color: ${textColor.text_dark};
		}

		&:active {
			color: ${textColor.text_primary_light};
		}
	}

	& svg {
		fill: ${bgColor.bg_primary_color};
		height: ${icon.size};
		width: ${icon.size};
		margin: 0 0.5rem 0 0;
	}
`;

const NavMenu = styled.div`
	background-image: url(${NavMenuImg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 5px;
	height: 4rem;
	width: 4rem;
	cursor: pointer;
	${transform.menu_transform};

	position: relative;

	& .icon-container {
		background-color: ${bgColor.bg_color_light};
		height: 100%;
		width: 100%;
		border-radius: inherit;

		& .icon {
			background-color: ${bgColor.bg_secondary_color};
			border-radius: 100%;
			height: 2.5rem;
			width: 2.5rem;
			position: absolute;
			bottom: -0.5rem;
			right: -1rem;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

export { Nav, NavList, NavListItems, NavMenu };
