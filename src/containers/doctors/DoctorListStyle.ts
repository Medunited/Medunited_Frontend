import styled from "styled-components";
import { bgColor, fontSize, textColor } from "../../variables/Variables";

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

export { DoctorListWrapper };
