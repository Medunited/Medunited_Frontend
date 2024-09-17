import { HeadingSecondary } from "../../components";
import { AppointmentListWrapper } from "./AppointmentContainerStyles";

const AppointmentLists = () => {
	const appointmentLists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<AppointmentListWrapper>
			<div className="appointment-list_heading">
				<div className="d-flex col">
					<div className="col-3">
						<HeadingSecondary>Date</HeadingSecondary>
					</div>

					<div className="col">
						<HeadingSecondary>Patient Name / Treatment</HeadingSecondary>
					</div>
				</div>

				<div className="col-7 d-flex justify-content-between">
					<div className="col" style={{ padding: "0 0 0 2rem" }}>
						<HeadingSecondary>Doctor</HeadingSecondary>
					</div>

					<div className="col-4">
						<HeadingSecondary>Booked with / on</HeadingSecondary>
					</div>

					<div className="col-2 text-center">
						<HeadingSecondary>Status</HeadingSecondary>
					</div>
				</div>
			</div>

			<div className="appointment_details_wrapper">
				{appointmentLists.map(() => (
					<div className="appointment_details">
						<div className="section_1 d-flex col">
							<div className="date col-3">
								<span className="heading_1">18 Jan 21</span>
								<span className="heading_2">01:00 pm</span>
							</div>
							<div className="col patient-details">
								<span className="heading_1">Samantha Smith</span>
								<span className="heading_2">Diagnosing and treatment Chest Pain</span>
							</div>
						</div>
						<div className="section_2 col-7 d-flex justify-content-between">
							<div className="doctor col">
								<div className="photo"></div>
								<div className="doctor-details">
									<span className="heading_1">Dr. Joseph Williams</span>
									<span className="heading_2">Cardiology Department</span>
								</div>
							</div>
							<div className="bookedWith col-4">
								<span className="heading_1">App Appointment</span>
								<span className="heading_2">on 15 Jan, 2021, 02:21 pm</span>
							</div>
							<div className="status col-2 text-center">Accepted</div>
						</div>
					</div>
				))}
			</div>
		</AppointmentListWrapper>
	);
};

export default AppointmentLists;
