import { IoMdStar } from "react-icons/io";
import { bgColor } from "../../variables/Variables";
import { DoctorReviewWrapper } from "./DoctorContainerStyle";

const DoctorReviews = () => {
	const reviewList = [1, 2, 3]; //Change with real reviews

	return (
		<DoctorReviewWrapper>
			<h2 className="heading">Recent Reviews</h2>

			<div className="reviews-container">
				{reviewList.map((item) => (
					<div key={item} className="reviews">
						<div className="reviewer">
							<div className="reviewer-photo"></div>

							<div className="reviewer-details">
								<span className="reviewer-name">Ronny George</span>

								<div className="rating-and-date-container">
									<div className="review-rating-container">
										<span className="review-star">
											<IoMdStar color={bgColor.bg_yellow_dark} />
										</span>
										<span className="rating">5.0</span>
									</div>

									<span className="review-date">20 oct. 2024</span>
								</div>
							</div>
						</div>

						<div className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, asperiores? Soluta rem id officiis voluptatibus, accusantium inventore</div>
					</div>
				))}
			</div>
		</DoctorReviewWrapper>
	);
};

export default DoctorReviews;
