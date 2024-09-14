import { BiSolidDownArrow } from "react-icons/bi";

interface Props {
	bgColor: string;
	width: string;
	emoji: string;
}
const ReviewProgressBar = ({ bgColor, width, emoji }: Props) => {
	return (
		<div className="progress-bar-wrapper" style={{ backgroundColor: bgColor, width: width }}>
			<div className="review-details">
				<div className="emoji-container">
					<span className="emoji">{emoji}</span>
					<span>{width}</span>
				</div>

				<div className="arrow">
					<BiSolidDownArrow size={19} />
				</div>
			</div>
		</div>
	);
};

export default ReviewProgressBar;
