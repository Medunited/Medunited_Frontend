import { FormEvent } from "react";
import { BtnPrimary, HeadingPrimary } from "../components";
import * as SigninStyle from "./SigninStyles";
import { useLogin } from "../stateManagement";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
	const { loginData, setLogin } = useLogin();
	const navigate = useNavigate();

	//Change later
	const user = {
		username: "Medunite@gmail.com",
		password: "1234",
	};

	// Handle Form Submission
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (loginData.username !== user.username && loginData.password !== user.password) {
			alert("Invalid username or password");
		} else {
			navigate("/");
		}
	};

	return (
		<SigninStyle.SigninWrapper>
			<div className="loginWrapper">
				<SigninStyle.SigninContainer>
					<form onSubmit={handleSubmit}>
						<HeadingPrimary text="Login to your Account" />
						<div className="login-details">
							<SigninStyle.SiginInputWrapper>
								<label htmlFor="username">Username</label>
								<input type="email" id="username" name="username" placeholder="Username" value={loginData.username} onChange={(e) => setLogin(e)} />
							</SigninStyle.SiginInputWrapper>

							<SigninStyle.SiginInputWrapper>
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" placeholder="Password" value={loginData.password} onChange={(e) => setLogin(e)} />
							</SigninStyle.SiginInputWrapper>

							<div style={{ textAlign: "right", fontSize: "1.3rem" }}>
								<Link to="">Forget password</Link>
							</div>

							<SigninStyle.SiginBtnWrapper>
								<BtnPrimary name="Login" paddingX="4rem" />
							</SigninStyle.SiginBtnWrapper>
						</div>
					</form>
				</SigninStyle.SigninContainer>
			</div>
		</SigninStyle.SigninWrapper>
	);
};

export default Signin;
