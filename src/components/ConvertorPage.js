import React, {useEffect, useState, useCallback} from 'react';
import FooterMain from './FooterMain';
import '../styles/ConvertorPage.css';
import MainContent from './MainContent';
import exchange from '../images/exchange.png';
import ConvertorStoryItem from './ConvertorStoryItem';
import CreateCalendar from './Calendar';
import arrow from '../images/arrow.png'


const ConvertorPage = () => {

const [calendarValue, onChangeCalendar] = useState(new Date());
const [haveOption, setHaveOption] = useState(0);
const [iHaveCurrency, setIHaveCurrency] = useState("UAH");
const [wantHaveInput, setWantHaveInput] = useState(0);
const [wantHaveCurrency, setWantHaveCurrency] = useState("USD");
const [convertorStory, setConvertorStory] = useState([]);
console.log(convertorStory)
const createStoryValues = useCallback(()=>{
        return[
            {
            date: calendarValue.toDateString(),
            haveSum: haveOption,
            wantSum: wantHaveInput,
            },
        ] 
    }, [calendarValue, haveOption, wantHaveInput])

    console.log(wantHaveInput)
   

const currencyes = ['UAH', 'USD', 'EUR'];

const myHeaders = new Headers();
myHeaders.append("apikey", "Ro0SyGnj9s8O5qAIWsErhDEI7xWmmMG0");


const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

async function haveConvertor(e){
   const amount = e.target.value
   setHaveOption(amount)
     const response =  await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${wantHaveCurrency}&from=${iHaveCurrency}&amount=${amount}`, requestOptions)
        const data = await response.json();
        const result = data.result;
        setWantHaveInput(result)
   }


async function wantHaveConvertor(e){
    const amount = e.target.value;
    setWantHaveInput(amount)
      const response =  await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${iHaveCurrency}&from=${wantHaveCurrency}&amount=${amount}`, requestOptions)
         const data = await response.json();
         const result = data.result;
         setHaveOption(result)
    }


useEffect(()=>{
        const storyValues = createStoryValues()
        setConvertorStory([...storyValues])
}, [createStoryValues])


function clearStory(){
    setConvertorStory([])
}

function saveResults(){
    const storyValues = createStoryValues()
    convertorStory.slice(1)
    setConvertorStory([...convertorStory, storyValues])
    console.log(storyValues)
}


async function handleHaveCurrency(e){
setWantHaveCurrency(e.target.value)
  const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${iHaveCurrency}&from=${wantHaveCurrency}&amount=${wantHaveInput}`, requestOptions)
     const data = await response.json();
     const result = data.result;
     setHaveOption(result)
}

async function handleWantHaveCurrency(e){
    setIHaveCurrency(e.target.value)
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${wantHaveCurrency}&from=${iHaveCurrency}&amount=${haveOption}`, requestOptions)
     const data = await response.json();
     const result = data.result;
     setWantHaveInput(result)
}

return (
        <div>
            <MainContent/>
             <div className='convertor_main'>
               <div className='convertor_content'>
                <h1 className='convertor_content_item'>Конвертер валют</h1>
                <div className='i_have'>
                    <h5>В мене є:</h5>
                    <input className='i_have_input' placeholder='1000' onChange={haveConvertor} value={haveOption}/>
                    <select className='i_have_select' onChange={handleWantHaveCurrency}>
                    {currencyes.map((item, index)=>
                        <option value={item} key={index}>{item}</option>
                        )}
                        </select>
                </div>
                <img className='exchange_img' src={exchange} alt='exchange'/>
                <div className='want_have'>
                    <h5>Хочу придбати:</h5>
                    <input className='want_have_input' placeholder={wantHaveInput} onChange={wantHaveConvertor} value={wantHaveInput}/>
                    <select className='want_have_select' onChange={handleHaveCurrency}>
                        {currencyes.map((item, index)=>
                        <option value={item} key={index}>{item}</option>
                        )}
                    </select>
                    <div className='save_results'>
                    <input className='date_input' placeholder='01.01.2023' value={calendarValue.toDateString()} />
                    <button className='save_button' onClick={saveResults}>Зберегти результат</button>
                    </div>
                </div>
               <CreateCalendar calendarValue={calendarValue} onChangeCalendar={onChangeCalendar}/>
                 </div>
            </div>
        <div className='convertor_story_content'>
                <h3 className='convertor_story_item'>Історія конвертації</h3>
                <button className='convertor_story_btn' onClick={clearStory}>Очистити історію</button>
            {convertorStory.map((item, index)=>(
            <div className='convertor_story_container' key={index}>
                <div className='convertor_story_operetion'>
                    <h5 className='convertor_operetion_date'>{item.date}</h5>
                    <h5 className='convertor_operetion_sum'>{item.haveSum} {iHaveCurrency}</h5>
                    <img className='arrow_img' src={arrow} alt='arrow'/>
                    <h5 className='converted_operation_sum'>{item.wantSum} {wantHaveCurrency}</h5>
                </div>
        </div>
                    ))}
        </div>
            <FooterMain/>
        </div>
     
    );
};
export default ConvertorPage;