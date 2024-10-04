import styled from "styled-components";
import { bgColor } from "../../variables/Variables";

const DoctorWrapper = styled.div`
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

const DoctorInfoWrapper = styled.div`
	& .container {
		display: flex;

		& .doctor-reviews {
			background-color: ${bgColor.bg_white};
		}

		& .upcoming-appointment {
			margin: 0 2rem;
		}

		& .doctor-details {
			width: 220px;
		}
	}
`;

export { DoctorWrapper, DoctorInfoWrapper };
