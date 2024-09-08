import styled from "styled-components";
import { LoginImg } from "../assets";
import { bgColor, borderColor, textColor } from "../variables/Variables";

const SigninWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${LoginImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	color: ${textColor.text_primary_color};

	display: flex;
	align-items: center;
	justify-content: center;
`;

const SigninContainer = styled.div`
	width: 35%;
	border-radius: 10px;
	background-color: #fff;
	padding: 7rem 0;

	& form {
		width: 75%;
		margin: auto;

		& .login-details {
			margin: 3.5rem 0 0 0;
		}
	}

	@media screen and (max-width: 900px) {
		width: 70%;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;

const SiginInputWrapper = styled.div`
	margin: 0 0 2rem 0;

	& label {
		display: block;
		margin: 0 0 0.7rem 0;
		font-weight: 500;
	}

	& input {
		width: 100%;
		border-radius: 30px;
		padding: 0.7rem 1.6rem;
		background-color: ${bgColor.input_bg_color};
		border: 1px solid transparent;
		color: inherit;
		transition: all 0.2s;
		font-size: 1.4rem;

		&:focus {
			outline: 0;
			border: 1px solid ${borderColor.border_color};
		}
	}
`;

const SiginBtnWrapper = styled.div`
	margin: 4rem 0 0 0;
`;

export { SigninWrapper, SigninContainer, SiginInputWrapper, SiginBtnWrapper };
