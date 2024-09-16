// import { Navigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../stateManagement";

function App() {
	const { loginData } = useLogin();
	const user = loginData.username;

	return (
		<>
			{user ? (
				<div>
					<Outlet />
				</div>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
}

export default App;
