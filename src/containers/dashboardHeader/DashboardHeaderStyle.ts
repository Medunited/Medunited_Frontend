import styled from "styled-components";
import { bgColor, borderRadius, fontSize, marginTop, textColor, transform } from "../../variables/Variables";

const DashboardHeaderContainer = styled.div`
	margin-top: ${marginTop.medium};

	border-left: 10px solid ${bgColor.bg_primary_color};

	& .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.7rem 0;
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

	&:hover {
		background-color: ${bgColor.bg_secondary_color_light};
	}

	&:active {
		background-color: ${bgColor.bg_secondary_color};
	}

	& .time-text {
		margin: 0 1rem 0 0;
	}
`;

const DashboardOverviewWrapper = styled.section`
	display: flex;
	margin: ${marginTop.big} 0 0 0;

	& .overview:not(:last-child) {
		margin: 0 3rem 0 0;
	}
`;

const AppointmentSection = styled.section`
	margin: ${marginTop.medium} 0 0 0;

	display: flex;

	& .section_1 {
		margin: 0 1.5rem 0 0;

		& .chart-overview {
			border-radius: ${borderRadius};
			padding: 2.5rem 3rem 2rem 3rem;
			background-color: ${bgColor.bg_white};

			//  Change later

			height: 30rem;

			& .chart-nav {
				display: flex;
				margin: 0;
				padding: 0;

				& .chart-nav-listItems {
					color: ${textColor.text_primary_light};
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
		}

		& .patient-appointment {
			background-color: ${bgColor.bg_white};
			border-radius: ${borderRadius};
			padding: 2.5rem 3rem 2rem 3rem;
			margin: ${marginTop.small} 0 0 0;

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
							font-size: ${fontSize.font_size_medium_1};
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
		}
	}

	& .section_2 {
		& .add-new-patient {
			border-radius: ${borderRadius};

			& .new-patient-container {
				padding: 2.5rem 3rem 2rem 3rem;
				color: ${textColor.text_white};
				background-color: ${bgColor.bg_secondary_color};
				border-radius: ${borderRadius};
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		& .today-appointments {
			margin: ${marginTop.small} 0 0 0;
			border-radius: ${borderRadius};
			padding: 2.5rem 3rem 2rem 3rem;
			background-color: ${bgColor.bg_white};

			&_header {
				display: flex;
				align-items: baseline;
				justify-content: space-between;

				& .see-all {
					font-size: ${fontSize.font_size_big};
					color: ${textColor.text_secondary_color};
					font-weight: 600;
					${transform};

					&:hover {
						color: ${textColor.text_secondary_color_light};
					}

					&:active {
						color: ${textColor.text_secondary_color};
					}
				}
			}

			&_patients {
				margin: ${marginTop.big} 0 0 0;

				&-details {
					display: flex;
					align-items: center;
					justify-content: space-between;

					&:not(:first-child) {
						margin: ${marginTop.medium} 0 0 0;
					}

					& .patients-details-container {
						display: flex;
						align-items: center;

						& .patient-icon {
							margin: 0 2.5rem 0 0;
							height: 5rem;
							width: 5rem;
							border-radius: ${borderRadius};
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
								font-size: ${fontSize.font_size_medium_1};
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
		}
	}
`;

export { DashboardHeaderContainer, Button, DashboardOverviewWrapper, AppointmentSection };
