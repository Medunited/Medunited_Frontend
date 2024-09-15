import { IoPersonAddSharp } from "react-icons/io5";
import { HeadingPrimary } from "../../components";
import { todayPatients } from "../../hooks/useDashboard";
import { TodayAppointmentContainer } from "./DashboardContainerStyle";

const TodayAppointment = () => {
	// const [patientListPage, setPatientListPage] = useState({
	// 	start: 0,
	// 	end: 6,
	// });

	// const todaysFirstFivePatients = useDashboard.todayPatients.slice(patientListPage.start, patientListPage.end);

	// const nextPage = (start: number) => {
	// 	setPatientListPage({ start: start, end: useDashboard.todayPatients.length });
	// };

	const todaysFirstFivePatients = todayPatients.slice(0, 6);

	return (
		<TodayAppointmentContainer>
			<div className="today-appointments_header">
				<HeadingPrimary>Today's Appointments</HeadingPrimary>

				<button className="see-all">See all</button>
			</div>

			<div className="today-appointments_patients">
				{todaysFirstFivePatients.map((patient) => (
					<div key={patient.time} className="today-appointments_patients-details">
						<div className="patients-details-container">
							<div className="patient-icon">
								<IoPersonAddSharp />
							</div>

							<div className="patient-details">
								<h2 className="patient-name">{patient.firstName + " " + patient.lastName}</h2>

								<div className="patient-scheduled-doctor">
									<span className="with">with</span>
									<span className="doctor-name">{patient.doctor}</span>
								</div>
							</div>
						</div>

						<div className="appointment-time">{patient.time}</div>
					</div>
				))}
			</div>
		</TodayAppointmentContainer>
	);
};

export default TodayAppointment;
