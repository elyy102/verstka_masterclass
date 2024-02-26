import React from 'react'
import  icon_profile from './assets/icon_profile.svg'

export const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className='logo'>master<span>Class</span></h1>
        <img className='profile_icon' src={icon_profile} alt="" />
      </div>
    </div>
  )
}

export default Header