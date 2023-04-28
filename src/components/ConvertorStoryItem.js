import React from 'react';
import ConvertorStory from './ConvertorStory';
import '../styles/ConvertorStoryItem.css'

const ConvertorStoryItem = () => {
    return (
        <div className='convertor_story_content'>
            <h3 className='convertor_story_item'>Історія конвертації</h3>
            <button className='convertor_story_btn'>Очистити історію</button>
            <ConvertorStory/>
            <ConvertorStory/>
            <ConvertorStory/>
        </div>
    );
};

export default ConvertorStoryItem;