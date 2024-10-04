import { IoIosArrowForward, IoMdStar } from "react-icons/io";
import { DoctorListWrapper } from "./DoctorContainerStyle";
import { bgColor } from "../../variables/Variables";
import { MdStarHalf } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useDoctorInfoStateManagement from "../../stateManagement/useDoctorInfoStateManagement";
import { ReactNode } from "react";

export type DoctorProps = {
	name: string;
	department: string;
	yearsOfExperience: string;
	fees?: number | string | null;
	rating: number;
	reviews_number: number;
	services: string[];
	availabilityStart: string;
	availabilityEnd: string;
	ratingStar?: ReactNode;
};

interface DoctorListProps {
	items: DoctorProps;
}

const DoctorLists = ({ items }: DoctorListProps) => {
	const { setDoctorInfo } = useDoctorInfoStateManagement();
	const navigate = useNavigate();

	// Rating Star to display depending on the rating
	const ratingStar = items.rating >= 3 ? <IoMdStar color={bgColor.bg_yellow_dark} /> : <MdStarHalf color={bgColor.bg_red_dark} />;

	const fee =
		items.fees && items.fees.toString().length <= 9
			? `${items.fees?.toLocaleString("en-NG", {
					style: "currency",
					currency: "NGN",
			  })}`
			: "---";

	const onClick = () => {
		if (!items) return;
		setDoctorInfo({ ...items, fees: fee, ratingStar: ratingStar }); //Passes the doctor's information when clicked
		navigate("/doctor-info");
	};

	return (
		<DoctorListWrapper onClick={onClick}>
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
							{fee}
						</span>
					</div>

					<div className="feedbacks">
						<div className="text">Feedbacks</div>
						<div className="rating d-flex">
							<div className="text_2 d-flex align-items-center">
								<div className="d-flex align-items-center">{ratingStar}</div>
								<div className="rating-value" style={{ color: items.rating >= 3 ? bgColor.bg_yellow_dark : bgColor.bg_red_dark, fontWeight: "500", margin: "0 .7rem" }}>
									{items.rating}
								</div>
							</div>

							<div>({items.reviews_number})</div>
						</div>
					</div>
				</div>
			</div>
		</DoctorListWrapper>
	);
};

export default DoctorLists;
