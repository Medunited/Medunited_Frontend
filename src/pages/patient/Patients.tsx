import { useState, useRef } from "react";
import { Header, HeadingPrimary, BtnPrimary, BtnSearch, Pagination } from "../../components";
import { MainNavBar, Main, PatientsList, AddNewPatient } from "../../containers";
import { patientList } from "../../hooks/usePatient";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";
import { marginTop } from "../../variables/Variables";

const Patients = () => {
	const { searchParam } = useDoctorInfoStateManagement();

	const patientListPageDisplayStart = 9;
	const [patientItemsPerPage, setPatientItemPerPage] = useState(patientListPageDisplayStart);
	const [patientItemOffset, setPatientItemOffset] = useState(0);

	const searchPatient = searchParam.patient ? patientList.filter((patient) => patient?.name.toLowerCase().includes(searchParam.patient.toLowerCase())) : patientList;
	// const searchPatient = search ? patientList.filter((doctor) => doctor.fees <= parseInt(search)) : patientList;

	const patientPageRef = useRef(null);

	const patientEndOffset = patientItemOffset + patientItemsPerPage;
	const patientDetails = searchPatient.slice(patientItemOffset, patientEndOffset);

	const patientParams = {
		itemOffset: patientItemOffset,
		ItemsPerPage: patientItemsPerPage,
		endOffset: patientEndOffset,
		items: searchParam.patient ? searchPatient : patientList,
		ref: patientPageRef,
		pageDisplayStart: patientListPageDisplayStart,
		setItemOffset: setPatientItemOffset,
		setItemPerPage: setPatientItemPerPage,
	};

	const [addNewPatientState, setAddNewPatient] = useState(false);

	const addNewPatientRef = useRef(null);

	const handleAddNewPatientOn = () => setAddNewPatient(true);
	const handleAddNewPatientOff = () => setAddNewPatient(false);

	return (
		<div>
			<MainNavBar />

			<Header>
				<div className="d-flex align-items-center">
					<div style={{ margin: "0 2rem 0 0" }}>
						<HeadingPrimary>Patients</HeadingPrimary>
					</div>

					<div onClick={handleAddNewPatientOn}>
						<BtnPrimary>Add New</BtnPrimary>
					</div>
				</div>

				<BtnSearch searchParam={searchParam.patient} searchName="patient" />
			</Header>

			<Main>
				<div className="animate__animated animate__fadeIn doctor-list-wrapper">
					<PatientsList patientListItems={patientDetails} />

					{patientDetails.length > 0 && (
						<div style={{ margin: `${marginTop.medium} 0 0 0` }}>
							<Pagination paginationParams={patientParams} />
						</div>
					)}

					{addNewPatientState && (
						<div ref={addNewPatientRef}>
							<AddNewPatient onClose={handleAddNewPatientOff} />
						</div>
					)}
				</div>
			</Main>
		</div>
	);
};

export default Patients;
