import styled from "styled-components";
import { bgColor, borderColor, fontSize, textColor } from "../../variables/Variables";

const AppointmentListWrapper = styled.div`
	& .appointment-list_heading {
		display: flex;
		padding: 1rem 3rem;
		border-bottom: 2px solid ${bgColor.bg_secondary_color};
	}

	& .appointment_details_wrapper {
		height: 65vh;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 10px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(0, 0, 0, 0.2);
			cursor: pointer;
			border-radius: 5px;
		}

		&::-webkit-scrollbar-track-piece {
			background-color: #cccccc54;
		}

		& .appointment_details {
			padding: 1rem 3rem;
			display: flex;
			border-bottom: 1px solid ${borderColor.border_color};

			& .patient-details {
				margin: 0 4rem 0 0;
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
				margin: 0.5rem 0 0 0;
			}
		}
	}
`;

export { AppointmentListWrapper };
