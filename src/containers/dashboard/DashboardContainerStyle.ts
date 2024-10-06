import styled from "styled-components";
import { bgColor, borderColor, borderRadius, fontSize, marginTop, textColor, transform } from "../../variables/Variables";

const Button = styled.button`
	background-color: ${bgColor.bg_secondary_color_light};
	border-radius: 30px;
	padding: 0.5rem 1rem 0.5rem 2rem;
	color: ${textColor.text_white};
	font-size: ${fontSize.font_size_medium};
	font-weight: 500;
	${transform.menu_transform};

	display: flex;
	align-items: center;

	&:hover,
	&:focus {
		background-color: ${bgColor.bg_secondary_color_light};
	}

	&:active {
		background-color: ${bgColor.bg_secondary_color_light};
	}

	& .time-text {
		margin: 0 1rem 0 0;
	}
`;

const DashboardOverviewWrapper = styled.section`
	display: flex;
	margin: ${marginTop.big} 0 0 0;

	.overview {
		transition: all 0.2s;
	}

	&:hover .overview:not(:hover) {
		transform: scale(0.95);
	}

	& .overview:not(:last-child) {
		margin: 0 1.5rem 0 0;
	}
`;

const AddNewPatientContainer = styled.section`
	border-radius: ${borderRadius.big};
	background-color: ${bgColor.bg_secondary_color};
	padding: 3.2rem 3rem;

	& .new-patient-container {
		color: ${textColor.text_white};
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const PatientAppointmentContainer = styled.section`
	background-color: ${bgColor.bg_white};
	border-radius: ${borderRadius.big};
	padding: 2.5rem 3rem 2rem 3rem;
	margin: ${marginTop.small} 0 0 0;
	border: 1px solid ${borderColor.border_color};

	& .patient-appointment-details {
		display: flex;
		align-items: center;
		margin: ${marginTop.medium} 0 0 0;

		& .patients-visit-container {
			display: flex;
			align-items: center;

			&:not(:first-child) {
				margin: ${marginTop.big} 0 0 0;
			}

			&_2 {
				display: flex;
				align-items: baseline;
				margin: 0 0 0 5rem;

				& .patients-visit-type {
					font-size: ${fontSize.font_size_medium};
				}
			}

			& .icon {
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
		}

		& .pie-chart-container {
			display: flex;
			align-items: center;
			justify-content: center;

			& .pie-chart {
				background-color: ${bgColor.bg_green};
				border-radius: 100%;
				height: 25rem;
				width: 25rem;
				text-align: center;
			}
		}
	}
`;

const PatientChartOverviewContainer = styled.section`
	border-radius: ${borderRadius.big};
	padding: 2.5rem 3rem 2rem 3rem;
	background-color: ${bgColor.bg_white};
	border: 1px solid ${borderColor.border_color};

	//  Change later

	height: 30rem;

	& .chart-nav {
		display: flex;
		margin: 0;
		padding: 0;

		& .chart-nav-listItems {
			// color: ${textColor.text_primary_light};
			font-size: ${fontSize.font_size_big};
			font-weight: 500;
			cursor: pointer;

			&:nth-child(2) {
				margin: 0 3rem;
			}

			&.active {
				color: ${bgColor.bg_primary_color};
				font-weight: 600;
			}
		}
	}

	& .chart {
		margin: ${marginTop.big} 0 0 0;
	}
`;

const TodayAppointmentContainer = styled.section`
	margin: ${marginTop.small} 0 0 0;
	border-radius: ${borderRadius.big};
	background-color: ${bgColor.bg_white};
	overflow: hidden;
	padding-bottom: 0.5rem;
	border: 1px solid ${borderColor.border_color};

	& .today-appointments_header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 2.5rem 3rem 0 3rem;

		& .see-all {
			font-size: ${fontSize.font_size_big};
			color: ${textColor.text_secondary_color_light};
			font-weight: 500;
			${transform};

			&:active {
				color: ${textColor.text_secondary_color_light};
			}
		}
	}

	& .today-appointments_patients {
		margin: ${marginTop.medium} 0 0 0;

		&-details {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.5rem 3rem 1.5rem 3rem;
			margin: 0;
			cursor: pointer;

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			&:active {
				background-color: ${bgColor.bg_secondary_color_active};
			}

			& .patients-details-container {
				display: flex;
				align-items: center;
				margin: 0;

				& .patient-icon {
					margin: 0 2.5rem 0 0;
					height: 5rem;
					width: 5rem;
					border-radius: 10px;
					background-color: ${textColor.text_primary_light};
					font-size: 2rem;
					color: ${textColor.text_white};

					display: flex;
					align-items: center;
					justify-content: center;

					& svg {
						width: 2.5rem;
						height: 2.5rem;
					}
				}

				& .patient-details {
					& .patient-name {
						font-size: ${fontSize.font_size_medium};
						font-weight: 550;
					}

					& .patient-scheduled-doctor {
						& .with {
							font-size: ${fontSize.font_size_small};
							margin: 0 0.5rem 0 0;
							color: ${textColor.text_primary_light};
						}

						& .doctor-name {
							color: ${textColor.text_secondary_color};
							font-weight: 500;
							font-size: ${fontSize.font_size_medium};
						}
					}
				}
			}

			& .appointment-time {
				font-weight: 550;
				font-size: ${fontSize.font_size_medium};
			}
		}
	}
