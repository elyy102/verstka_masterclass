import React from 'react'
import  mk from './assets/mk-1.svg'

export const Card = () => {
  return (
    <div className="card">
        <div className="image_container">
           <img src={mk} alt="" />
        </div>
        
        <p className="card_name">Мастер-класс по скульптуре в студии «Объём» </p>
        <p className="card_date">1 марта, 17.00</p>
        <button className='card_btn'>Записаться</button>
    </div>
  )
}

export default Card