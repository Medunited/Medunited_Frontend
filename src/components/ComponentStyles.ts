import styled from "styled-components";
import { bgColor, textColor } from "../variables/Variables";

const Heading = styled.h1``;

const BtnPrimaryWrapper = styled.button`
	border: none;
	background-color: ${bgColor.btn_primary_color};
	color: ${textColor.text_white};
	border-radius: 30px;
	transition: all 0.2s;

	&:hover {
		background-color: ${bgColor.btn_primary_color_hover};
	}

	&:active {
		background-color: ${bgColor.btn_primary_color};
	}
`;

export { Heading, BtnPrimaryWrapper };
