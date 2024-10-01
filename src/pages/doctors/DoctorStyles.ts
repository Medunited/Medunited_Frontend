import styled from "styled-components";
import { bgColor, borderColor, fontSize } from "../../variables/Variables";

const DoctorWrapper = styled.div`
	& .search {
		display: flex;
		align-items: center;

		& .icon-search {
			display: flex;
			transform: translateX(3rem);
			color: rgba(0, 0, 0, 0.3);
			align-items: center;

			& svg {
				width: 15px;
				height: 15px;
				color: inherit;
			}
		}

		& input {
			font-size: ${fontSize.font_size_medium_1};
			color: inherit;
			padding: 0.7rem 1rem 0.7rem 4rem;
			border-radius: 20px;
			background-color: ${bgColor.bg_white};
			border: 1px solid transparent;

			&:focus {
				border: 1px solid ${borderColor.border_color};
			}

			&::placeholder {
				color: rgba(0, 0, 0, 0.3);
			}
		}
	}

	& .doctor-list-container {
		cursor: pointer;
		transform: scale(1);
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.02);
		}

		&:active {
			transform: scale(1);
		}
	}
`;

export { DoctorWrapper };
