import BtnPrimary from "./BtnPrimary";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";
import { ReactNode } from "react";
import { PopUpWrapper } from "./ComponentStyles";

type PopUpParams = {
	icon: ReactNode;
	text: string;
	btn_name_1: string;
	btn_name_2: string;
	ref: any;
	onClose: () => void;
	onOpen: () => void;
	navigateLink: string;
};

interface PopUpProps {
	popupItem: PopUpParams;
}

const PopUp = ({ popupItem }: PopUpProps) => {
	const navigate = useNavigate();

	useClickOutside(popupItem.ref, () => popupItem.onOpen);

	return (
		<PopUpWrapper className="animate__animated animate__fadeIn" ref={popupItem.ref}>
			<div className="popup-container animate__animated animate__bounceIn">
				<div className="text-container" style={{ textAlign: "center" }}>
					<div style={{ margin: "0 0 1rem 0" }}>{popupItem.icon}</div>
					<span>{popupItem.text}</span>
				</div>

				<div className="btn_wrapper">
					<button
						className="btn_close"
						onClick={() => {
							navigate(popupItem.navigateLink);
							popupItem.onClose();
						}}>
						{popupItem.btn_name_1}
					</button>

					<div onClick={popupItem.onClose}>
						<BtnPrimary>{popupItem.btn_name_2}</BtnPrimary>
					</div>
				</div>
			</div>
		</PopUpWrapper>
	);
};

export default PopUp;
