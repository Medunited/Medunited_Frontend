import { IoIosArrowForward, IoMdStar } from "react-icons/io";
import { DoctorListWrapper } from "./DoctorListStyle";
import { bgColor } from "../../variables/Variables";

type DoctorProps = {
	name: string;
	department: string;
	yearsOfExperience: string;
	fees: number;
	rating: number;
	reviews_number: number;
};

interface DoctorListProps {
	items: DoctorProps;
}

const DoctorLists = ({ items }: DoctorListProps) => {
	return (
		<DoctorListWrapper>
			<div className="doctor-photo">&nbsp;</div>

			<div className="doctor-info-container col">
				<div className="section_1">
					<div className="doctor-info">
						<span className="doctor-name">{`Dr. ${items.name}`}</span>
						<IoIosArrowForward />
					</div>

					<div className="doctor-department" style={{ margin: ".2rem 0 1rem 0" }}>
						{items.department} Department
					</div>
				</div>

				<div className="section_2 d-flex justify-content-between">
					<div className="experience">
						<span className="text">Experience</span>
						<span className="text_2 no-of-years" style={{ fontWeight: "500" }}>
							{items.yearsOfExperience}
						</span>
					</div>
					<div className="fees">
						<span className="text">Fees</span>
						<span className="text_2 amount" style={{ fontWeight: "500" }}>
							N{items.fees}
						</span>
					</div>

					<div className="feedbacks">
						<div className="text">Feedbacks</div>
						<div className="rating d-flex">
							<div className="text_2 d-flex align-items-center">
								<div className="d-flex align-items-center">
									<IoMdStar color={bgColor.bg_yellow_dark} />
								</div>
								<div className="rating-value" style={{ color: bgColor.bg_yellow_dark, fontWeight: "500", margin: "0 .7rem" }}>
									{items.rating}
								</div>
							</div>

							<div>{`(${items.reviews_number})`}</div>
						</div>
					</div>
				</div>
			</div>
		</DoctorListWrapper>
	);
};

export default DoctorLists;