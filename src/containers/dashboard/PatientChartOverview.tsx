import { useState } from "react";
import { navlistItems } from "../../hooks/useDashboard";
import { PatientChartOverviewContainer } from "./DashboardContainerStyle";

const PatientChartOverview = () => {
	const [num, setNum] = useState(0);

	return (
		<PatientChartOverviewContainer>
			<ul className="chart-nav">
				{navlistItems.map((items, index) => (
					<li key={items.text} onClick={() => setNum(index)} className={`chart-nav-listItems ${index === num ? "active" : ""}`}>
						{items.text}
					</li>
				))}
			</ul>

			{/* Chart Section */}

			<div className="chart">Chart</div>
		</PatientChartOverviewContainer>
	);
};

export default PatientChartOverview;
