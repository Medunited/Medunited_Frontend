import { Overview } from "../../components";
import { DashboardOverviewWrapper } from "./DashboardContainerStyle";
import { overviewDetails } from "../../hooks/useDashboard";

const DashboardOverview = () => {
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
