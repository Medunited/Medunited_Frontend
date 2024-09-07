import { Outlet } from "react-router-dom";
import * as App from "../../app/AppStyle";
import * as Component from "../../components";

const Main = () => {
	return (
		<App.Container>
			<Component.NavBar />

			<Outlet />
		</App.Container>
	);
};

export default Main;
