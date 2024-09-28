import { Header, HeadingPrimary } from "../../components";
import { MainNavBar, Main, SelectDoctor, PatientInfo } from "../../containers";

const AddAppointment = () => {
	return (
		<div>
			<MainNavBar />

			<Header>
				<HeadingPrimary>Add Appointments</HeadingPrimary>
			</Header>

			<Main>
				<div className="d-flex">
					<div className="col me-3">
						<SelectDoctor />
					</div>

					<div className="col">
						<PatientInfo />
					</div>
				</div>
			</Main>
		</div>
	);
};

export default AddAppointment;
