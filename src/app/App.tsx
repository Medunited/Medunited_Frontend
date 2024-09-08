// import { Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Main } from "../pages";
import { useLogin } from "../stateManagement";

function App() {
	const { loginData } = useLogin();
	const user = loginData.username;

	return <>{user ? <Main /> : <Navigate to="/login" />}</>;
}

export default App;
