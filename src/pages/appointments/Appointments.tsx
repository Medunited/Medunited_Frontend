import { FiPlus } from "react-icons/fi";
import { BtnPrimary, Container, Header, HeadingPrimary } from "../../components";
import { AppointmentLists, Main, MainNavBar } from "../../containers";
import { bgColor, marginTop } from "../../variables/Variables";

const Appointments = () => {
	return (
		<div>
			<MainNavBar />

			<Header>
				<HeadingPrimary>Appointments</HeadingPrimary>
				<BtnPrimary>
					<div className="d-flex">
						<FiPlus color="inherit" size={20} />
						<span className="ms-2">Add Appointment</span>
					</div>
				</BtnPrimary>
			</Header>

			<Main>
				<Container>
					<div style={{ margin: `${marginTop.medium} 0 0 0`, backgroundColor: bgColor.bg_white, borderRadius: "5px" }}>
						<AppointmentLists />
					</div>
				</Container>
			</Main>
		</div>
	);
};

export default Appointments;
