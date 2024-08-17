import React from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <div className='main-div'>
        <div>
        <TopBar/>
        </div>
        <div className='sidebar-div'>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Main