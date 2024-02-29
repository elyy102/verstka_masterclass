import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {

  return (
    <div className="wrapper">
      <div className="footer">
      <Link to={'/'} className='link_logo'><h1 className='logo'>master<span>Class</span></h1></Link>      </div>
    </div>
  )
}

export default Footer