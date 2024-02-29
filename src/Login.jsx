import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='wrapper'>
    <div className="login_2">
    <div className="login">
        <h1 className='login_rectangle_h1'>Авторизация</h1>
        <div className="login_rectangle">
            <input className='login_input' placeholder='Введите email...' type="email" />
            <input  className='password_input' placeholder='Введите пароль...' type="password" />
            <button className='login_btn'>Войти</button>
            <p className='login_p'>Ещё нет аккаунта? 
            <Link to={'/reg'}> Зарегистрироваться</Link>
            </p>
        </div>
    </div>
    </div>
</div>
  )
}

export default Login