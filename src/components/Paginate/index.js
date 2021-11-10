import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Icon } from 'semantic-ui-react';
import PaginateContainer from './style';

const MyPaginate = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const { selected } = data;
    setCurrentPage(selected);
    onPageChange(data);
  };

  useEffect(() => {
    if (pageCount === 1) {
      setCurrentPage(0);
    }
  }, [pageCount]);

  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel={<Icon name="angle left" />}
        nextLabel={<Icon name="angle right" />}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="react-pagination"
        activeClassName="active"
        forcePage={currentPage}
      />
    </PaginateContainer>
  );
};

MyPaginate.propTypes = {
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

MyPaginate.defaultProps = {
  pageCount: 1,
};

export default MyPaginate;
