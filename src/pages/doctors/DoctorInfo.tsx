import { FiPlus } from "react-icons/fi";
import { Header, HeadingPrimary, BtnPrimary, BtnSearch } from "../../components";
import { MainNavBar, Main, DoctorInformation, DoctorUpcomingAppointments, DoctorReviews } from "../../containers";
import { DoctorInfoWrapper } from "./DoctorStyles";
import { PiGreaterThanLight } from "react-icons/pi";
import { fontSize, textColor } from "../../variables/Variables";
import { useNavigate } from "react-router-dom";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";

const DoctorInfo = () => {
	const navigate = useNavigate();

	const { searchParam } = useDoctorInfoStateManagement();

	return (
		<DoctorInfoWrapper>
			<MainNavBar />

			<Header>
				<div className="d-flex align-items-center">
					<HeadingPrimary>Doctors </HeadingPrimary>

					<div className="d-flex align-items-center" style={{ margin: "0 0 0 1rem", color: textColor.text_primary_light, fontSize: fontSize.font_size_medium }}>
						<PiGreaterThanLight size={12} />

						<span className="ms-2 ">Doctor info</span>
					</div>
				</div>

				<div className="d-flex">
					<BtnSearch searchParam={searchParam.patientName} searchName="patientName" />

					<div onClick={() => navigate("/add-appointment")} style={{ margin: "0 0 0 2rem" }}>
						<BtnPrimary>
							<div className="d-flex">
								<FiPlus color="inherit" size={20} />
								<span className="ms-2">Add Appointment</span>
							</div>
						</BtnPrimary>
					</div>
				</div>
			</Header>

			<Main>
				<div className="container animate__animated animate__fadeIn p-0">
					<div className="doctor-details">
						<DoctorInformation />
					</div>

					<div className="upcoming-appointment col">
						<DoctorUpcomingAppointments />
					</div>

					<div className="doctor-reviews col-2">
						<DoctorReviews />
					</div>
				</div>
			</Main>
		</DoctorInfoWrapper>
	);
};

export default DoctorInfo;
