import * as Con from "../../containers";
import { Container } from "../../components";
import { AppointmentSection } from "./DashboardStyles";
import { dashboardNavLink } from "../../containers/navBar/useNavBar";

const Dashboard = () => {
	return (
		<div>
			<Con.NavBar navLink={dashboardNavLink} />

			<div style={{ padding: "0 0 5rem 0" }}>
				<Con.DashboardHeader />

				<Container>
					<main className="main">
						{/* Overview or summary of everything */}
						<div>
							<Con.DashboardOverview />
						</div>
						{/* Overview of the appointment */}
						<AppointmentSection>
							<div className="section_1 col-7">
								{/* Overall view of the patient chat, Appointments and Earnings */}
								<Con.PatientChartOverview />
								{/* Breakdown of how the patients booked appointments */}
								<Con.PatientAppointment />
								{/* Reviews */}
								<Con.PatientReviews />
							</div>
							<div className="section_2 col">
								{/* To add a new patient */}
								<Con.AddPatient />
								{/* Today's Appointment section */}
								<Con.TodayAppointment />
								{/* Doctor's Avaliablity */}
								<Con.DoctorAvaliabilty />
							</div>
						</AppointmentSection>
					</main>
				</Container>
			</div>
		</div>
	);
};

export default Dashboard;
