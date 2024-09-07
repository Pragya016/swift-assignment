import React, { useState, useEffect } from 'react';
import styles from './css/pagination.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const numPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div id={styles.container}>
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} id={styles.prevBtn}>
        <ArrowBackIosIcon/>
      </button>
      <span id={styles.pageNum}>{currentPage} of {numPages}</span>
      <button id={styles.nextBtn} disabled={currentPage === numPages} onClick={() => handlePageChange(currentPage + 1)}>
        <ArrowForwardIosIcon/>
      </button>
      </div>
  );
}

export default Pagination;