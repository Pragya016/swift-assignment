import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import Table from '../components/Table'
import { useNavigate } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';
import { IconButton } from '@mui/material'
import Pagination from '../components/Pagination'
import { useDashboardContext } from '../context/dashboard.context'
import SortColumn from '../components/SortColumn'

const ITEMS_PER_PAGE = 10;

export default function DashboardPage() {
  const navigate = useNavigate();
  const {filteredData} = useDashboardContext();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // find the data to display according to the page number
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const slicedData = filteredData.slice(startIndex, endIndex);

  const containerStyles = {
      display: 'flex',
      flexDirection: 'column',
      height: '90vh',
      width:'100vw'
  } 

  const topContainerStyles = {
      display: 'flex',
      justifyContent : 'space-between',
      width: '80%',
      margin: '2rem auto',
  }
    
  return (
    <div style={containerStyles}>
    {/* top container, contains sorting and searching options */}
      <div style={topContainerStyles}>
        <div style={{display:'flex', alignItems:'center'}}>
          <IconButton
            onClick={() => navigate('/')}
            style={{
              boxShadow: '0 3px 10px lightgrey',
              height: '2.8rem',
              width: '2.8rem',
              marginRight:'10px'
            }}
          ><ReplyIcon />
          </IconButton>
          <SortColumn columnKey="email" label="Email" />
          <SortColumn columnKey="postId" label="Post ID" />
          <SortColumn columnKey="name" label="Name" />
            {/* <SortEmail/>
            <SortPostID />
            <SortName/> */}
        </div>
        <SearchBox />
    </div>
    {/* middle container, contains the data */}
      <Table data={ slicedData} />
          
    {/* bottom container, contains the pagination buttons */}
      <Pagination
        totalItems={filteredData.length} 
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
          
    </div>
  )
}
