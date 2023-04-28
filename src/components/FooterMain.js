import React from 'react';
import AboutConvertor from './AboutConvertor';
import logo from '../images/logo.png';
import phoneImg from '../images/phone.png';
import mobileImg from '../images/Vector-2.png';
import facebook from '../images/facebook.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import '../styles/FooterMain.css';


const FooterMain = () => {
    return (
        <div>
          <div className='footer'>
            <div className='logo'>
            <img className='logo_img' src={logo} alt='logo'/>
            <h3 className='item_bank'>Банк</h3>
           </div>
          <h5 className='adress'>04128, м.Київ, вул. Хрещатик, 19 <br></br>
              Ліцензія НБУ №156 <br></br>
              Ⓒ Банк, 2019-2023
          </h5>
          <ul className='footer_items'>
            <li>Послуги</li>
            <li>Конвертор валют</li>
            <li>Контакти</li>
            <li>Задати питання</li>
          </ul>
          <div className='contacts'>
            <img className='phone' src={phoneImg} alt='phone' ></img>
            <h5 className='phone_number'>+3700</h5>
            <p className='call_us'>Якщо що, дзвоніть в ПриватБанк</p>
          </div>

        <div className='mobile'>
          <img className='mobile_img' src={mobileImg} alt='mobile'/>
          <h5 className='mobile_number'>8 800 111 22 33</h5>
          <p className='free_call'>Безкоштовно для дзвінків в межах України</p>
        </div>
      </div>

      <div className='social_media'>
        <img className='social_media_img' src={facebook} alt='facebook'/>
        <img className='social_media_img' src={insta} alt='insta'/>
        <img className='social_media_img' src={twitter} alt='twitter'/>
        <img className='social_media_img' src={youtube} alt='youtube'/>
      </div>
    </div>
    );
};
export default FooterMain;