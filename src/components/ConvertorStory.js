import React from 'react';
import arrow from '../images/arrow.png'


const ConvertorStory = () => {


   
    return (
        <div className='convertor_story_container'>
            <div className='convertor_story_operetion'>
                <h5 className='convertor_operetion_date'>13.03.2023</h5>
                <h5 className='convertor_operetion_sum'>1000 UAH</h5>
                <img className='arrow_img' src={arrow} alt='arrow'/>
                <h5 className='converted_operation_sum'>38.7 USD</h5>
            </div>
        </div>
    );
};

export default ConvertorStory;