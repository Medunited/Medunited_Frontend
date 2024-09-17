import * as Con from "../../containers";
import { Container, Header, HeadingPrimary } from "../../components";
import { AppointmentSection } from "./DashboardStyles";
import { dashboardNavLink } from "../../containers/navBar/useNavBar";
import { MdArrowDropDown } from "react-icons/md";
import { Button } from "../../containers/dashboard/DashboardContainerStyle";
import { textColor } from "../../variables/Variables";

const Dashboard = () => {
	return (
		<div>
			<Con.NavBar navLink={dashboardNavLink} />

			<Con.Main>
				<Header>
					<HeadingPrimary>Dashboard</HeadingPrimary>

					<Button>
						<span className="time-text">This Week</span>
						<MdArrowDropDown color={textColor.text_white} size={28} />
					</Button>
				</Header>

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
			</Con.Main>
		</div>
	);
};

export default Dashboard;
