import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import * as Pages from "./pages";
import Signin from "./auth/Signin";

const route = createBrowserRouter([
	// Protected Page if user isn't logged in
	{
		path: "",
		element: <App />,
		errorElement: <Pages.ErrorPage />,
		children: [
			{ path: "", element: <Pages.Dashboard /> },
			{ path: "/appointments", element: <Pages.Appointments /> },
			{ path: "/doctors", element: <Pages.Doctors /> },
		],
	},

	// Page if user isn't logged in
	{ path: "/login", element: <Signin /> },
]);

export default route;
