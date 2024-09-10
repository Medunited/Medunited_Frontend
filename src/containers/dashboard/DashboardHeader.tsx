import { MdArrowDropDown } from "react-icons/md";
import { Container, HeadingPrimary } from "../../components";
import { textColor } from "../../variables/Variables";
import { Button, DashboardHeaderContainer } from "./DashboardHeaderStyle";

const DashboardHeader = () => {
	return (
		<DashboardHeaderContainer>
			<Container>
				<div className="wrapper">
					<HeadingPrimary text="Dashboard" />

					<Button>
						<span className="time-text">This Week</span>
						<MdArrowDropDown color={textColor.text_white} size={28} />
					</Button>
				</div>
			</Container>
		</DashboardHeaderContainer>
	);
};

export default DashboardHeader;
