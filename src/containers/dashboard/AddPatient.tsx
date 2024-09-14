import { HeadingPrimary, BtnPrimary } from "../../components";
import { AddNewPatientContainer } from "./DashboardContainerStyle";

const AddPatient = () => {
	return (
		<AddNewPatientContainer>
			<div className="new-patient-container">
				<HeadingPrimary>New Patient?</HeadingPrimary>

				<div className="btn-add-patient">
					<BtnPrimary name="Add New" />
				</div>
			</div>
		</AddNewPatientContainer>
	);
};

export default AddPatient;
