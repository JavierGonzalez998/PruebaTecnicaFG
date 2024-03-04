import React, { FC, ChangeEvent, useEffect, useState } from "react";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";

const index = (props) => {
  const { total, changePage, size } = props
  const {
    currentPage,
    setCurrentPage,
    pagesCount,
    pages
  } = usePagination({
    pagesCount: total%size === 0 ? total/size: Math.trunc((total/size)+1),
    total,
    initialState: { currentPage: 1 },
  });

  const handleChangePage = (number) => {
    changePage(number)
    setCurrentPage(number)
  }
  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handleChangePage}
    >
      <PaginationContainer>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationPageGroup>
          {pages.map((page) => (
            <PaginationPage
              key={`pagination_page_${page}`}
              page={page}
              w={7}
              bg="gray.50"
              fontSize="sm"
              _hover={{
                bg: "blue.300"
              }}
              _current={{
                w: 7,
                bg: "blue.300",
                fontSize: "sm",
                _hover: {
                  bg: "blue.300"
                },
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext>Next</PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};

export default index;