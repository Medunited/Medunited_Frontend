import { IoMdMore } from "react-icons/io";
import { HeadingSecondary } from "../../components";

const Patients = () => {
	return (
		<div>
			<div className="heading bg-white d-flex" style={{ padding: "1rem 1rem 1rem 4rem" }}>
				<div className="col">
					<HeadingSecondary>Name</HeadingSecondary>
				</div>
				<div className="col-2">
					<HeadingSecondary>Phone number</HeadingSecondary>
				</div>
				<div className="col">
					<HeadingSecondary>Email address</HeadingSecondary>
				</div>
				<div className="col-2">
					<HeadingSecondary>Status</HeadingSecondary>
				</div>
				<div className="col-2">
					<HeadingSecondary>Visited for</HeadingSecondary>
				</div>

				<div className="col d-flex justify-content-between">
					<div className="col" style={{ margin: "0 2rem 0 0" }}>
						<HeadingSecondary>Visited/admitted</HeadingSecondary>
					</div>
					<div className="col">
						<HeadingSecondary>Options</HeadingSecondary>
					</div>
				</div>
			</div>

			<div className="heading bg-white d-flex" style={{ padding: "1rem 1rem 1rem 4rem", fontSize: "1.2rem" }}>
				<div className="col">
					<span>Jimmy Taylor</span>
				</div>
				<div className="col-2">
					<span>+1 240-337-3535</span>
				</div>
				<div className="col">
					<span>emailaddress@gmail.com chris@gmail.com chris@gmail.com</span>
				</div>
				<div className="col-2">
					<span>Discharged</span>
				</div>
				<div className="col-2">
					<span>Flue</span>
				</div>

				<div className="col d-flex justify-content-between">
					<div className="col bg-info" style={{ margin: "0 1rem 0 0" }}>
						<span>12 Jun, 21 12:30 pm</span>
					</div>
					<div className="col-3 bg-primary" style={{ textAlign: "center" }}>
						<span>
							<IoMdMore />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Patients;
