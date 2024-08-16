import React from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
        <div>
        <TopBar/>
        </div>
        <div>
        <Sidebar/>
        <Outlet/>
        </div>

      
    </div>
  )
}

export default Main