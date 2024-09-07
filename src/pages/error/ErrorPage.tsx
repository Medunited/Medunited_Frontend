import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="container">
			<h1>Oops...</h1>
			<p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}</p>
			<Link to="/">Home</Link>
		</div>
	);
};

export default ErrorPage;
