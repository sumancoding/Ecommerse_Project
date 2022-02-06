import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'


function Layout() {
  return (
    <div>
      <CssBaseline />  {/* This provides reset setting, margin, pading will be 0 */}
      <NavBar /> 
      <Outlet /> {/* Predefined component for nesting child along with Parent component */}

     
    </div>
  )
}

export default Layout
