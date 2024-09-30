import { BtnPrimary, Header, HeadingPrimary, Pagination } from "../../components";
import { MainNavBar, Main, DoctorList } from "../../containers";
import { doctorList } from "../../hooks/useDoctorList";
import { DoctorWrapper } from "./DoctorStyles";
import { GoSearch } from "react-icons/go";
import { useRef, useState } from "react";
import { marginTop } from "../../variables/Variables";

const Doctors = () => {
	// const navigate = useNavigate();
	const doctoreListPageDisplayStart = 12;
	const [doctorListItemsPerPage, setDoctorListItemPerPage] = useState(doctoreListPageDisplayStart);
	const [doctorListItemOffset, setDoctorListItemOffset] = useState(0);

	const doctorListPageRef = useRef(null);

	const doctorListEndOffset = doctorListItemOffset + doctorListItemsPerPage;
	const doctorListItems = doctorList.slice(doctorListItemOffset, doctorListEndOffset);

	const doctorListParams = {
		itemOffset: doctorListItemOffset,
		ItemsPerPage: doctorListItemsPerPage,
		endOffset: doctorListEndOffset,
		items: doctorList,
		ref: doctorListPageRef,
		pageDisplayStart: doctoreListPageDisplayStart,
		setItemOffset: setDoctorListItemOffset,
		setItemPerPage: setDoctorListItemPerPage,
	};

	return (
		<DoctorWrapper>
			<MainNavBar />

			<Header>
				<div className="d-flex align-items-center">
					<div style={{ margin: "0 2rem 0 0" }}>
						<HeadingPrimary>Doctors</HeadingPrimary>
					</div>

					<BtnPrimary>Add New</BtnPrimary>
				</div>

				<div className="search">
					<button className="icon-search">
						<GoSearch />
					</button>
					<input type="text" placeholder="Search" />
				</div>
			</Header>

			<Main>
				<div className="animate__animated animate__fadeIn doctor-list-wrapper g-5 row">
					<>
						{doctorListItems.map((items) => (
							<div className="col-4 doctor-list-container">
								<DoctorList items={items} />
							</div>
						))}
					</>

					<div style={{ margin: `${marginTop.medium} 0 0 0` }}>
						<Pagination paginationParams={doctorListParams} />
					</div>
				</div>
			</Main>
		</DoctorWrapper>
	);
};

export default Doctors;
