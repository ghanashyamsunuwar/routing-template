import React from 'react'
import {Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <Link to={'pageone'}>Page One</Link>
        <Link to={'pagetwo'}>Page two</Link>
        <Link to={"pagethree"}>Page three</Link>
    </div>
  )
}

export default Sidebar