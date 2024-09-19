import { FiPlus } from "react-icons/fi";
import { BtnPrimary, Container, Header, HeadingPrimary } from "../../components";
import { AppointmentLists, Main, MainNavBar } from "../../containers";
import { bgColor, borderColor, fontSize, marginTop } from "../../variables/Variables";
import { useAppointmentStateManagement } from "../../stateManagement";
import { appointmentsList } from "../../hooks/useAppointments";

const Appointments = () => {
	const { nextPage, startPage, endPage } = useAppointmentStateManagement();

	let listPageNo = appointmentsList.length;
	let pageLimit = 7;
	let nextPagesNumber;

	if (listPageNo % pageLimit === 0) {
		nextPagesNumber = listPageNo / pageLimit;
	} else {
		nextPagesNumber = listPageNo / pageLimit + 1;
	}

	const pages = [];

	for (let i = 1; i <= nextPagesNumber; i++) {
		pages.push(i);
	}

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
							<div style={{ margin: `${marginTop.medium} 0 0 0`, backgroundColor: bgColor.bg_white, borderRadius: "5px", border: `1px solid ${borderColor.border_color}` }}>
								<AppointmentLists />
							</div>
							<div className="mt-4 d-flex justify-content-between align-items-center" style={{ fontWeight: "500" }}>
								{startPage + 1 !== listPageNo ? (
									<div className="" style={{ fontSize: fontSize.font_size_medium }}>
										Showing {startPage + 1} &ndash; {listPageNo - endPage <= 0 ? listPageNo : endPage} of {listPageNo} items
									</div>
								) : (
									<div className="" style={{ fontSize: fontSize.font_size_medium }}>
										Showing {startPage + 1} of {listPageNo} items
									</div>
								)}

								{listPageNo > pageLimit && (
									<div className="d-flex justify-content-between align-items-center">
										{startPage > 0 && (
											<button disabled={startPage <= 0} className="me-2" onClick={() => nextPage(startPage - 7)} style={{ backgroundColor: "#fff", borderRadius: "3px", padding: ".5rem 1rem" }}>
												{`< `}Previous
											</button>
										)}

										{pages.map((pages) => (
											<button
												key={pages}
												className="me-2"
												onClick={() => {
													nextPage((pages - 1) * 7);
													console.log(startPage, endPage);
												}}
												style={{ backgroundColor: "#fff", borderRadius: "3px", padding: ".5rem 1.2rem" }}>
												{pages}
											</button>
										))}

										{endPage <= listPageNo && (
											<button disabled={endPage >= listPageNo} className="" onClick={() => nextPage(startPage + 7)} style={{ backgroundColor: "#fff", borderRadius: "3px", padding: ".5rem 1rem" }}>
												Next{` >`}
											</button>
										)}
									</div>
								)}
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
