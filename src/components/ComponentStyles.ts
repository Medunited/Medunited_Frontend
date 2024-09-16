import styled from "styled-components";
import { bgColor, borderColor, fontSize, marginTop, textColor } from "../variables/Variables";

const Wrapper = styled.div`
	width: 1100px;
	margin: 0 auto;

	@media screen and (min-width: 2100px) {
		// width: 60%;
	}

	@media screen and (max-width: 1290px) {
		width: 1200px;
	}
`;

const Heading = styled.h1`
	font-size: ${fontSize.font_size_big};
	font-weight: 600;
`;

const BtnPrimaryWrapper = styled.button`
	background-color: ${bgColor.bg_primary_color};
	color: ${textColor.text_white};
	border-radius: 30px;
	transition: all 0.2s;

	&:hover {
		background-color: ${bgColor.bg_primary_color_hover};
	}

	&:active {
		background-color: ${bgColor.bg_primary_color};
	}
`;

const OverviewWrapper = styled.div`
	background-color: ${textColor.text_white};
	border-radius: 20px;
	padding: 1.5rem 0rem 1.5rem 2.5rem;
	border: 1px solid ${borderColor.border_color};
	cursor: pointer;

	& .overview-text {
		color: ${textColor.text_primary_light};
		font-size: ${fontSize.font_size_medium};
		font-weight: 500;
	}

	& .overview-container {
		margin: ${marginTop.medium} 0 0 0;

		display: flex;
		align-items: center;

		& .overview-icon {
			margin: 0 2rem 0 0;
			border-radius: 100%;
			width: 5rem;
			height: 5rem;

			display: flex;
			align-items: center;
			justify-content: center;

			& svg {
				fill: ${textColor.text_white};
				height: 3rem;
				width: 3rem;
			}
		}

		& .overview-count {
			font-size: 3.5rem;
			font-weight: 550;
		}
	}
`;

export { Heading, BtnPrimaryWrapper, Wrapper, OverviewWrapper };
