import { ReactNode } from "react";
import { BtnPrimaryWrapper } from "./ComponentStyles";

interface BtnPrimaryProps {
	children: ReactNode;
	paddingX?: string; //Padding left and right if specified
}

const BtnPrimary = ({ children, paddingX = "2rem" }: BtnPrimaryProps) => {
	return <BtnPrimaryWrapper style={{ padding: `.7rem ${paddingX}` }}>{children}</BtnPrimaryWrapper>;
};

export default BtnPrimary;
