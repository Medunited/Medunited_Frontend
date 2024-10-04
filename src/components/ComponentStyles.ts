import styled from "styled-components";
import { bgColor, borderColor, borderRadius, fontSize, marginTop, textColor, transform } from "../variables/Variables";

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding: 0;
`;

const HeaderContainer = styled.div`
	margin-top: ${marginTop.medium};
	position: relative;
	height: 45px;
	display: flex;
	align-items: center;

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
	${transform.menu_transform};

	&:hover,
	&:focus {
		background-color: ${bgColor.bg_primary_color_hover};
	}

	&:active {
		background-color: ${bgColor.bg_primary_color};
	}
`;

const OverviewWrapper = styled.div`
	background-color: ${textColor.text_white};
	border-radius: ${borderRadius.big};
	padding: 1.5rem 0rem 1.5rem 2.5rem;
	border: 1px solid ${borderColor.border_color};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.08);
	}

	& .overview-text {
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
			color: ${textColor.text_primary_light_1};
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
	font-size: ${fontSize.font_size_medium};

	& .showingItemsNumber {
		// font-size: ${fontSize.font_size_small};
	}

	& .item-per-page {
		font-weight: 400;
		margin: 0 2.5rem 0 0;
		display: flex;
		align-items: center;
		position: relative;

		& .text {
			margin: 0 1rem 0 0;
		}

		& .page-number-list,
		& .select-page-number {
			border: 1px solid ${borderColor.border_color};
		}

		& .page-number-list {
			padding: 0.5rem 0;
			position: absolute;
			right: -7px;
			bottom: 30px;
			background-color: ${bgColor.bg_white};
			border-radius: 3px;

			& .page-no {
				cursor: pointer;
				padding: 0.2rem 2rem 0.2rem 1.5rem;

				&:hover {
					background-color: ${bgColor.bg_secondary_color_hover};
				}
			}
		}
		& .select-page-number {
			cursor: pointer;
			padding: 0.5rem 1rem;
			border-radius: 3px;

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			& .page-number {
				margin: 0 0.1rem 0 0;
			}
		}
	}

	& ul {
		display: flex;
		padding: 0;
		margin: 0;

		& li {
			background-color: ${bgColor.bg_white};
			border: 1px solid ${borderColor.border_color};
			margin: 0 0.1rem 0 0;
			border-radius: 3px;
			font-size: ${fontSize.font_size_medium_1};
			${transform.menu_transform};

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			&.selected {
				background-color: ${bgColor.bg_dark};
				color: #fff;
			}

			& a {
				display: block;
				padding: 0.5rem 1rem;
				color: inherit;
				border-radius: 3px;

				&[rel="prev"]:focus,
				&[rel="prev"]:active,
				&[rel="next"]:focus,
				&[rel="next"]:active {
					background-color: ${bgColor.bg_dark};
					color: #fff;
				}
			}
		}
	}

	& .goTo {
		display: flex;
		align-items: center;
		margin: 0 0 0 2rem;

		& .go-to-page {
			font-weight: 400;
			cursor: pointer;
		}

		& .input-page-no {
			align-self: stretch;
			margin: 0 1rem;
			width: 7rem;
			border-radius: 3px;
			border: 1px solid ${borderColor.border_color};
			padding: 0 1rem;
		}

		& .btn-go {
			background-color: ${bgColor.bg_dark};
			border-radius: 3px;
			color: #fff;
			padding: 0.5rem 1.5rem;
			border: 1px solid ${borderColor.border_color};
			${transform.menu_transform};

			&[disabled] {
				background-color: ${bgColor.input_bg_color};
				color: ${textColor.text_primary_light};
			}
		}
	}

	& .pagination {
		display: flex;
		align-items: center;

		& .pagination-page-numbers {
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
				border: 1px solid ${borderColor.border_color};

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
	}
`;

const PopUpWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 2;
	backdrop-filter: blur(0.5px);

	& .popup-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 400px;
		background-color: ${bgColor.bg_white};
		margin: 30px auto;
		border-radius: 10px;
		padding: 1rem 2rem 1.5rem 3rem;

		& .text-container {
			& svg {
				color: ${bgColor.bg_green};
				height: 50px;
				width: 50px;
			}
		}

		& .btn_wrapper {
			display: flex;
			align-items: center;
			justify-content: end;

			margin: 5rem 0 0 0;

			& .btn_close {
				color: inherit;
				border: 1px solid ${borderColor.border_color};
				background-color: ${bgColor.bg_secondary_color_hover};
				padding: 0rem 3rem;
				align-self: stretch;
				border-radius: 20px;
				margin: 0 0.5rem 0 0;
				${transform.menu_transform};
			}
		}
	}
`;

export { Heading, BtnPrimaryWrapper, Wrapper, OverviewWrapper, HeaderContainer, HeadingSecondaryContainer, PaginationContainer, PopUpWrapper };
