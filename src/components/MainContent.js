import React from 'react';
import TopMenu from './TopMenu';
import cardImg from '../images/standard-mastercard-card-debit_1280x720 2.png';
import '../styles/MainContent.css'


const MainContent = () => {
    return (
    <div>
      <TopMenu/>
      <div className='main_content'>
            <h1 className='bank_item'>Банк</h1>
            <h3 className='bank_description'>Обмінник валют - навчальний</h3>
            <button className='bank_button'>Конвертор валют</button>
        <div className='master_card'>
            <img className='card_img' src={cardImg} alt='master card'/>
        </div>
      </div>
    </div>
    );
};

export default MainContent;