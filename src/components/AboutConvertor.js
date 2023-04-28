import React from 'react';
import MainContent from './MainContent';
import '../styles/AboutConvertor.css';
import about_img from '../images/image 1.png'
import TopMenu from './TopMenu';
import FooterMain from './FooterMain';


const AboutConvertor = () => {
    return (
        <div>
            <MainContent/>
           <div className='convertor_container'>
            <h1 className='convertor_item'>Конвертeр валют</h1>
            <h3 className='convertor_description'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</h3>
            <button className='convertor_btn'>Конвертувати валюту</button>
            <img className='convertor_container_img' src={about_img} alt='card'/>
           </div>
           <FooterMain/>
        </div>
    );
};

export default AboutConvertor;