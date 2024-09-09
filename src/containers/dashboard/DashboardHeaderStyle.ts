import styled from "styled-components";
import { bgColor, fontSize, marginTop, padding, textColor } from "../../variables/Variables";

const DashboardHeaderContainer = styled.div`
	padding: ${padding.container_padding};
	margin-top: ${marginTop.medium};

	border-left: 10px solid ${bgColor.bg_primary_color};

	& .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.3rem 0;
	}
`;

const Button = styled.button`
	background-color: ${bgColor.bg_secondary_color};
	border-radius: 30px;
	padding: 0.5rem 1rem 0.5rem 2rem;
	color: ${textColor.text_white};
	font-size: ${fontSize.font_size_medium};
	font-weight: 500;

	display: flex;
	align-items: center;

	& .time-text {
		margin: 0 1rem 0 0;
	}
`;

export { DashboardHeaderContainer, Button };
