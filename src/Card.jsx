import React from 'react'
import { useState } from "react"
import  mk from './assets/mk-1.svg'
import Modal from "./ModalRecord"
import Modal_2 from "./ModalMore"


export const Card = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
  setShowModal(!showModal);
};

const [showModal2, setShowModal2] = useState(false);

const toggleShowModal2 = () => {
setShowModal2(!showModal2);
};

  return (
    <div className="card">
        <div className="image_container">
          <Modal_2 show={showModal2} onCloseButtonClick={toggleShowModal2} />
          <img src={mk} alt="" onClick={toggleShowModal2}/>
          <div class="card_price">1090Р</div>
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