import React from 'react'
import './index.css'
import logoImg from '../asset/img/logo-tiki.png';
import { Button } from 'antd';

export default function index() {
  return (
    <nav className="header__navbar header_navbar--success">
        <ul className="header__navbar-list">
            <li className="header__logo">
                <img src={logoImg} alt='tiki' className='logo__tikiImg'></img>
                <div className="header__navbar-searchs">
                    <i className="fa-solid fa-magnifying-glass header__navbar-searchs-item"></i>
                    <input type="text" className='header__navbar-search header__navbar-search-seperate'/>
                    <Button className="header__navbar-search-button"> Tìm kiếm</Button>
                </div>
            </li>
            <div className="header__navbar-links">
                <li className="header__navbar-link header__navbar-home">
                    <a href="#" className="a-link-common header__navbar-homeLink">Trang chủ</a>
                </li>
                <li className="header__navbar-link header__navbar-astra">
                    <a href="#" className="a-link-common header__navbar-astraLink">Astra</a>
                </li>
                <li className="header__navbar-link header__navbar-account">
                    <a href="#" className="a-link-common header__navbar-astraLink">Tài khoản</a>
                </li>
                <li className="header__navbar-link header__navbar-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </li>
            </div>
        </ul>
    </nav>
  )
}
