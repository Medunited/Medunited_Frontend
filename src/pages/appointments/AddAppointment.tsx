import { useRef } from "react";
import { Header, HeadingPrimary, PopUp } from "../../components";
import { MainNavBar, Main, SelectDoctor, PatientInfo } from "../../containers";
import { useAppointmentStateManagement } from "../../stateManagement";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const AddAppointment = () => {
	const { addAppointmentState, setAddAppointmentState } = useAppointmentStateManagement();
	const addAppointmentRef = useRef(null);

	const onClose = () => {
		setAddAppointmentState(false);
	};
	const onOpen = () => {
		setAddAppointmentState(true);
	};

	const addAppointmentPopUpParams = {
		icon: <IoCheckmarkDoneCircleOutline />,
		text: "Appointment added successfully",
		btn_name_1: "Close",
		btn_name_2: "Add more",
		ref: addAppointmentRef,
		onClose: onClose,
		onOpen: onOpen,
		navigateLink: "/appointments",
	};
	return (
		<div style={{ position: "relative" }}>
			<>
				<MainNavBar />
				<Header>
					<HeadingPrimary>Add Appointment</HeadingPrimary>
				</Header>
				<Main>
					<div className="d-flex animate__animated animate__fadeIn">
						<div className="col" style={{ margin: "0 2.5rem 0 0" }}>
							<SelectDoctor />
						</div>
						<div className="col">
							<PatientInfo />
						</div>
					</div>
				</Main>
			</>

			{addAppointmentState && <PopUp popupItem={addAppointmentPopUpParams} />}
		</div>
	);
};

export default AddAppointment;
