import styled from "styled-components";
import { bgColor, borderColor, fontSize } from "../../variables/Variables";

const PatientListWrapper = styled.section`
	border-radius: 5px;
	overflow: hidden;

	& .heading {
		background-color: ${bgColor.input_bg_color};
		display: flex;
		padding: 1.1rem 1rem 1.1rem 4rem;
		border-bottom: 1px solid ${bgColor.bg_secondary_color};
	}

	& .patient-info-wrapper {
		background-color: ${bgColor.bg_white};
		font-size: ${fontSize.font_size_small};

		& .patient-info {
			display: flex;
			align-items: center;

			padding: 1.1rem 1rem 1.1rem 4rem;

			& .col {
				word-wrap: break-word;
				width: 0;
			}

			& .col:not(:last-child) {
				margin: 0 1rem 0 0;
			}

			& .patient-name {
				font-weight: 500;
			}

			& .more-options {
				cursor: pointer;
				border-radius: 100%;
				width: 30px;
				height: 30px;
				margin: 0 1rem 0 0;

				display: flex;
				align-items: center;
				justify-content: center;

				&:hover {
					background-color: ${bgColor.input_bg_color};
				}
				&:active {
					background-color: ${bgColor.input_bg_color_1};
				}
			}
		}

		& .patient-info:not(:last-child) {
			border-bottom: 1px solid ${borderColor.border_color};
		}
		& .patient-info:nth-child(even) {
			background-color: ${bgColor.input_bg_color};
		}
	}
`;
export { PatientListWrapper };
