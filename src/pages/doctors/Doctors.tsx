import { BtnPrimary, Header, HeadingPrimary } from "../../components";
import { MainNavBar, Main } from "../../containers";

const Doctors = () => {
	return (
		<div>
			<MainNavBar />

			<Header>
				<div className="d-flex align-items-center bg-info">
					{/* <div className="bg-primary align-items-cente"> */}
					<HeadingPrimary>Doctors</HeadingPrimary>
					{/* </div> */}
					<BtnPrimary>Add New</BtnPrimary>
				</div>

				<div className="bg-info">
					<input type="text" placeholder="Search" />
				</div>
			</Header>

			<Main>
				<div className="d-flex animate__animated animate__fadeIn">Doctors</div>
			</Main>
		</div>
	);
};

export default Doctors;
