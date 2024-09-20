import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
	const { nextPage } = useAppointmentStateManagement();
	const [indexNum, setIndexNum] = useState(1); //For next page auto select on clicking next or previous button
	const [goToPageNumber, setGoToPageNumber] = useState("");

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

	// Invalid page input for go to page
	const invalidPage = parseInt(goToPageNumber) <= 0 || parseInt(goToPageNumber) > pages.length;

	// Next and previous button function on click
	const nextPrevPage = (pageNo: number) => {
		nextPage(paginationParams.listStartName, paginationParams.listEndName, paginationParams.pageLimit, pageNo);
		setGoToPageNumber("");
	};

	// Go to Page
	const checkGoToPageValue = () => {
		setIndexNum(parseInt(goToPageNumber));
		nextPrevPage(parseInt(goToPageNumber) * paginationParams.pageLimit - 7);
	};

	return (
		<PaginationContainer>
			{/* Showing 1 - 7 of 50 items section */}

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

			{/* Page numbering section */}

			{listPageNo > paginationParams.pageLimit && (
				<div className="pagination">
					{/* Previous Button */}

					<div className="pagination-page-numbers">
						<button
							disabled={paginationParams.startPage <= 0}
							className="paginationBtn btn-previous"
							onClick={() => {
								nextPrevPage(paginationParams.startPage - 7);
								setIndexNum(indexNum - 1);
							}}>
							<IoIosArrowBack />
							<span>Previous</span>
						</button>
						{/* Pages */}
						{pages.map((pages) => (
							<button
								key={pages}
								className="paginationBtn pageNumberBtn"
								id={pages === indexNum ? "active" : ""}
								onClick={() => {
									nextPrevPage((pages - 1) * 7);
									setIndexNum(pages); //Changes the index to the page number clicked so that next page will be selected on clicking next or previous button
								}}>
								{pages}
							</button>
						))}
						{/* Next Button */}
						<button
							disabled={paginationParams.endPage >= listPageNo}
							className="paginationBtn btn-next"
							onClick={() => {
								nextPrevPage(paginationParams.startPage + 7);
								setIndexNum(indexNum + 1);
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
		</PaginationContainer>
	);
};

export default Pagination;
