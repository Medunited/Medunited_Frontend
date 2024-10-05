import { Header, HeadingPrimary, BtnPrimary, BtnSearch } from "../../components";
import { MainNavBar, Main, PatientsList } from "../../containers";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";

const Patients = () => {
	const { searchParam } = useDoctorInfoStateManagement();

	return (
		<div>
			<MainNavBar />

			<Header>
				<div className="d-flex align-items-center">
					<div style={{ margin: "0 2rem 0 0" }}>
						<HeadingPrimary>Patients</HeadingPrimary>
					</div>

					<BtnPrimary>Add New</BtnPrimary>
				</div>

				<BtnSearch searchParam={searchParam.patient} searchName="patient" />
			</Header>

			<Main>
				<div className="animate__animated animate__fadeIn doctor-list-wrapper">
					<PatientsList />
				</div>
			</Main>
		</div>
	);
};

export default Patients;
