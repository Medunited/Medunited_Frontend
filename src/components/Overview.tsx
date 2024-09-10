import { ReactNode } from "react";
import { OverviewWrapper } from "./ComponentStyles";

interface Props {
	text: string;
	icon: ReactNode;
	count: number | string; //change to number
	bgColor: string;
}

const Overview = (params: Props) => {
	return (
		<OverviewWrapper>
			<div className="overview-text">{params.text}</div>
			<div className="overview-container">
				<div className="overview-icon" style={{ backgroundColor: params.bgColor }}>
					{params.icon}
				</div>
				<div className="overview-count">{params.count}</div>
			</div>
		</OverviewWrapper>
	);
};

export default Overview;
