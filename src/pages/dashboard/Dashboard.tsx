import * as Con from "../../containers";

import { Container } from "../../components";

const Dashboard = () => {
	return (
		<div>
			<Con.DashboardHeader />

			<Container>
				<main className="main">
					{/* Overview or summary of everything */}
					<Con.DashboardOverview />

					{/* Overview of the appointment */}
					<Con.AppointmentOverview />
				</main>
			</Container>
		</div>
	);
};

export default Dashboard;
