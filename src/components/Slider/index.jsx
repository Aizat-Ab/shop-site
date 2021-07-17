import React from 'react';
import './index.scss';
import sliderImg from '../../assets/slider.png';
import sliderLogo from '../../assets/Logo.png';

const Slider = () => {
    return (
        <div className='slider'>
            <img className='slider__woman col-6' src={sliderImg} alt="woman" />
            <img className='slider__logo col-6' src={sliderLogo} alt="logo" />
        </div>
    )
}

export default Slider
