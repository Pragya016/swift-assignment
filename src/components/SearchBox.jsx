import { OutlinedInput } from '@mui/material';
import React from 'react';
import { useDashboardContext } from '../context/dashboard.context';

export default function SearchBox() {
  const { dashboardData, setFilteredData } = useDashboardContext();

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();

    // If dashboardData is null or undefined, do nothing
    if (!dashboardData) return;

    if (value !== '') {
      // Update filtered data based on search value
      setFilteredData(dashboardData.filter(data => 
        data.name.toLowerCase().includes(value) || 
        data.email.toLowerCase().includes(value) || 
        data.body?.toLowerCase().includes(value) 
      ));
    } else {
      // If search is cleared, reset to original dashboardData
      setFilteredData(dashboardData);
    }
  }

  return (
    <OutlinedInput
      style={{width:'35%'}}
      placeholder="Search comments"
      onChange={handleSearch}
    />
  );
}
