import { ReactNode } from "react";
import { Container } from "../components";
import { marginTop } from "../variables/Variables";

interface Props {
	children: ReactNode;
}
const Main = ({ children }: Props) => {
	return (
		<main style={{ padding: "0 0 3rem 0", margin: `${marginTop.medium} 0 0 0` }}>
			<Container>
				<div>{children}</div>
			</Container>
		</main>
	);
};

export default Main;
