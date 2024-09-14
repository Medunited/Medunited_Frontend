import { BsPersonFillAdd } from "react-icons/bs";
import { Overview } from "../../components";
import { bgColor } from "../../variables/Variables";
import { DashboardOverviewWrapper } from "./DashboardHeaderStyle";
import { FaBed, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const DashboardOverview = () => {
	const overviewDetails = [
		{ text: "Admitted patients", icon: <BsPersonFillAdd />, count: 629, bgColor: bgColor.bg_green },
		{ text: "Appointments", icon: <FaUserNurse />, count: 68, bgColor: bgColor.bg_yellow_dark },
		{ text: "Rooms Occupied", icon: <FaBed />, count: 64 + "%", bgColor: bgColor.bg_secondary_color },
		{ text: "Total Revenue", icon: <FaUserDoctor />, count: 18, bgColor: bgColor.bg_red_dark },
	];

	return (
		<DashboardOverviewWrapper>
			{overviewDetails.map((items) => (
				<div className="col overview" key={items.text}>
					<Overview text={items.text} icon={items.icon} count={items.count} bgColor={items.bgColor} />
				</div>
			))}
		</DashboardOverviewWrapper>
	);
};

export default DashboardOverview;
