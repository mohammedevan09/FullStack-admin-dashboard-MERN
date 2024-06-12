import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import { useGetUserQuery } from '../../state/api.jsx'

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width:600px')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const userId = useSelector((state) => state?.global?.userId)
  const { data } = useGetUserQuery(userId)
  // console.log('data', data)

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
