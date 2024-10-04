import { IoPersonAddSharp } from "react-icons/io5";
import { HeadingSecondary } from "../../components";
import { DoctorAppointmentWrapper } from "./DoctorListStyle";
import { RiProgress8Fill } from "react-icons/ri";
import { bgColor } from "../../variables/Variables";
import { appointmentsList } from "../../hooks/useAppointments";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";

const DoctorUpcomingAppointments = () => {
	const { doctorInfo } = useDoctorInfoStateManagement();

	const pastAppointments = [1, 2];

	// To get a specific doctor's list of upcoming appointments
	const upcomingAppointmentList = appointmentsList.filter((item) => item.doctor === doctorInfo.name);

	console.log(upcomingAppointmentList);

	return (
		<DoctorAppointmentWrapper>
			<div className="appointment-heading">
				<div className="d-flex">
					<div className="date">
						<HeadingSecondary>Date</HeadingSecondary>
					</div>

					<div className="patient-name">
						<HeadingSecondary>Patient Name &nbsp; &nbsp;/ &nbsp; Treatment</HeadingSecondary>
					</div>
				</div>

				<div>
					<HeadingSecondary>Status</HeadingSecondary>
				</div>
			</div>

			{/* Upcoming Appointments */}
			<div className="upcoming-appointments">
				<div className="heading">
					<span style={{ width: "40px" }}>&nbsp;</span>
					<span className="text">Upcoming Appointments</span>
				</div>

				{upcomingAppointmentList.length > 0 ? (
					<div className="appointment-container">
						{upcomingAppointmentList.map((item, index) => (
							<div key={index} className="d-flex appointment_wrapper">
								<div className={`${index === upcomingAppointmentList.length - 1 && pastAppointments.length > 0 ? "line line-progress_2" : index === upcomingAppointmentList.length - 1 && pastAppointments.length === 0 ? "line" : "line line-progress"}`} style={{ width: "40px" }}>
									<RiProgress8Fill color={bgColor.bg_primary_color} size={17} />
								</div>

								<div className="appointment">
									<div className="date-and-name d-flex">
										<div className="date">
											<span className="sub-heading sub-heading_1">{item.appointmentDate}</span>
											<span className="sub-heading sub-heading_2">{item.appointmentTime}</span>
										</div>

										<div className="doctor-name d-flex">
											<div className="patient-icon">
												<IoPersonAddSharp />
											</div>
											<div className="">
												<span className="sub-heading sub-heading_1">{item.name}</span>
												<span className="sub-heading sub-heading_2">{item.treatment}</span>
											</div>
										</div>
									</div>

									<div className="status">{item.status}</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="no-appointment">No Upcoming Appointment</div>
				)}
			</div>

			{/* Past Appointments */}
			<div className="upcoming-appointments">
				<div className="heading">
					<span style={{ width: "40px" }}>&nbsp;</span>
					<span className="text">Past Appointments</span>
				</div>

				{pastAppointments.length > 0 ? (
					<div className="appointment-container">
						{pastAppointments.map((item, index) => (
							<div key={item} className="d-flex appointment_wrapper">
								<div className={`${index !== pastAppointments.length - 1 ? "line line-progress" : "line"}`} style={{ width: "40px" }}>
									<RiProgress8Fill color={bgColor.bg_secondary_color} size={17} />
								</div>

								<div className="appointment">
									<div className="date-and-name d-flex">
										<div className="date">
											<span className="sub-heading sub-heading_1">18 Jan 21</span>
											<span className="sub-heading sub-heading_2">01:00 pm</span>
										</div>

										<div className="doctor-name d-flex">
											<div className="patient-icon">
												<IoPersonAddSharp />
											</div>
											<div className="">
												<span className="sub-heading sub-heading_1">Samantha Smith</span>
												<span className="sub-heading sub-heading_2">Diagonizing and treating Chest Pain</span>
											</div>
										</div>
									</div>

									<div className="status">Consulted</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="no-appointment">No Past Appointments</div>
				)}
			</div>
		</DoctorAppointmentWrapper>
	);
};

export default DoctorUpcomingAppointments;
