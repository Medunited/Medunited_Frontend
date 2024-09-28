import { FiPlus } from "react-icons/fi";
import { BtnPrimary, Header, HeadingPrimary, Pagination } from "../../components";
import { AppointmentLists, Main, MainNavBar } from "../../containers";
import { bgColor, borderColor, borderRadius, marginTop } from "../../variables/Variables";
import { appointmentsList } from "../../hooks/useAppointments";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Appointments = () => {
	const navigate = useNavigate();
	const [appointmentItemsPerPage, setAppointmentItemPerPage] = useState(7);
	const [appointmentItemOffset, setAppointmentItemOffset] = useState(0);

	const appointmentPageRef = useRef(null);

	const appointmentEndOffset = appointmentItemOffset + appointmentItemsPerPage;
	const appointments = appointmentsList.slice(appointmentItemOffset, appointmentEndOffset);

	const appointmentListParams = {
		itemOffset: appointmentItemOffset,
		ItemsPerPage: appointmentItemsPerPage,
		endOffset: appointmentEndOffset,
		items: appointmentsList,
		ref: appointmentPageRef,
		setItemOffset: setAppointmentItemOffset,
		setItemPerPage: setAppointmentItemPerPage,
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<MainNavBar />

			<Header>
				<HeadingPrimary>Appointments</HeadingPrimary>

				<div onClick={() => navigate("/add-appointment")}>
					<BtnPrimary>
						<div className="d-flex">
							<FiPlus color="inherit" size={20} />
							<span className="ms-2">Add Appointment</span>
						</div>
					</BtnPrimary>
				</div>
			</Header>

			<Main>
				{appointmentsList.length > 0 ? (
					<>
						{/* All Appointment Lists  */}

						<div style={{ backgroundColor: bgColor.bg_white, borderRadius: borderRadius.small, border: `1px solid ${borderColor.border_color}` }}>
							<AppointmentLists appointments={appointments} />
						</div>

						{/* Pagination */}

						<div style={{ margin: `${marginTop.medium} 0 0 0` }}>
							<Pagination paginationParams={appointmentListParams} />
						</div>
					</>
				) : (
					<div style={{ margin: `${marginTop.big} 0 0 0` }}>No Appointments</div>
				)}
			</Main>
		</div>
	);
};

export default Appointments;
