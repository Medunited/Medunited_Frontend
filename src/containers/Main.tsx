import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const Main = ({ children }: Props) => {
	return <main style={{ padding: "0 0 3rem 0" }}>{children}</main>;
};

export default Main;
