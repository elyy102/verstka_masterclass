import Person from "./assets/person.fill.svg"
import Like from "./assets/heart.fill.svg"
import Paint from "./assets/paintpalette.fill.svg"

const ModalProfileUser = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="profile_modal">
          <div className="container">
          <div>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
            </div>
            <div className="info_name">
                <img src={Person} alt="" className="profile_icon" />
                <h1 className="name">Иванов Иван Иванович</h1>
            </div>
                <p className="email">Email : <span>@ivanov</span></p>
                <p className="email">Номер телефона : <span>+7908535794</span></p>
            <hr class="hr-line"></hr>
            <div className="info_btn">
                <img src={Like} alt="" className="profile_icon" />
                <h1 className="like">Избранное</h1>
            </div>
            <div className="info_btn">
                <img src={Paint} alt="" className="profile_icon" />
                <h1 className="like">Мои мастер-классы</h1>
            </div>
          </div>
            <button className='logout_btn'>Выйти</button>
        </div>
      </div>
    );
};
  
export default ModalProfileUser;
  