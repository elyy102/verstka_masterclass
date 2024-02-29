const ModalAddmk = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal_head">
            <p className="p_modal_head">Добавление мастер-класса</p>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
          </div>
          <div className="modal_content">
            <input className='login_input' placeholder='Название...' type="text" />
            <input className='login_input' placeholder='Цена...' type="text" />
            <input className='login_input' placeholder='Дата...' type="text" />
            <input className='login_input' placeholder='Прикрепите файл...' type="text" />
            <input className='login_input' placeholder='Место проведения ...' type="text" />
            <input className='login_input' placeholder='Адрес...' type="text" />
            <input className='login_input' placeholder='Образовательная тематика...' type="text" />
            <input className='login_input' placeholder='Возрастное ограничение...' type="text" />
            <button className='logout_btn'>Добавить</button>
        </div>
        </div>
      </div>
    );
};
  
export default ModalAddmk;
  