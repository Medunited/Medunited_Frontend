import { useState } from "react";
import { AppointmentSection } from "./DashboardHeaderStyle";
import { BtnPrimary, HeadingPrimary } from "../../components";
import { IoPersonAddSharp } from "react-icons/io5";
import * as useDashboard from "./useDashboard";

const AppointmentOverview = () => {
	const [num, setNum] = useState(0);

	return (
		<AppointmentSection>
			{/* Patients, Appointments and Earning Section */}

			<div className="section_1 col-7">
				<div className="chart-overview">
					<ul className="chart-nav">
						{useDashboard.navlistItems.map((items, index) => (
							<li key={items.text} onClick={() => setNum(index)} className={`chart-nav-listItems ${index === num ? "active" : ""}`}>
								{items.text}
							</li>
						))}
					</ul>

					{/* Chart Section */}

					<div className="chart">Chart</div>
				</div>

				{/* Overall Patients Appointment Section */}

				<div className="patient-appointment">
					<HeadingPrimary>Patients Appointment</HeadingPrimary>

					<div className="patient-appointment-details">
						<div className="col">
							{useDashboard.patientAppointment.map((items) => (
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
				</div>
			</div>

			{/* Add new Patient and Today's Appointment Section */}
			<div className="section_2 col">
				<div className="add-new-patient">
					<div className="new-patient-container">
						<HeadingPrimary>New Patient?</HeadingPrimary>

						<div className="btn-add-patient">
							<BtnPrimary name="Add New" />
						</div>
					</div>
				</div>

				{/* Today's Appointment */}
				<div className="today-appointments">
					<div className="today-appointments_header">
						<HeadingPrimary>Today's Appointments</HeadingPrimary>
						<button className="see-all">See all</button>
					</div>

					<div className="today-appointments_patients">
						{useDashboard.todayPatients.map((patient) => (
							<div className="today-appointments_patients-details">
								<div key={patient.time} className="patients-details-container">
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

								<div className="appointment-time">12:00 pm</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</AppointmentSection>
	);
};

export default AppointmentOverview;
