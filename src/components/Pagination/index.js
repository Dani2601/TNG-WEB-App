import React, { useMemo } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const {
    dataPageCount,
    pageNumber,
    setPageNumber,
    // refreshCheckbox,
    // hasCheckbox,
  } = props;

  function setPageNumberUsingPages(pageNumber) {
    setPageNumber(pageNumber);
    // if (hasCheckbox) {
    //   refreshCheckbox();
    // }
  }

  // function getSelectedPage(pageNumber, currentPage) {
  //   if (currentPage === pageNumber) {
  //     return "bg-gray-200";
  //   } else return "";
  // }
  let pagesCount = 10
  
  const previous = '<<';
  const next = '>>';
  const pages = useMemo(() => {
    const pageLinks = [];
    for (let index = 0; index < pagesCount; index++) {
      if (pageNumber >= pagesCount && pagesCount < dataPageCount) {
        pageLinks.push(
          <li className="page-item" key={index}>
            <button
              className={`${
                pageNumber === index + 1
                  ? "bg-bakebe-pink text-gray-800"
                  : "bg-transparent text-gray-800"
              } page-link relative block py-1.5 px-3 outline-none transition-all duration-300 rounded focus:shadow-none`}
              onClick={() => setPageNumberUsingPages(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ); 
        pagesCount++
        pageLinks.pop(index)
      } else if (dataPageCount < pagesCount){
        pagesCount = dataPageCount
        pageLinks.push(
          <li className="page-item" key={index}>
            <button
              className={`${
                pageNumber === index + 1
                ? "bg-bakebe-pink text-white"
                : "bg-transparent text-bakebe-pink"
              } page-link relative block py-1.5 px-3 border-gray-200 border-l-[1px]  transition-all duration-300  focus:shadow-none`}
              onClick={() => setPageNumberUsingPages(index + 1)}
              style={{ fontFamily: "Gotham-Light, sans-serif" }}

            >
              {index + 1}
            </button>
          </li>
        ); 
      }

      else {
        pageLinks.push(
          <li className="page-item" key={index}>
            <button
              className={`${
                pageNumber === index + 1
                  ? "bg-bakebe-pink text-white"
                  : "bg-transparent text-bakebe-pink"
              } page-link relative block py-1.5 px-3  border-gray-200 border-l-[1px]  transition-all duration-300  focus:shadow-none`}
              onClick={() => setPageNumberUsingPages(index + 1)}
              style={{ fontFamily: "Gotham-Light, sans-serif" }}

            >
              {index + 1}
            </button>
          </li>
        ); 
      }
            
    }
    return pageLinks;
  }, [dataPageCount, pageNumber, setPageNumberUsingPages]);

  function previousPage() {
    if (pageNumber !== 1) {
      let previousPageNumber = pageNumber - 1;
      setPageNumber(previousPageNumber);
      // refreshCheckbox();
    }
  }

  function nextPage() {
    if (pageNumber !== dataPageCount) {
      let nextPageNumber = pageNumber + 1;
      setPageNumber(nextPageNumber);
      // refreshCheckbox();
    }
  }

  return (
    <div className="flex justify-center "                       style={{ fontFamily: "Gotham-Light, sans-serif" }}
    >
      <nav aria-label="Page navigation example ">
        <ul className="flex list-style-none border-gray-200  border-t-[1px] border-b-[1px]">
          <li className="page-item border-gray-200  ">
            <button
              className="page-link relative block py-1.5 border-gray-200 border-l-[1px] border-r-[1px] px-3 border-1 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
              onClick={() => previousPage()}
            >
              <FiChevronsLeft className="mt-1"/>
            </button>
          </li>
          {pages}
          <li className="page-item ">
            <button
              className="page-link relative block py-1.5 px-3 border-1 bg-transparent border-gray-200 border-r-[1px] border-l-[1px]  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              onClick={() => nextPage()}
            >
              <FiChevronsRight className="mt-1"/>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
