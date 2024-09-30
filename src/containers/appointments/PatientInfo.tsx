import { useAppointmentStateManagement } from "../../stateManagement";
import { PatientInfoWrapper } from "./AppointmentContainerStyles";

const PatientInfo = () => {
	const { appointmentDetails, setAddAppointment, setAddAppointmentState } = useAppointmentStateManagement();
	// const navigate = useNavigate();

	const getAppointment = () => {
		// Validation
		// if (appointmentDetails.department === "") {
		// 	return;
		// }
		setAddAppointmentState(true);
	};

	return (
		<PatientInfoWrapper>
			<div className="patient-info-container">
				<div className="heading_1">Patient Info</div>

				<div className="patient-details">
					<div className="visited-or-first-time">
						<div className="visited">
							<input type="radio" name="visitedOrFirstTime" id="visited" value="visited" onChange={(e) => setAddAppointment(e.target.name, e.target.value)} />
							<label className="heading_2" htmlFor="visited">
								Visited before
							</label>
						</div>

						<div className="first-time">
							<input type="radio" name="visitedOrFirstTime" value="first_time" id="firstTimeVisit" onChange={(e) => setAddAppointment(e.target.name, e.target.value)} />
							<label className="heading_2" htmlFor="firstTimeVisit">
								First time visit
							</label>
						</div>
					</div>

					<div className="patient-details">
						<div className="patient-name">
							<span className="heading_2">Patient Name</span>
							<input type="text" placeholder="Patient name" name="patientName" value={appointmentDetails.patientName} onChange={(e) => setAddAppointment(e.target.name, e.target.value)} />
						</div>

						<div className="patient-details_2">
							<div className="patient-number col">
								<span className="heading_2">Patient Number</span>
								<input type="text" placeholder="Phone number" name="patientNumber" value={appointmentDetails.patientNumber} onChange={(e) => setAddAppointment(e.target.name, e.target.value)} />
							</div>

							<div className="patient-email col">
								<span className="heading_2">Email Address</span>
								<input type="email" placeholder="Email address" name="patientEmailAddress" value={appointmentDetails.patientEmailAddress} onChange={(e) => setAddAppointment(e.target.name, e.target.value)} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="get-appointment-btn">
				<button onClick={getAppointment}>Get Appointment</button>
			</div>
		</PatientInfoWrapper>
	);
};

export default PatientInfo;
