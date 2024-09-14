import { HeadingPrimary } from "../../components";
import { patientAppointment } from "../../hooks/useDashboard";
import { PatientAppointmentContainer } from "./DashboardContainerStyle";

const PatientAppointment = () => {
	return (
		<PatientAppointmentContainer>
			<HeadingPrimary>Patients Appointment</HeadingPrimary>

			<div className="patient-appointment-details">
				<div className="col">
					{patientAppointment.map((items) => (
						<div key={items.text} className="patients-visit-container">
							<div className="icon" style={{ backgroundColor: items.bgColor }}>
								{items.icon}
							</div>
							<div className="patients-visit-container_2 col">
								<div className="patients-visit-type col">{items.text}</div>
								<div className="patients-visit-count col">{items.count}</div>
							</div>
						</div>
					))}
				</div>

				<div className="pie-chart-container col">
					<div className="pie-chart">Pie Chart</div>
				</div>
			</div>
		</PatientAppointmentContainer>
	);
};

export default PatientAppointment;
