import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ConvertorPage from './ConvertorPage';

const CreateCalendar = ({haveOption, wantHaveInput}) => {

console.log(haveOption)

    const [calendarValue, onChangeCalendar] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

// const [date, setDate] = useState(new Date());
  const minDate = new Date();

  const maxDate = new Date(minDate);
  maxDate.setDate(minDate.getDate() + 7);

const handleButtonClick = () => {
  setShowCalendar(!showCalendar);
};


const storyValues={
    date: calendarValue.toDateString(),
    haveSum: haveOption,
    wantSum: wantHaveInput,
}

// const handleCloseCalendar = () => {
//     setShowCalendar(false);
//   };



    return (
        <div className='save_results'>
        <button className='calendar_btn' onClick={handleButtonClick}></button> 
        {showCalendar && ( 
        <div>
                <Calendar 
                onChange={onChangeCalendar}
                value={calendarValue}
                minDate={minDate}
                maxDate={maxDate}
                />
                </div>)}
                <input className='date_input' placeholder='01.01.2023' value={storyValues.date} myProps={calendarValue.toDateString()}/>
                <button className='save_button'>Зберегти результат</button>
            </div>
    );
};

export default CreateCalendar;