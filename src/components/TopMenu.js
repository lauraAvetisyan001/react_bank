import React from 'react';
import logo from '../images/logo.png'
import specialOffice from '../images/Vector.png';
import '../styles/TopMenu.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';

const TopMenu = () => {
    return (
        <>
    <div className='top_menu'>
        <div className='top_menu_content'>          
            <img className='logo' src={logo} alt='logo'/>
            <h3>Банк</h3>
            <nav className='menu_items'>
                <li id='services_item'>Послуги</li>
                <li id='convertor_item'>
                <Link to={'/converter'}>
                Конвертер валют
                </Link>
                </li>
                <li id='contacts_item'>Контакти</li>
                <li id='question_item'>Задати питання</li>
            </nav>
            <img className='special_office' src={specialOffice} alt='special office'/>
            <h3 className='special_office_title'>Особистий кабінет</h3>
        </div>
    </div>
    <Outlet/>
    </>
    );
};

export default TopMenu;