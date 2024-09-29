import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./ComponentStyles";
import { AppointmentList } from "../containers/appointments/AppointmentLists";
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import useClickOutside from "../hooks/useClickOutside";
import { RefObject, useState } from "react";

type PaginationProps = {
	ItemsPerPage: number;
	itemOffset: number;
	endOffset: number;
	ref: RefObject<any>;

	setItemOffset: (newOffset: number) => void;
	setItemPerPage: (itemPerPage: number) => void;
	items: AppointmentList[];
};

interface PaginationParamsProps {
	paginationParams: PaginationProps;
}

const Pagination = ({ paginationParams }: PaginationParamsProps) => {
	const itemsPerPageList = [7, 15, 25, 100];
	const pageCount = Math.ceil(paginationParams.items.length / paginationParams.ItemsPerPage);

	const [pageNoSelect, setPageNoSelect] = useState(false);
	const handleShowPageNoSelect = () => setPageNoSelect(!pageNoSelect);
	const handleClosePageNoSelect = () => setPageNoSelect(false);

	useClickOutside(paginationParams.ref, handleClosePageNoSelect);

	// Invoke when user click to request another page.
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * paginationParams.ItemsPerPage) % paginationParams.items.length;

		paginationParams.setItemOffset(newOffset);
	};

	return (
		<PaginationContainer>
			<div className="showingItemsNumber">
				Showing {paginationParams.itemOffset + 1} - {paginationParams.endOffset > paginationParams.items.length ? paginationParams.items.length : paginationParams.endOffset} items of {paginationParams.items.length} items
			</div>

			<div className="d-flex align-items-center">
				{/*To choose number of Items to display per page */}

				<div className="item-per-page">
					<span className="text">Items per page</span>
					<div className="select-page-number" onClick={handleShowPageNoSelect}>
						<span className="page-number">{paginationParams.ItemsPerPage}</span>
						<IoMdArrowDropdown size={18} />
					</div>

					{/* Different page numbers to select from */}

					{pageNoSelect && (
						<div className="page-number-list" ref={paginationParams.ref}>
							{itemsPerPageList.map((pageNo) => (
								<div
									key={pageNo}
									className="page-no"
									onClick={() => {
										handleClosePageNoSelect();
										paginationParams.setItemPerPage(pageNo);
										paginationParams.setItemOffset(0);
									}}>
									{pageNo}
								</div>
							))}
						</div>
					)}
				</div>

				<div className="d-flex animate__animated animate__fadeIn">
					<ReactPaginate breakLabel="..." nextLabel={<IoIosArrowForward size={17} />} onPageChange={handlePageClick} forcePage={paginationParams.itemOffset == 0 ? 0 : undefined} pageRangeDisplayed={2} pageCount={pageCount} previousLabel={<IoIosArrowBack size={17} />} renderOnZeroPageCount={null} />
					{/* Go to a page number section */}
					{/* <div className="goTo">
							<label htmlFor="input-page-no" className="go-to-page">
								Go to page
							</label>
							<input type="number" className="input-page-no" id="input-page-no" value={paginationParams.goToPageNo} onChange={(e) => paginationParams.setGoToPage(parseInt(e.target.value))} />
							<button
								className="btn-go"
								onClick={() => {
									setGoTo(paginationParams.goToPageNo);
									console.log(paginationParams.goToPageNo);
								}}>
								Go
							</button>
						</div> */}
				</div>
			</div>
		</PaginationContainer>
	);
};
export default Pagination;
