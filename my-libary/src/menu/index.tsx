import React from 'react'
import { Input } from 'antd';
import './index.css'
// import img in react
import logoImg from '../asset/img/logo-tiki.png';

export default function index() {
  return (
    <nav className="header__navbar header_navbar--success">
        <ul className="header__navbar-list">
            <li className="header__logo">
                <img src={logoImg} alt='tiki' className='logo__tikiImg'></img>
                <Input placeholder="Basic usage" className='header__navbar-search'/>
            </li>
            <div className="header__navbar-links">
                <li className="header__navbar-link header__navbar-home">
                    <a href="#" className="header__navbar-homeLink">Trang chủ</a>
                </li>
                <li className="header__navbar-link header__navbar-astra">
                    <a href="#" className="header__navbar-astraLink">Astra</a>
                </li>
                <li className="header__navbar-link header__navbar-account">
                <a href="#" className="header__navbar-astraLink">Tài khoản</a>
                </li>
                <li className="header__navbar-link header__navbar-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </li>
            </div>
        </ul>
    </nav>
  )
}