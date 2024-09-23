import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { useAppointmentStateManagement } from "../stateManagement";
import { PaginationContainer } from "./ComponentStyles";
import { useState } from "react";

type PaginationTypes = {
	startPage: number;
	endPage: number;
	pageLimit: number;
	listStartName: string;
	listEndName: string;
	listItems: any[];
};

interface PaginationProps {
	paginationParams: PaginationTypes;
}

const Pagination = ({ paginationParams }: PaginationProps) => {
	const { nextPage, setItemPerPage, appointmentListPageLimit, pageNoIndex, setPageNoIndex } = useAppointmentStateManagement();

	const [goToPageNumber, setGoToPageNumber] = useState("");

	const [pageNoSelect, setPageNoSelect] = useState(false);

	let listPageNo = paginationParams.listItems.length;
	let nextPagesNumber;

	if (listPageNo % paginationParams.pageLimit === 0) {
		nextPagesNumber = listPageNo / paginationParams.pageLimit;
	} else {
		nextPagesNumber = listPageNo / paginationParams.pageLimit + 1;
	}

	const pages = [];

	for (let i = 1; i <= nextPagesNumber; i++) {
		pages.push(i);
	}

	// Items per page list
	const itemsPerPageList = [7, 14, 21, 100];

	// Invalid page input for go to page
	const invalidPage = parseInt(goToPageNumber) <= 0 || parseInt(goToPageNumber) > pages.length;

	// Next and previous button function on click
	const nextPrevPage = (pageNo: number) => {
		nextPage(paginationParams.listStartName, paginationParams.listEndName, paginationParams.pageLimit, pageNo);
		setGoToPageNumber("");
	};

	// Go to Page
	const checkGoToPageValue = () => {
		if (goToPageNumber) {
			setPageNoIndex(parseInt(goToPageNumber));
			nextPrevPage(parseInt(goToPageNumber) * paginationParams.pageLimit - paginationParams.pageLimit);
		} else {
			return;
		}
	};

	return (
		<PaginationContainer>
			{/* Showing 1 - pageLimit of 50 items section */}

			{paginationParams.startPage + 1 !== listPageNo ? (
				<div className="showingItemsNumber">
					Showing {paginationParams.startPage + 1} &ndash;
					{listPageNo - paginationParams.endPage <= 0 ? listPageNo : paginationParams.endPage} of {listPageNo} items
				</div>
			) : (
				<div className="showingItemsNumber">
					Showing {paginationParams.startPage + 1} of {listPageNo} items
				</div>
			)}

			<div className="pagination">
				{/*To choose number of Items to display per page */}
				<div className="item-per-page">
					<span className="text">Items per page</span>
					<div className="select-page-number" onClick={() => setPageNoSelect(true)}>
						<span className="page-number">{appointmentListPageLimit}</span>
						<IoMdArrowDropdown size={18} />
					</div>
					{/* Different page numbers to select from */}
					{pageNoSelect && (
						<div className="page-number-list" onClick={() => setPageNoSelect(false)}>
							{itemsPerPageList.map((pageNo) => (
								<div
									key={pageNo}
									className="page-no"
									onClick={() => {
										setItemPerPage(pageNo); //Refreshes the list to first page
										setPageNoIndex(1); //Sets the page number to page 1
									}}>
									{pageNo}
								</div>
							))}
						</div>
					)}
				</div>
				{/* Page numbering section */}
				{listPageNo > paginationParams.pageLimit && (
					<div className="d-flex">
						{/* Previous Button */}
						<div className="pagination-page-numbers">
							<button
								disabled={paginationParams.startPage <= 0}
								className="paginationBtn btn-previous"
								onClick={() => {
									nextPrevPage(paginationParams.startPage - paginationParams.pageLimit);
									setPageNoIndex(pageNoIndex - 1);
								}}>
								<IoIosArrowBack />
								<span>Previous</span>
							</button>
							{/* Pages */}
							{pages.map((pages) => (
								<button
									key={pages}
									className="paginationBtn pageNumberBtn"
									id={pages === pageNoIndex ? "active" : ""}
									onClick={() => {
										nextPrevPage((pages - 1) * paginationParams.pageLimit);
										setPageNoIndex(pages); //Changes the index to the page number clicked so that next page will be selected on clicking next or previous button
									}}>
									{pages}
								</button>
							))}
							{/* Next Button */}
							<button
								disabled={paginationParams.endPage >= listPageNo}
								className="paginationBtn btn-next"
								onClick={() => {
									nextPrevPage(paginationParams.startPage + paginationParams.pageLimit);
									setPageNoIndex(pageNoIndex + 1);
								}}>
								<span>Next</span>
								<IoIosArrowForward />
							</button>
						</div>
						{/* Go to a page number section */}
						<div className="goTo">
							<label htmlFor="input-page-no" className="go-to-page">
								Go to page
							</label>
							<input type="number" className="input-page-no" id="input-page-no" value={goToPageNumber} onChange={(e) => setGoToPageNumber(e.target.value)} />
							<button disabled={invalidPage} className="btn-go" onClick={() => checkGoToPageValue()}>
								{invalidPage ? "Invalid Page no" : "Go"}
							</button>
						</div>
					</div>
				)}
			</div>
		</PaginationContainer>
	);
};

export default Pagination;
