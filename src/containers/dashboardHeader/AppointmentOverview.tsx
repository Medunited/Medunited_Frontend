import { useState } from "react";
import { AppointmentSection } from "./DashboardHeaderStyle";
import { HeadingPrimary } from "../../components";
import { FaPersonWalking, FaWarehouse } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { bgColor } from "../../variables/Variables";

const AppointmentOverview = () => {
	const [num, setNum] = useState(0);

	const navlistItems = [
		{ text: "Patients", onClick: "" },
		{ text: "Appointments", onClick: "" },
		{ text: "Earnings", onClick: "" },
	];

	const patientAppointment = [
		{ icon: <FaPersonWalking />, text: "Walk-in", count: "558 (79%)", bgColor: bgColor.bg_green },
		{ icon: <MdPhoneIphone />, text: "User App", count: "60 (13%)", bgColor: bgColor.bg_yellow_dark },
		{ icon: <FaWarehouse />, text: "Kiosk", count: "52 (9%)", bgColor: bgColor.bg_secondary_color },
	];
	return (
		<AppointmentSection>
			<div className="section_1 col-7">
				<div className="chart-overview">
					<ul className="chart-nav">
						{navlistItems.map((items, index) => (
							<li key={items.text} onClick={() => setNum(index)} className={`chart-nav-listItems ${index === num ? "active" : ""}`}>
								{items.text}
							</li>
						))}
					</ul>

					<div className="chart">Chart</div>
				</div>

				<div className="patient-appointment">
					<HeadingPrimary>Patients Appointment</HeadingPrimary>

					<div className="patient-appointment-details">
						<div className="col me-4">
							{patientAppointment.map((items) => (
								<div key={items.text} className="patients-visit-container">
									<div className="icon" style={{ backgroundColor: items.bgColor }}>
										{items.icon}
									</div>
									<div className="patients-visit-type col">{items.text}</div>
									<div className="patients-visit-count col">{items.count}</div>
								</div>
							))}
						</div>

						<div className="pie-chart-container col">
							<div className="pie-chart">Pie Chart</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section_2 col">
				<div className="add-new-patient bg-danger mb-3">New Patient</div>

				<div className="today-appointmets bg-info">Today's Appointment</div>
			</div>
		</AppointmentSection>
	);
};

export default AppointmentOverview;
