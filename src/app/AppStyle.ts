import styled from "styled-components";
import { color } from "../variables/Variables";

const Container = styled.div`
	// background-color: ${color.primary_Color};
	background-color: #eee;
	height: 100vh;
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;

	& h1 {
		font-size: 4rem;
	}

	& p {
		font-size: 3rem;
	}
`;

export { Container };
