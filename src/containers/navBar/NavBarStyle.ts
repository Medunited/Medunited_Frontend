import styled from "styled-components";
import { bgColor, borderColor, fontSize, icon, transform } from "../../variables/Variables";
import { NavMenuImg } from "../../assets";

const Nav = styled.nav`
	padding: 1rem 0rem 1rem 0rem;
	background-color: ${bgColor.bg_white};
	border-bottom: 1px solid ${borderColor.border_color};

	position: sticky;
	right: 0;
	left: 0;
	top: 0;
	z-index: 1;

	& .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	align-self: stretch;
	padding: 0;
`;

const NavListItems = styled.li`
	display: flex;
	align-items: center;
	height: 100%;
	cursor: pointer;
	font-size: ${fontSize.font_size_small};

	${transform.text_transform};

	&:not(:last-child) {
		margin: 0 4rem 0 0;
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

	&:hover {
		& .icon-container {
			& .icon {
				background-color: ${bgColor.bg_secondary_color_light};
			}
		}
	}

	&:active {
		& .icon-container {
			& .icon {
				background-color: ${bgColor.bg_secondary_color};
			}
		}
	}

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
