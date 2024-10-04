import { GoSearch } from "react-icons/go";
import { BtnSearchWrapper } from "./ComponentStyles";
import useDoctorInfoStateManagement from "../stateManagement/useDoctorInfoStateManagement";

interface SearchProps {
	// setSearch: (value: string) => void;
	searchParam: string;
	searchName: string;
}

const BtnSearch = ({ searchParam, searchName }: SearchProps) => {
	const { setSearchParam } = useDoctorInfoStateManagement();
	return (
		<BtnSearchWrapper>
			<button className="icon-search">
				<GoSearch />
			</button>
			<input type="text" placeholder="Search" name={searchName} value={searchParam} onChange={(e) => setSearchParam(e.target.name, e.target.value)} />
		</BtnSearchWrapper>
	);
};

export default BtnSearch;
