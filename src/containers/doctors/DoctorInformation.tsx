import { DoctorInformationWrapper } from "./DoctorListStyle";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";

const DoctorInformation = () => {
	const { doctorInfo } = useDoctorInfoStateManagement();

	return (
		<DoctorInformationWrapper>
			<div className="section_1">
				<div className="photo_container">
					<div className="col-4">&nbsp;</div>

					<div className="doctor_photo col">
						<div className="doctor_photo-img">&nbsp;</div>
						<button className="btn_edit">Edit</button>
					</div>
				</div>

				<div className="doctor_details">
					<span className="doctor_name">Dr. {doctorInfo.name}</span>
					<span className="doctor_department">{doctorInfo.department} Department</span>
				</div>

				<div className="doctor_fee_review">
					<div className="doctor_fees">
						<span className="heading_small fees">Fees</span>
						<div className="heading_medium amount_charged">{doctorInfo.fees}</div>
					</div>

					<div>
						<span className="heading_small feedbacks">Feedbacks</span>

						<div className="reviews">
							<div className="d-flex align-items-center">{doctorInfo.ratingStar}</div>
							<span className="heading_medium rating">{doctorInfo.rating}</span>
							<span className="number_of_review">({doctorInfo.reviews_number})</span>
						</div>
					</div>
				</div>
			</div>
			<div className="section_2">
				<div className="d-flex">
					<div className="col-5">
						<span className="heading_small">Experience</span>
						<span className="heading_medium">{doctorInfo.yearsOfExperience}</span>
					</div>

					<div className="col">
						<span className="heading_small">Availability</span>
						<span className="heading_medium">
							{doctorInfo.availabilityStart} &ndash; {doctorInfo.availabilityEnd}
						</span>
					</div>
				</div>

				<div className="doctor_services">
					<span className="heading_small">Services</span>
					<div>
						{doctorInfo.services.map((services) => (
							<span key={services} className="heading_medium">
								{services}
							</span>
						))}
					</div>
				</div>
			</div>
		</DoctorInformationWrapper>
	);
};

export default DoctorInformation;
