import { FaCamera } from "react-icons/fa";
import { AddItemPopUp, HeadingPrimary } from "../../components";
import { bgColor, fontSize, textColor } from "../../variables/Variables";

interface Props {
	onClose: () => void;
}

const AddNewPatient = ({ onClose }: Props) => {
	return (
		<AddItemPopUp onClose={onClose}>
			<section style={{ padding: "0 3rem 0 3rem" }}>
				<div className="heading d-flex align-items-center justify-content-between">
					<HeadingPrimary>Add Patient</HeadingPrimary>
					<div className="patient-photo d-flex align-items-center justify-content-center flex-column" style={{ color: textColor.text_blue, backgroundColor: bgColor.input_bg_color_1, height: "80px", width: "80px", borderRadius: "20px" }}>
						<FaCamera size={23} color="inherit" />
						<span style={{ fontSize: ".9rem", margin: ".5rem 0 0 0" }}>Add Photo</span>
					</div>
				</div>
			</section>

			<section className="patient_info" style={{ margin: "0rem 0 4rem 0" }}>
				<form style={{ fontSize: fontSize.font_size_small }}>
					<div className="form-section-1" style={{ padding: "0 3rem 2rem 3rem", borderBottom: `3.5px solid ${bgColor.input_bg_color_1}` }}>
						<div className="form-wrapper" style={{ margin: "0 0 2rem 0" }}>
							<label htmlFor="fullName" style={{ display: "inline-block", margin: "0 0 0 2rem" }}>
								Full Name
							</label>
							<input type="text" name="fullName" id="fullName" style={{ padding: "1rem 2rem", backgroundColor: bgColor.input_bg_color_1, margin: "1rem 0 0 0", width: "100%", borderRadius: "30px" }} />
						</div>

						<div className="d-flex form-wrapper">
							<div style={{ margin: "0 1.5rem 0 0" }}>
								<label htmlFor="fullName" style={{ display: "inline-block", margin: "0 0 0 2rem" }}>
									Full Name
								</label>
								<input type="text" name="fullName" id="fullName" style={{ padding: "1rem 2rem", backgroundColor: bgColor.input_bg_color_1, margin: "1rem 0 0 0", width: "100%", borderRadius: "30px" }} />
							</div>

							<div>
								<label htmlFor="fullName" style={{ display: "inline-block", margin: "0 0 0 2rem" }}>
									Full Name
								</label>
								<input type="text" name="fullName" id="fullName" style={{ padding: "1rem 2rem", backgroundColor: bgColor.input_bg_color_1, margin: "1rem 0 0 0", width: "100%", borderRadius: "30px" }} />
							</div>
						</div>
					</div>

					<div className="form-section-2"></div>

					<div className="form-section-3"></div>
				</form>
			</section>
		</AddItemPopUp>
	);
};

export default AddNewPatient;
