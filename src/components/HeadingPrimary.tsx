import { Heading } from "./ComponentStyles";

interface HeadingProps {
	text: string;
}

const HeadingPrimary = (params: HeadingProps) => {
	return <Heading>{params.text}</Heading>;
};

export default HeadingPrimary;
