import { ReactNode } from "react";
import { Heading } from "./ComponentStyles";

interface HeadingProps {
	children: ReactNode;
}

const HeadingPrimary = (params: HeadingProps) => {
	return <Heading>{params.children}</Heading>;
};

export default HeadingPrimary;
