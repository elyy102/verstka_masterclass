import React from 'react'
import { useState } from "react"
import  icon_profile from './assets/icon_profile.svg'
import Modal_3 from "./ModalProfileUser"

export const Header = () => {

  const [showModal3, setShowModal3] = useState(false);

  const toggleShowModal3 = () => {
  setShowModal3(!showModal3);
};

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className='logo'>master<span>Class</span></h1>
        <Modal_3 show={showModal3} onCloseButtonClick={toggleShowModal3} />
        <img className='profile_icon' src={icon_profile} alt="" onClick={toggleShowModal3} />
      </div>
    </div>
  )
}

export default Header