import React from 'react'
import SidebarItem from './SidebarItem'
import items from './sidebarItem.json'

function Sidebar() {



  return (
    <div className='sidebarsub-div'>
      {
        items.map((item,index) => (
          <SidebarItem item={item} key={index} />
        ))
      }
    </div>
  )
}

export default Sidebar