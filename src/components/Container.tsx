import { ReactNode } from "react";
import { Wrapper } from "./ComponentStyles";

interface Props {
	children: ReactNode;
}
const Container = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Container;
