import { ReactNode } from "react";
import { HeadingSecondaryContainer } from "./ComponentStyles";

interface Props {
	children: ReactNode;
}

const HeadingSecondary = ({ children }: Props) => {
	return <HeadingSecondaryContainer>{children}</HeadingSecondaryContainer>;
};

export default HeadingSecondary;
