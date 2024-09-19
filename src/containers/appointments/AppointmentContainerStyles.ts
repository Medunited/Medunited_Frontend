import styled from "styled-components";
import { bgColor, borderColor, fontSize, textColor } from "../../variables/Variables";

const AppointmentListWrapper = styled.div`
	& .appointment-list_heading {
		display: flex;
		padding: 1rem 3rem;
		border-bottom: 2px solid ${bgColor.bg_secondary_color};
	}

	& .appointment_details_wrapper {
		// height: 65vh;
		// overflow-y: auto;

		// &::-webkit-scrollbar {
		// 	width: 8px;
		// }

		// &::-webkit-scrollbar-thumb {
		// 	background-color: rgba(0, 0, 0, 0.2);
		// 	cursor: pointer;
		// 	border-radius: 5px;
		// }

		// &::-webkit-scrollbar-track-piece {
		// 	background-color: ${bgColor.bg_white};
		// }

		& .appointment_details {
			padding: 1.2rem 2rem 1.2rem 3rem;
			display: flex;
			border-bottom: 1px solid ${borderColor.border_color};
			cursor: pointer;

			&:nth-child(even) {
				background-color: ${bgColor.input_bg_color};
			}

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			& .patient-details {
				margin: 0 4rem 0 0;

				& .patient-icon {
					margin: 0 1.5rem 0 0;
					height: 3.5rem;
					width: 3.5rem;
					border-radius: 7px;
					background-color: ${textColor.text_primary_light};
					font-size: 2rem;
					color: ${textColor.text_white};

					display: flex;
					align-items: center;
					justify-content: center;

					& svg {
						width: 1.7rem;
						height: 1.7rem;
					}
				}
			}

			& .heading_1,
			& .heading_2 {
				display: block;
			}

			& .heading_1,
			& .status {
				font-size: ${fontSize.font_size_medium};
				font-weight: 500;
			}

			& .heading_2 {
				font-size: ${fontSize.font_size_small};
				color: ${textColor.text_primary_light};
				margin: 0.4rem 0 0 0;
			}

			& .section_2 {
				& .doctor {
					& .doctor-icon {
						margin: 0 1.5rem 0 0;
						height: 3.5rem;
						width: 3.5rem;
						border-radius: 3px;
						background-color: ${textColor.text_primary_light};
						font-size: 2rem;
						color: ${textColor.text_white};

						display: flex;
						align-items: center;
						justify-content: center;

						& svg {
							width: 1.7rem;
							height: 1.7rem;
						}
					}
				}
			}
		}
	}
`;

export { AppointmentListWrapper };
