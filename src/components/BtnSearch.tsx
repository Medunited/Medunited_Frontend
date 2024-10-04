import { GoSearch } from "react-icons/go";
import { BtnSearchWrapper } from "./ComponentStyles";

interface SearchProps {
	setSearch: (value: string) => void;
	searchParam: string;
}

const BtnSearch = ({ setSearch, searchParam }: SearchProps) => {
	return (
		<BtnSearchWrapper>
			<button className="icon-search">
				<GoSearch />
			</button>
			<input type="text" placeholder="Search" value={searchParam} onChange={(e) => setSearch(e.target.value)} />
		</BtnSearchWrapper>
	);
};

export default BtnSearch;
