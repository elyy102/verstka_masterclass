import React from 'react'
import { useState } from "react"
import  mk from './assets/mk-1.svg'
import Modal from "./ModalRecord"

export const Card = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
  setShowModal(!showModal);
};

  return (
    <div className="card">
        <div className="image_container">
           <img src={mk} alt="" />
        </div>
        
        <p className="card_name">Мастер-класс по скульптуре в студии «Объём» </p>
        <p className="card_date">1 марта, 17.00</p>
        <div>
        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
          <button className='card_btn' onClick={toggleShowModal}>Записаться</button>
        </div>
    </div>
  )
}

export default Card