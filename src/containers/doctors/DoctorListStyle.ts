import styled from "styled-components";
import { bgColor, borderColor, fontSize, marginTop, textColor } from "../../variables/Variables";

const DoctorListWrapper = styled.div`
	display: flex;
	background-color: ${bgColor.bg_white};
	border-radius: 3px;
	padding: 0 2rem 1.5rem 2rem;
	width: 100%;

	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

	height: 110px;

	& .doctor-photo {
		background-color: ${bgColor.bg_color_light};
		margin: 0 1.5rem 0 0;
		width: 80px;
	}

	& .doctor-info-container {
		display: flex;
		flex-direction: column;
		justify-content: end;

		& .section_1 {
			font-size: ${fontSize.font_size_medium};

			& .doctor-department {
				color: ${textColor.text_secondary_color_light};
				font-size: ${fontSize.font_size_tiny};
				font-weight: 500;
			}

			& .doctor-info {
				display: flex;
				justify-content: space-between;
				align-items: center;

				& .doctor-name {
					font-weight: 500;
				}

				& svg {
					color: inherit;
					height: 15px;
					width: 15px;
				}
			}
		}

		& .section_2 {
			font-size: ${fontSize.font_size_small};

			& .text {
				display: block;
				color: ${textColor.text_primary_light};
			}

			& .text_2 {
				font-size: ${fontSize.font_size_tiny};
			}

			& .feedbacks {
				& .rating {
				}
			}
		}
	}
`;

const DoctorInformationWrapper = styled.section`
	& .section_1,
	& .section_2 {
		background-color: ${bgColor.bg_white};
		border-radius: 3px;
		// border: 1px solid ${borderColor.border_color};
	}

	& .heading_small {
		display: block;
		color: ${textColor.text_primary_light};
		font-size: ${fontSize.font_size_tiny};
	}

	& .heading_medium {
		font-weight: 500;
		font-size: ${fontSize.font_size_small};
		display: block;
	}

	& .section_1 {
		padding: 0.5rem 0 1rem 0;

		& .photo_container {
			display: flex;
			align-items: start;
			justify-content: space-between;

			& .doctor_photo {
				display: flex;
				align-items: start;
				justify-content: space-between;

				padding: 0 1rem 0 0;

				&-img {
					width: 75px;
					height: 90px;
					background-color: rgba(0, 0, 0, 0.4);
				}

				& .btn_edit {
					margin: 0.5rem 0 0 0;
					color: ${textColor.text_blue};
					font-weight: 500;
					font-size: ${fontSize.font_size_medium};
				}
			}
		}

		& .doctor_details {
			text-align: center;
			margin: 2rem 0;

			& .doctor_name {
				display: block;
				font-size: ${fontSize.font_size_medium_1};
				font-weight: 500;
			}

			& .doctor_department {
				font-size: ${fontSize.font_size_small};
				color: ${textColor.text_primary_light};
			}
		}

		& .doctor_fee_review {
			display: flex;
			justify-content: space-between;
			padding: 0 3rem;

			& .feedbacks {
				text-align: right;
			}

			& .reviews {
				display: flex;
				align-items: center;
				font-size: ${fontSize.font_size_small};

				& svg {
					height: 13px;
					width: 13px;
				}

				& .rating {
					margin: 0 0.5rem;
				}

				& .number_of_review {
					color: ${textColor.text_primary_light};
				}
			}
		}
	}

	& .section_2 {
		margin: 0.5rem 0 0 0;
		padding: 1.5rem 1.5rem;

		& .heading_medium {
			margin: 0 0 0.7rem 0;
		}

		& .doctor_services {
			margin: 1.5rem 0 0 0;
		}
	}
`;

const DoctorAppointmentWrapper = styled.section`
	& .appointment-heading {
		background-color: ${bgColor.bg_white};
		border-radius: 3px;
		border-bottom: 1.5px solid ${bgColor.bg_secondary_color};

		padding: 1.3rem 4rem 1.3rem 8rem;
		display: flex;
		justify-content: space-between;

		& .date {
			margin: 0 4rem 0 0;
		}
	}

	& .upcoming-appointments {
		margin: ${marginTop.medium} 0 0 0;

		& .heading {
			font-size: ${fontSize.font_size_small};
			display: flex;

			& .text {
				flex-grow: 1;
				margin: 0 0 0 2rem;
				font-weight: 500;
			}
		}

		& .no-appointment {
			font-size: ${fontSize.font_size_small};
			margin: 2rem 0 0 6rem;
		}

		& .appointment-container {
			margin: ${marginTop.small} 0 0 0;

			& .appointment_wrapper {
				&:nth-child(even) {
					& .appointment {
						background-color: ${bgColor.input_bg_color};
					}
				}

				& .line {
					margin: 15px -4px 0 auto;
					height: 100%;
					display: flex;
					justify-content: center;

					position: relative;
				}

				& .line-progress {
					&::before {
						position: absolute;
						top: 100%;
						content: "";
						height: 49px;
						width: 0.7px;
						background-color: rgba(0, 0, 0, 0.08);
					}
				}

				& .line-progress_2 {
					&::before {
						position: absolute;
						top: 100%;
						content: "";
						height: 102px;
						width: 0.7px;
						background-color: rgba(0, 0, 0, 0.08);
					}
				}

				& .appointment {
					background-color: ${bgColor.bg_white};
					flex-grow: 1;
					margin: 0 0 0 1rem;
					display: flex;
					justify-content: space-between;
					padding: 1.4rem 3rem 1.4rem 2rem;
					cursor: pointer;

					&:hover {
						background-color: ${bgColor.input_bg_color};
					}

					& .doctor-name {
						margin: 0 0 0 3rem;

						& .patient-icon {
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

					& .sub-heading {
						display: block;
					}

					& .sub-heading_1,
					& .status {
						font-size: ${fontSize.font_size_medium};
						font-weight: 500;
					}

					& .sub-heading_2 {
						font-size: ${fontSize.font_size_tiny};
						color: ${textColor.text_primary_light};
						margin: 0.3rem 0 0 0;
					}
				}
			}

			& .appointment_wrapper:not(:last-child) {
				& .appointment {
					border-bottom: 1px solid ${borderColor.border_color};
				}
			}
		}
	}
`;

export { DoctorListWrapper, DoctorInformationWrapper, DoctorAppointmentWrapper };
