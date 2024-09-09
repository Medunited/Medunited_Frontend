import { MdArrowDropDown } from "react-icons/md";
import { HeadingPrimary } from "../../components";
import { textColor } from "../../variables/Variables";
import { Button, DashboardHeaderContainer } from "./DashboardHeaderStyle";

const DashboardHeader = () => {
	return (
		<DashboardHeaderContainer>
			<div className="wrapper">
				<HeadingPrimary text="Dashboard" />

				<Button>
					<span className="time-text">This Week</span>
					<MdArrowDropDown color={textColor.text_white} size={28} />
				</Button>
			</div>
		</DashboardHeaderContainer>
	);
};

export default DashboardHeader;