`;

const PatientReviewContainer = styled.section`
	padding: 2.5rem 3rem 2rem 3rem;
	background-color: ${bgColor.bg_white};
	border-radius: ${borderRadius.big};
	margin: ${marginTop.small} 0 0 0;
	border: 1px solid ${borderColor.border_color};

	& .review-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& .review-container {
			display: flex;
			align-items: center;

			& .total-reviews {
				margin: 0 0 0 3rem;
				color: ${textColor.text_primary_light};
			}
		}

		& .review-emoji {
			display: flex;
			align-items: center;

			& .emoji {
				border-radius: 100%;
				cursor: pointer;
				${transform};

				position: relative;

				& span {
					font-size: 2.5rem;
				}

				& .emoji-meaning {
					display: none;
					position: absolute;
					top: -45px;
					left: -10px;
					color: ${textColor.text_white};
					background-color: ${bgColor.bg_dark};
					padding: 0.7rem 1.5rem;
					border-radius: 5px;
					font-size: ${fontSize.font_size_medium};
				}

				&:hover {
					& .emoji-meaning {
						display: block;
					}
				}

				&:not(:last-child) {
					margin: 0 2rem 0 0;
				}
			}
		}
	}

	& .review-questions-container {
		margin: ${marginTop.big} 0 0 0;

		& .review-feedbacks {
			&:not(:first-child) {
				margin: ${marginTop.medium} 0 0 0;
			}

			& .review-question {
				font-weight: 500;
			}

			& .review-progress-summary {
				margin: ${marginTop.small} 0 0 0;

				& .progress-bar_container {
					height: 1.4rem;

					display: flex;

					& .progress-bar-wrapper {
						position: relative;
						text-align: center;
						cursor: pointer;

						&:first-child {
							border-top-left-radius: 10px;
							border-bottom-left-radius: 10px;
						}
						&:last-child {
							border-top-right-radius: 10px;
							border-bottom-right-radius: 10px;
						}

						& .review-details {
							display: none;
							position: absolute;
							top: -40px;
							left: 30%;

							& .emoji-container {
								display: flex;
								background-color: ${bgColor.bg_dark};
								color: ${textColor.text_white};
								padding: 0.5rem 0.7rem;
								border-radius: 5px;

								& .emoji {
									margin: 0 0.5rem 0 0;
								}
							}

							& .arrow {
								margin: -10px 0 0 0;
								text-align: center;

								& svg {
									fill: ${bgColor.bg_dark};
								}
							}
						}

						&:hover {
							& .review-details {
								display: block;
							}
						}
					}

					& .progress-bars {
						height: 100%;
						cursor: pointer;
						position: relative;
					}
				}
			}
		}
	}

	& .btn-see-all-reviews {
		text-align: right;
		margin: ${marginTop.medium} 0 0 0;

		& button {
			color: ${textColor.text_secondary_color_light};
			font-weight: 500;
			${transform};

			&:active {
				color: ${textColor.text_secondary_color_light};
			}
		}
	}
`;

const DoctorAvailabilityContainer = styled.section`
	background-color: ${bgColor.bg_white};
	margin: ${marginTop.small} 0 0 0;
	border-radius: ${borderRadius.big};
	padding-bottom: 1rem;
	border: 1px solid ${borderColor.border_color};

	& .doctor-availability_header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2.5rem 3rem 0rem 3rem;

		& .see-all {
			font-size: ${fontSize.font_size_big};
			color: ${textColor.text_secondary_color_light};
			font-weight: 500;
			${transform};

			&:active {
				color: ${textColor.text_secondary_color_light};
			}
		}
	}

	& .doctors-list {
		margin: ${marginTop.small} 0 0 0;

		& .doctor-availability-details {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1.5rem 3rem 1.5rem 3rem;
			margin: 0;
			cursor: pointer;

			&:hover {
				background-color: ${bgColor.bg_secondary_color_hover};
			}

			&:active {
				background-color: ${bgColor.bg_secondary_color_active};
			}

			& .doctor-details-container {
				display: flex;

				& .doctor-icon {
					margin: 0 2.5rem 0 0;
					height: 5rem;
					width: 5rem;
					border-radius: 10px;
					background-color: ${textColor.text_primary_light};
					font-size: 2rem;
					color: ${textColor.text_white};

					display: flex;
					align-items: center;
					justify-content: center;

					& svg {
						width: 2.6rem;
						height: 2.6rem;
					}
				}

				& .doctor-details {
					& .doctor-name {
						font-size: ${fontSize.font_size_medium};
						font-weight: 550;
					}

					& .doctor-profession {
						color: ${textColor.text_primary_light};
						font-weight: 500;
						font-size: ${fontSize.font_size_medium};
						margin: 1rem 0 0 0;
					}
				}
			}

			& .doctor-availability {
				font-weight: 550;
				font-size: ${fontSize.font_size_medium};
			}
		}
	}
`;

export { Button, DashboardOverviewWrapper, AddNewPatientContainer, PatientAppointmentContainer, PatientChartOverviewContainer, TodayAppointmentContainer, PatientReviewContainer, DoctorAvailabilityContainer };
