import * as Con from "../../containers";

import { Container } from "../../components";
import { AppointmentSection } from "./DashboardStyles";

const Dashboard = () => {
	return (
		<div>
			<Con.DashboardHeader />

			<Container>
				<main className="main">
					{/* Overview or summary of everything */}
					<Con.DashboardOverview />

					{/* Overview of the appointment */}
					<AppointmentSection>
						<div className="section_1 col-7">
							{/* Overall view of the patient chat, Appointments and Earnings */}
							<Con.PatientChartOverview />

							{/* Breakdown of how the patients booked appointments */}
							<Con.PatientAppointment />
						</div>

						<div className="section_2 col">
							{/* To add a new patient */}
							<Con.AddPatient />

							{/* Today's Appointment section */}
							<Con.TodayAppointment />
						</div>
					</AppointmentSection>
				</main>
			</Container>
		</div>
	);
};

export default Dashboard;
