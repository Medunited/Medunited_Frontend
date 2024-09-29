import styled from "styled-components";
import { bgColor, borderColor, borderRadius, fontSize, textColor, transform } from "../../variables/Variables";

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

const SelectDoctorContainer = styled.section`
	background-color: ${bgColor.bg_white};
	border-radius: ${borderRadius.small};

	& .select-doctor-wrapper {
		padding: 2rem 4rem;

		& .heading_1 {
			font-size: ${fontSize.font_size_medium_1};
			font-weight: 500;
		}

		& .heading_2 {
			color: ${textColor.text_primary_light};
			padding: 0 0 0 2rem;
			margin: 0 0 1rem 0;
			display: block;
			font-weight: 500;
		}

		& .select-doctor-info {
			font-size: ${fontSize.font_size_small};

			& .doctor-info {
				& .department,
				& .selected-available-doctor {
					background-color: ${bgColor.input_bg_color_1};
					border-radius: 30px;
					padding: 1rem 2rem;
					cursor: pointer;

					position: relative;

					&:hover {
						background-color: ${bgColor.bg_secondary_color_hover};
					}

					&:active {
						background-color: ${bgColor.input_bg_color_1};
					}
				}

				& .departments-list {
					position: absolute;
					top: 100%;
					right: 0;
					z-index: 1000;
					// border: 1px solid ${borderColor.border_color};
					border-radius: 5px;
					background-color: ${bgColor.input_bg_color_1};
					transition: all 2s;
					padding: 0.7rem 0;

					& .department-name,
					& .doctor-name {
						padding: 0.7rem 4rem;

						&:hover {
							background-color: ${bgColor.bg_secondary_color_hover};
						}
					}
				}

				& .selected-department,
				& .selected-doctor {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}

			& .select-department-wrapper,
			& .select-date,
			& .select-time,
			& .available-doctor {
				margin: 2rem 0 0 0;
			}

			& .select-date {
				& .dates {
					background-color: ${bgColor.input_bg_color_1};
					border-radius: 30px;
					height: 35px;

					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			& .select-time {
				& .timesContainer {
					display: flex;
					flex-wrap: wrap;

					& .time {
						width: 9.5rem;
						height: 4rem;
						background-color: ${bgColor.input_bg_color_1};
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 30px;
						margin: 0 1rem 1.2rem 0;
						cursor: pointer;
						color: inherit;
						font-size: 1.32rem;
						${transform.menu_transform};

						&:hover {
							background-color: ${bgColor.bg_secondary_color_active};
							color: inherit;
						}

						&.active {
							background-color: ${bgColor.bg_secondary_color};
							color: ${textColor.text_white};
						}
					}
				}
			}
		}
	}
`;

const PatientInfoWrapper = styled.section`
	& .patient-info-container {
		background-color: ${bgColor.bg_white};
		border-radius: ${borderRadius.small};
		padding: 2rem 8rem 4rem 4rem;
		font-size: ${fontSize.font_size_small};

		& .heading_1 {
			font-size: ${fontSize.font_size_medium_1};
			font-weight: 500;
		}

		& .heading_2 {
			color: ${textColor.text_primary_light};
			display: block;
			font-weight: 500;
		}

		& .patient-details {
			margin: 2.5rem 0 0 0;

			& .visited-or-first-time {
				display: flex;
				padding: 0 0 0 3rem;

				& .visited {
					margin: 0 4rem 0 0;
				}

				& .visited,
				& .first-time {
					display: flex;
					align-items: center;
				}

				& input {
					width: 13px;
					height: 13px;
					margin: 0 1rem 0 0;
				}
			}

			& .patient-details {
				margin: 2.5rem 0 0 0;

				& .heading_2 {
					padding: 0 0 0 3rem;
				}

				& input {
					width: 100%;
					background-color: ${bgColor.input_bg_color_1};
					padding: 1rem 3rem;
					border-radius: 30px;
					margin: 1rem 0 0 0;
					color: inherit;
				}
			}

			& .patient-details_2 {
				margin: 3rem 0 0 0;
				display: flex;
				justify-content: space-between;

				& .patient-number {
					margin: 0 2rem 0 0;
				}
			}
		}
	}

	& .get-appointment-btn {
		display: flex;
		justify-content: end;
		margin: 4rem 0 0 0;

		& button {
			background-color: ${bgColor.bg_primary_color};
			color: ${textColor.text_white};
			padding: 1rem 3rem;
			border-radius: 3px;
			${transform};

			&:hover {
				background-color: ${bgColor.bg_primary_color_hover};
			}

			&:active {
				background-color: ${bgColor.bg_primary_color};
			}
		}
	}
`;

export { AppointmentListWrapper, SelectDoctorContainer, PatientInfoWrapper };
