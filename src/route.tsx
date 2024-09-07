import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";

const route = createBrowserRouter([
	{
		path: "",
		element: <App />,
	},
]);

export default route;
