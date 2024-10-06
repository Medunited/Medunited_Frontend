import { FormEvent } from "react";
import { BtnPrimary } from "../components";
import * as SigninStyle from "./SigninStyles";
import { useLogin } from "../stateManagement";
import { useNavigate } from "react-router-dom";

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
						<h1>Login to your Account</h1>

						<div className="login-details">
							<SigninStyle.SiginInputWrapper>
								<label htmlFor="username">Username</label>

								<input type="email" id="username" name="username" placeholder="Username" value={loginData.username} onChange={(e) => setLogin(e)} />
							</SigninStyle.SiginInputWrapper>

							<SigninStyle.SiginInputWrapper>
								<label htmlFor="password">Password</label>

								<input type="password" id="password" name="password" placeholder="Password" value={loginData.password} onChange={(e) => setLogin(e)} />
							</SigninStyle.SiginInputWrapper>

							<div className="forget-password">
								<button onClick={() => alert("Not yet Implemented")}>Forget password</button>
							</div>

							<SigninStyle.SiginBtnWrapper>
								<BtnPrimary paddingX="4rem">Login</BtnPrimary>
							</SigninStyle.SiginBtnWrapper>
						</div>
					</form>
				</SigninStyle.SigninContainer>
			</div>
		</SigninStyle.SigninWrapper>
	);
};

export default Signin;
