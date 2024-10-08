import styled from "styled-components";
import { LoginImg } from "../assets";
import { bgColor, borderColor, fontSize, textColor, transform } from "../variables/Variables";

const SigninWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${LoginImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	& .loginWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: ${bgColor.bg_color_light};
	}
`;

const SigninContainer = styled.div`
	width: 35%;
	border-radius: 10px;
	background-color: ${textColor.text_white};
	padding: 7rem 0;

	& form {
		width: 75%;
		margin: auto;

		& .login-details {
			margin: 3.5rem 0 0 0;

			& .forget-password {
				text-align: right;
				font-size: ${fontSize.font_size_medium};

				& button {
					color: inherit;
					${transform.menu_transform};

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	// Remove later

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
		font-size: ${fontSize.font_size_medium};

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
