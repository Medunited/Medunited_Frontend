import { Outlet } from "react-router-dom";
import * as MainStyles from "./MainStyles";
import * as Container from "../../containers";

const Main = () => {
	return (
		<MainStyles.MainWrapper>
			<Container.NavBar />

			<Outlet />
		</MainStyles.MainWrapper>
	);
};

export default Main;
