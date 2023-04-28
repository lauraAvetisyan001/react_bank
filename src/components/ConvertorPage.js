import React, {useState} from 'react';
import FooterMain from './FooterMain';
import '../styles/ConvertorPage.css';
import MainContent from './MainContent';
import exchange from '../images/exchange.png';
import ConvertorStoryItem from './ConvertorStoryItem';
import CreateCalendar from './Calendar';
import arrow from '../images/arrow.png'


const ConvertorPage = (...storyValues) => {

console.log(storyValues)

const [haveOption, setHaveOption] = useState(0.0);
const [iHaveCurrency, setIHaveCurrency] = useState("UAH");
const [wantHaveInput, setWantHaveInput] = useState(0.0);
const [wantHaveCurrency, setWantHaveCurrency] = useState("USD");


function changeIHaveValue(e){
    console.log(e.target.value/37)
    setWantHaveInput(parseFloat(e.target.value/37))
}


function handleIHaveCurrencyValue(e){
    setIHaveCurrency(e.target.value)
    if(iHaveCurrency === 'UAH'){
        setWantHaveInput(haveOption/37)
    } else if(iHaveCurrency === 'EUR'){
        setWantHaveInput(haveOption/41)
    }
    console.log(iHaveCurrency)
}

const convertorValues={
    UAH: 37,
    USD: 37,
    EUR: 41,
}



    return (
        
        <div>
            <MainContent/>
             <div className='convertor_main'>
               <div className='convertor_content'>
                <h1 className='convertor_content_item'>Конвертер валют</h1>
                <div className='i_have'>
                    <h5>В мене є:</h5>
                    <input onChange={changeIHaveValue} className='i_have_input' placeholder='1000'/>
                    <select className='i_have_select' value={iHaveCurrency} onChange={handleIHaveCurrencyValue}>
                        <option value='UAH' selected>UAH</option>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </div>
                <img className='exchange_img' src={exchange} alt='exchange'/>
                <div className='want_have'>
                    <h5>Хочу придбати:</h5>
                    <input className='want_have_input' placeholder={wantHaveInput.toFixed(1)}/>
                    <select className='want_have_select'>
                        <option value='UAH'>UAH</option>
                        <option value='USD' selected>USD</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </div>
               <CreateCalendar haveOption={haveOption}/>
                 </div>
            </div>
        <div className='convertor_story_content'>
                <h3 className='convertor_story_item'>Історія конвертації</h3>
                <button className='convertor_story_btn'>Очистити історію</button>
            <div className='convertor_story_container'>
                <div className='convertor_story_operetion'>
                    <h5 className='convertor_operetion_date'>{storyValues.date}</h5>
                    <h5 className='convertor_operetion_sum'>{storyValues.haveSum}</h5>
                    <img className='arrow_img' src={arrow} alt='arrow'/>
                    <h5 className='converted_operation_sum'>{storyValues.wantSum} USD</h5>
                </div>
        </div>
        </div>
            <FooterMain/>
        </div>
     
    );
};
export default ConvertorPage;