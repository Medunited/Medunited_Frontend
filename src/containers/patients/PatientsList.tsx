import { IoMdMore } from "react-icons/io";
import { HeadingSecondary } from "../../components";
import { PatientListWrapper } from "./PatientStyle";

type PatientList = {
	name: string;
	phone_number: string;
	email_address: string;
	status: string;
	visited_for: string;
	time: string;
};

interface PatientProps {
	patientListItems: PatientList[];
}

const Patients = ({ patientListItems }: PatientProps) => {
	return (
		<PatientListWrapper>
			<div className="heading">
				<div className="col ">
					<HeadingSecondary>Name</HeadingSecondary>
				</div>
				<div className="col">
					<HeadingSecondary>Phone number</HeadingSecondary>
				</div>
				<div className="col ">
					<HeadingSecondary>Email address</HeadingSecondary>
				</div>
				<div className="col">
					<HeadingSecondary>Status</HeadingSecondary>
				</div>
				<div className="col ">
					<HeadingSecondary>Visited for</HeadingSecondary>
				</div>

				<div className="col d-flex justify-content-between">
					<div>
						<HeadingSecondary>Visited/admitted</HeadingSecondary>
					</div>
					<div>
						<HeadingSecondary>Options</HeadingSecondary>
					</div>
				</div>
			</div>

			{patientListItems.length > 0 ? (
				<div className="patient-info-wrapper">
					{patientListItems.map((item, index) => (
						<div key={index} className="patient-info">
							<div className="col patient-name">
								<span>{item.name}</span>
							</div>

							<div className="col">
								<span>{item.phone_number}</span>
							</div>
							<div className="col">
								<span>{item.email_address}</span>
							</div>
							<div className="col">
								<span>{item.status}</span>
							</div>
							<div className="col">
								<span>{item.visited_for}</span>
							</div>
							<div className="col d-flex justify-content-between align-items-center">
								<div className="">
									<span>{item.time}</span>
								</div>
								<button className="more-options">
									<span>
										<IoMdMore size={18} />
									</span>
								</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<div style={{ margin: "2rem 0 0 0" }}>No Patient Found</div>
			)}
		</PatientListWrapper>
	);
};

export default Patients;
