import { Navigate } from "react-router-dom";
import { Main } from "../pages";

function App() {
	const user = "h";
	return <>{user ? <Main /> : <Navigate to="/login" />}</>;
}

export default App;
