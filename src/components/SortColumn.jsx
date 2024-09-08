import React, { useState, useEffect } from 'react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import styles from './css/sort.column.module.css';
import { useDashboardContext } from '../context/dashboard.context';

export default function SortColumn({ columnKey, label }) {
  const { dashboardData, setFilteredData } = useDashboardContext();
  const [sortMode, setSortMode] = useState(0); // 0 = no sort, 1 = ascending, 2 = descending

  // Load sort mode from localStorage on component mount
  useEffect(() => {
    const savedSortMode = parseInt(localStorage.getItem(`${columnKey}SortMode`), 10) || 0;
    setSortMode(savedSortMode);
  }, [columnKey]);

  // Save sort mode 
  useEffect(() => {
    localStorage.setItem(`${columnKey}SortMode`, sortMode);
    sortData();
  }, [sortMode, dashboardData]);

  //sorting modes: no sort -> ascending -> descending -> no sort
  function toggleSort() { setSortMode((prev) => (prev + 1) % 3); }

function sortData() {
  let sortedData = [...dashboardData];
  
  if (sortMode === 1) {
    sortedData.sort((a, b) => {
      if (typeof a[columnKey] === 'number' && typeof b[columnKey] === 'number') {
        // for numbers
        return a[columnKey] - b[columnKey]; 
      } else {
        // for strings
        return a[columnKey].toString().localeCompare(b[columnKey].toString());
      }
    });
  } else if (sortMode === 2) {
    sortedData.sort((a, b) => {
      if (typeof a[columnKey] === 'number' && typeof b[columnKey] === 'number') {
        //for numbers
        return b[columnKey] - a[columnKey]; 
      } else {
        // for strings
        return b[columnKey].toString().localeCompare(a[columnKey].toString()); 
      }
    });
  }

  setFilteredData(sortMode === 0 ? dashboardData : sortedData);
}


  return (
    <div className={styles.sortBtn} onClick={toggleSort}>
      Sort {label} <SwapVertIcon />
    </div>
  );
}
