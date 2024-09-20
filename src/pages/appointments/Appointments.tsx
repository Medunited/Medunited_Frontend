import { FiPlus } from "react-icons/fi";
import { BtnPrimary, Container, Header, HeadingPrimary, Pagination } from "../../components";
import { AppointmentLists, Main, MainNavBar } from "../../containers";
import { bgColor, borderColor, marginTop } from "../../variables/Variables";
import { useAppointmentStateManagement } from "../../stateManagement";
import { appointmentsList } from "../../hooks/useAppointments";

const Appointments = () => {
	const { appointmentListStartPage, appointmentListEndPage, appointmentListPageLimit } = useAppointmentStateManagement();

	const appointmentListParams = {
		startPage: appointmentListStartPage,
		endPage: appointmentListEndPage,
		listStartName: "appointmentListStartPage",
		listEndName: "appointmentListEndPage",
		pageLimit: appointmentListPageLimit,
		listItems: appointmentsList,
	};

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
					{appointmentsList.length > 0 ? (
						<div>
							{/* All Appointment Lists  */}

							<div style={{ margin: `${marginTop.medium} 0 0 0`, backgroundColor: bgColor.bg_white, borderRadius: "5px", border: `1px solid ${borderColor.border_color}` }}>
								<AppointmentLists />
							</div>

							{/* Pagination */}

							<div style={{ margin: `${marginTop.medium} 0 0 0` }}>
								<Pagination paginationParams={appointmentListParams} />
							</div>
						</div>
					) : (
						<div style={{ margin: `${marginTop.big} 0 0 0` }}>No Appointments</div>
					)}
				</Container>
			</Main>
		</div>
	);
};

export default Appointments;
