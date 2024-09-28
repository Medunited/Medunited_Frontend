import { IoPersonAddSharp } from "react-icons/io5";
import { HeadingSecondary } from "../../components";
import { textColor } from "../../variables/Variables";
import { AppointmentListWrapper } from "./AppointmentContainerStyles";
import { FaUserDoctor } from "react-icons/fa6";

export type AppointmentList = {
	name: string;
	appointmentDate: string;
	treatment: string;
	doctorDept: string;
	bookedWith: string;
	appoitmentBookedDate: string;
	status: string;
	appointmentTime: string;
	doctor: string;
};

interface AppointmentProps {
	appointments: AppointmentList[];
}

const AppointmentLists = ({ appointments }: AppointmentProps) => {
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

				<div className="col-7 d-flex">
					<div className="col" style={{ padding: "0 0 0 3.5rem" }}>
						<HeadingSecondary>Doctor</HeadingSecondary>
					</div>

					<div className="col-4">
						<HeadingSecondary>Booked with / on</HeadingSecondary>
					</div>

					<div className="col-2">
						<HeadingSecondary>Status</HeadingSecondary>
					</div>
				</div>
			</div>

			<div className="appointment_details_wrapper">
				{appointments.map((items, index) => (
					<div key={index} className="appointment_details">
						<div className="section_1 d-flex col">
							<div className="date col-3">
								<span className="heading_1">{items.appointmentDate}</span>
								<span className="heading_2">{items.appointmentTime}</span>
							</div>

							<div className="col patient-details d-flex">
								<div className="patient-icon">
									<IoPersonAddSharp />
								</div>
								<div>
									<span className="heading_1">
										{items.name} {index + 1}
									</span>
									<span className="heading_2">{items.treatment}</span>
								</div>
							</div>
						</div>

						<div className="section_2 col-7 d-flex justify-content-between">
							<div className="doctor col d-flex">
								<div className="doctor-icon">
									<FaUserDoctor />
								</div>

								<div className="doctor-details">
									<span className="heading_1">{items.doctor}</span>
									<span className="heading_2">{items.doctorDept} Department</span>
								</div>
							</div>

							<div className="bookedWith col-4">
								<span className="heading_1">{items.bookedWith}</span>
								<span className="heading_2">on {items.appoitmentBookedDate}</span>
							</div>

							<div className="status col-2" style={{ color: items.status === "Accepted" ? textColor.text_green : textColor.text_yellow_dark }}>
								{items.status}
							</div>
						</div>
					</div>
				))}
			</div>
		</AppointmentListWrapper>
	);
};

export default AppointmentLists;
