import { HeadingPrimary, ReviewProgressBar } from "../../components";
import { reviewEmojis, reviewQuestions } from "../../hooks/useDashboard";
import { bgColor } from "../../variables/Variables";
import { PatientReviewContainer } from "./DashboardContainerStyle";

const PatientReviews = () => {
	return (
		<PatientReviewContainer>
			<div className="review-heading">
				<div className="review-container">
					<HeadingPrimary>Reviews</HeadingPrimary>
					<div className="total-reviews">Total 289 Reviews</div>
				</div>

				<div className="review-emoji">
					{reviewEmojis.map((emoji) => (
						<div key={emoji.id} className="emoji" role="img" aria-label={emoji.name ? emoji.name : ""} aria-hidden={emoji.name ? "false" : "true"}>
							<span>{emoji.code}</span>
							<div className="emoji-meaning">{emoji.name}</div>
						</div>
					))}
				</div>
			</div>

			<div className="review-questions-container">
				{reviewQuestions.map((review) => (
					<div key={review.id} className="review-feedbacks">
						<div className="review-question">{review.question}</div>

						<div className="review-progress-summary">
							<div className="progress-bar_container">
								<ReviewProgressBar bgColor={bgColor.bg_green} width={review.excelletPercent} emoji="😍" />
								<ReviewProgressBar bgColor={bgColor.bg_yellow_dark} width={review.goodPercent} emoji="😁" />
								<ReviewProgressBar bgColor={bgColor.bg_secondary_color} width={review.OK} emoji="😐" />
								<ReviewProgressBar bgColor={bgColor.bg_red_dark} width={review.poorPercent} emoji="😢" />
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="btn-see-all-reviews">
				<button>See all reviews</button>
			</div>
		</PatientReviewContainer>
	);
};

export default PatientReviews;
