import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CreateCalendar({calendarValue, onChangeCalendar}) {

const [showCalendar, setShowCalendar] = useState(false);
const minDate = new Date();

const maxDate = new Date(minDate);
  maxDate.setDate(minDate.getDate() + 7);

const handleButtonClick = () => {
  setShowCalendar(!showCalendar);
};

    return (
        <div className='calendar'>
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
               
            </div>
    );
};
export default CreateCalendar;