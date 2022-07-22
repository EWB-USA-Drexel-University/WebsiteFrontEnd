import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export function SlideShow() {

    let properties = {
        duration: 10000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: false,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    };

    return (
        <div className='slide-container'>
            <Slide {...properties}>
                <div className='each-slide'>
                    <div className={'each-slide'}>
                        <span><img src={require('../../images/landscape.JPG')} alt='sample'
                            width={"100%"} height={"100%"} /></span>
                    </div>
                </div>
                <div className='each-slide'>
                    <div className={'each-slide'}>
                        <span><img src={require('../../images/circle.jpg')} alt='sample'
                            width={"100%"} height={"100%"} /></span>
                    </div>
                </div>
                <div className='each-slide'>
                    <div className={'each-slide'}>
                        <span><img src={require('../../images/hiker_hill.JPG')} alt='sample'
                            width={"100%"} height={"100%"} /></span>
                    </div>
                </div>
                <div className='each-slide'>
                    <div className={'each-slide'}>
                        <span><img src={require('../../images/surveying.jpg')} alt='sample'
                            width={"100%"} height={"100%"} /></span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}