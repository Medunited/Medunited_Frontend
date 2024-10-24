import { ReactNode } from "react";
import { bgColor } from "../variables/Variables";
interface Props {
	children: ReactNode;
	onClose: () => void;
}

const AddItemPopUp = ({ children, onClose }: Props) => {
	return (
		<div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "100vh", width: "100vw", backgroundColor: "rgba(0,0,0,0.2)" }}>
			<div className="" style={{ height: "100%", width: "500px", backgroundColor: "#fff", margin: "0 0 0 auto" }}>
				<div style={{ padding: "100px 0 0 0" }}>
					{children}

					<section className="btn-container d-flex">
						<button className="col" onClick={onClose} style={{ backgroundColor: bgColor.bg_secondary_color, color: "#fff", padding: "1rem 0" }}>
							Cancel
						</button>
						<button className="col" style={{ backgroundColor: bgColor.bg_primary_color, color: "#fff" }}>
							Submit
						</button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AddItemPopUp;
