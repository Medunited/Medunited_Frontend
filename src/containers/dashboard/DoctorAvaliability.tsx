import { HeadingPrimary } from "../../components";
import { doctors } from "../../hooks/useDashboard";
import { DoctorAvailabilityContainer } from "./DashboardContainerStyle";
import { textColor } from "../../variables/Variables";
import { FaUserDoctor } from "react-icons/fa6";

const DoctorAvaliability = () => {
	const doctorAvaliable = doctors.slice(0, 3);

	return (
		<DoctorAvailabilityContainer>
			<div className="doctor-availability_header">
				<HeadingPrimary>Top Doctors</HeadingPrimary>

				<button className="see-all">See all</button>
			</div>

			<div className="doctors-list">
				{doctorAvaliable.map((doctor) => (
					<div key={doctor.name} className="doctor-availability-details">
						<div className="doctor-details-container">
							<div className="doctor-icon">
								<FaUserDoctor />
							</div>

							<div className="doctor-details">
								<h2 className="doctor-name">{doctor.name}</h2>

								<div className="doctor-profession">{doctor.profession}</div>
							</div>
						</div>

						<div className="doctor-availability" style={{ color: doctor.availability === "Available" ? textColor.text_green : doctor.availability === "Not available" ? textColor.text_primary_light : textColor.text_yellow_dark }}>
							{doctor.availability}
						</div>
					</div>
				))}
			</div>
		</DoctorAvailabilityContainer>
	);
};

export default DoctorAvaliability;
