import styled from "styled-components";
import { bgColor, borderColor, fontSize, marginTop, textColor, transform } from "../variables/Variables";

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding: 0;
`;

const HeaderContainer = styled.div`
	margin-top: ${marginTop.medium};
	position: relative;

	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		height: 100%;
		width: 8px;
		background-color: ${bgColor.bg_primary_color};
	}

	& .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.7rem 0;
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
	font-size: ${fontSize.font_size_medium_1};
	${transform};

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
	transition: all 0.2s;

	&:hover {
		transform: scale(1.08);
	}

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

const HeadingSecondaryContainer = styled.h2`
	font-size: ${fontSize.font_size_small};
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 500;
	color: ${textColor.text_primary_light};
`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;

	& .showingItemsNumber {
		font-size: ${fontSize.font_size_medium};
	}

	& .pagination {
		display: flex;
		align-items: center;

		& #active {
			background-color: ${bgColor.bg_dark};
			color: #fff;
		}

		& .paginationBtn {
			background-color: ${bgColor.bg_white};
			border-radius: 3px;
			padding: 0.5rem 1rem;

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			&:active,
			&:focus {
				background-color: ${bgColor.bg_dark};
				color: #fff;
			}

			&:active:not([disabled]),
			&:focus:not([disabled]) {
				${transform.text_transform};
			}

			&[disabled] {
				background-color: ${bgColor.input_bg_color};
				color: ${textColor.text_primary_light};
			}
		}

		& .btn-previous,
		& .btn-next {
			display: flex;
			align-items: center;
		}

		& .pageNumberBtn,
		& .btn-previous {
			margin: 0 0.5rem 0 0;
		}
	}
`;

export { Heading, BtnPrimaryWrapper, Wrapper, OverviewWrapper, HeaderContainer, HeadingSecondaryContainer, PaginationContainer };
