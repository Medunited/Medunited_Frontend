import * as Con from "../../containers";

import { Container } from "../../components";

const Dashboard = () => {
	return (
		<div>
			<Con.DashboardHeader />
			<Container>
				<main className="main">
					<Con.DashboardOverview />
				</main>
			</Container>
		</div>
	);
};

export default Dashboard;
