import { ReactNode } from "react";
import { OverviewWrapper } from "./ComponentStyles";
import { useNavigate } from "react-router-dom";

interface Props {
	text: string;
	icon: ReactNode;
	count: number | string; //change to number
	bgColor: string;
	page: string;
}

const Overview = (params: Props) => {
	const navigate = useNavigate();

	return (
		<OverviewWrapper onClick={() => navigate(params.page)}>
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
