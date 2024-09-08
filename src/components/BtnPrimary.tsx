import { BtnPrimaryWrapper } from "./ComponentStyles";

interface BtnPrimaryProps {
	name: string;
	paddingX?: string; //Padding left and right if specified
}

const BtnPrimary = ({ name, paddingX = "2rem" }: BtnPrimaryProps) => {
	return <BtnPrimaryWrapper style={{ padding: `.7rem ${paddingX}` }}>{name}</BtnPrimaryWrapper>;
};

export default BtnPrimary;
